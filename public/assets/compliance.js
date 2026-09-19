/* BatchBG 合规出口：导出前体检（分辨率/清晰度/超大）+ 自动修复
 *  - 小图：分步放大（单步 ≤2x，比一步放大保留更多细节）到平台下限 + Unsharp Mask 锐化
 *  - 模糊源图：USM 锐化补救
 *  - 超大图：缩回 10000px 内（Amazon/JPEG 硬上限）
 * 依赖浏览器 Canvas API，以普通 script 引入，挂 window.BatchCompliance
 */
window.BatchCompliance = (function () {
  'use strict';

  const MIN_SIDE = 1600;   // 导出兜底：低于 1000px 的图放大到 min-side 1600（Amazon 下限，推荐 2000 由预设覆盖）
  const MAX_SIDE = 10000;  // 平台硬上限
  const BLUR_THRESHOLD = 80; // 拉普拉斯方差低于此值判定为模糊（512px 宽度上测量）

  // 分步重采样：每次最多放大 2 倍，最后一步精确到位
  function stepResize(src, tw, th) {
    let cur = src;
    while (cur.width * 2 < tw || cur.height * 2 < th) {
      const c = document.createElement('canvas');
      c.width = Math.min(cur.width * 2, tw);
      c.height = Math.min(cur.height * 2, th);
      const x = c.getContext('2d');
      x.imageSmoothingEnabled = true;
      x.imageSmoothingQuality = 'high';
      x.drawImage(cur, 0, 0, c.width, c.height);
      cur = c;
    }
    if (cur.width === tw && cur.height === th) return cur;
    const c = document.createElement('canvas');
    c.width = tw; c.height = th;
    const x = c.getContext('2d');
    x.imageSmoothingEnabled = true;
    x.imageSmoothingQuality = 'high';
    x.drawImage(cur, 0, 0, tw, th);
    return c;
  }

  // Unsharp Mask：out = src + amount * (src - blur(1px))，只改 RGB，保留 alpha
  function unsharp(cv, amount) {
    amount = amount || 0.6;
    const w = cv.width, h = cv.height;
    const blur = document.createElement('canvas');
    blur.width = w; blur.height = h;
    const bx = blur.getContext('2d', { willReadFrequently: true });
    bx.filter = 'blur(1px)';
    bx.drawImage(cv, 0, 0);
    const ctx = cv.getContext('2d', { willReadFrequently: true });
    const a = ctx.getImageData(0, 0, w, h).data;
    const b = bx.getImageData(0, 0, w, h).data;
    for (let i = 0; i < a.length; i += 4) {
      if (a[i + 3] === 0) continue;
      for (let k = 0; k < 3; k++) {
        const v = a[i + k] + amount * (a[i + k] - b[i + k]);
        a[i + k] = v < 0 ? 0 : v > 255 ? 255 : v;
      }
    }
    ctx.putImageData(new ImageData(a, w, h), 0, 0);
    return cv;
  }

  // 清晰度评分：灰度拉普拉斯方差（512px 宽上测量——256 太小会把真实模糊抹平）
  function sharpness(cv) {
    const tw = 512;
    const th = Math.max(2, Math.round(cv.height * tw / cv.width));
    const c = document.createElement('canvas');
    c.width = tw; c.height = th;
    const x = c.getContext('2d', { willReadFrequently: true });
    x.drawImage(cv, 0, 0, tw, th);
    const d = x.getImageData(0, 0, tw, th).data;
    const g = new Float32Array(tw * th);
    for (let i = 0, p = 0; i < d.length; i += 4, p++)
      g[p] = d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114;
    let sum = 0, sum2 = 0, n = 0;
    for (let y = 1; y < th - 1; y++) {
      for (let xx = 1; xx < tw - 1; xx++) {
        const p = y * tw + xx;
        const l = 4 * g[p] - g[p - 1] - g[p + 1] - g[p - tw] - g[p + tw];
        sum += l; sum2 += l * l; n++;
      }
    }
    if (!n) return 0;
    const mean = sum / n;
    return sum2 / n - mean * mean;
  }

  // 体检：issues 为空即合规
  function analyze(cv) {
    const issues = [];
    const minSide = Math.min(cv.width, cv.height);
    const sharp = sharpness(cv);
    if (minSide < 1000) issues.push('low-res');
    if (Math.max(cv.width, cv.height) > MAX_SIDE) issues.push('huge');
     if (sharp < BLUR_THRESHOLD) issues.push('blurry');
    return { w: cv.width, h: cv.height, sharp: Math.round(sharp), issues };
  }

  // 修复：返回（可能替换后的）画布；cv._report 描述做了什么
  function fix(cv) {
    const fixed = [];
    const maxSide0 = Math.max(cv.width, cv.height);
    if (maxSide0 > MAX_SIDE) {
      const k = MAX_SIDE / maxSide0;
      cv = stepResize(cv, Math.round(cv.width * k), Math.round(cv.height * k));
      fixed.push('downscaled to ' + cv.width + '×' + cv.height);
    }
    const minSide = Math.min(cv.width, cv.height);
    if (minSide < 1000 && Math.max(cv.width, cv.height) * (MIN_SIDE / minSide) <= MAX_SIDE) {
      const k = MIN_SIDE / minSide;
      const out = stepResize(cv, Math.round(cv.width * k), Math.round(cv.height * k));
      unsharp(out, 0.7);
      fixed.push('upscaled ' + cv.width + '×' + cv.height + ' → ' + out.width + '×' + out.height + ' + sharpened');
      cv = out;
    } else if (sharpness(cv) < BLUR_THRESHOLD) {
      unsharp(cv, 0.6);
      fixed.push('sharpened');
    }
    cv._report = fixed.join(' · ');
    return cv;
  }

  return { analyze, fix, stepResize, unsharp, sharpness, MIN_SIDE, MAX_SIDE, BLUR_THRESHOLD };
})();
