interface Navigator {
  gpu?: GPUAdapter | null;
}

interface GPUAdapter {
  requestDevice(): Promise<GPUDevice>;
}

interface GPUDevice {}
