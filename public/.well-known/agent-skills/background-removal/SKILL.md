# Background Removal Skill

## Overview
AI-powered background removal for images. Process single or multiple images with high accuracy.

## Capabilities

### remove-background
Remove background from a single image.

**Input:**
- `image`: Base64 encoded image or image URL
- `format`: Output format (png or webp, default: png)

**Output:**
- Processed image with transparent background
- Original dimensions preserved

### batch-remove-background
Remove backgrounds from multiple images in one request.

**Input:**
- `images`: Array of base64 encoded images or URLs
- `format`: Output format (png or webp, default: png)

**Output:**
- Array of processed images
- Maintains input order

### compress-image
Compress image to reduce file size while maintaining quality.

**Input:**
- `image`: Base64 encoded image or image URL
- `quality`: Compression quality 1-100 (default: 85)

**Output:**
- Compressed image
- File size reduction statistics

## Usage Examples

### Single Image
```
Remove background from product photo for e-commerce listing
```

### Batch Processing
```
Process 50 product images for Amazon listing
```

### Compression
```
Optimize image for web, target under 200KB
```

## Technical Details

- **Model**: ONNX Runtime Web (WebAssembly)
- **Processing**: 100% local in browser
- **Privacy**: Images never leave user's device
- **Formats**: Input: JPG, PNG, WebP | Output: PNG, WebP
- **Limits**: No file size or quantity limits

## API Endpoints

- `POST /api/remove-bg` - Single image processing
- `POST /api/batch-remove-bg` - Batch processing
- `POST /api/compress` - Image compression

## Rate Limits

- Free tier: Unlimited processing
- No API key required for web usage
- API access available for integration

## Support

- Documentation: https://batchbg.com
- Email: support@batchbg.com