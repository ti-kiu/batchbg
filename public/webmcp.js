(function() {
  'use strict';
  const modelContext = (typeof document !== 'undefined' && document.modelContext) ||
                       (typeof navigator !== 'undefined' && navigator.modelContext);
  if (!modelContext || typeof modelContext.registerTool !== 'function') return;
  const controller = new AbortController();

  modelContext.registerTool({
    name: 'remove_background',
    description: 'Remove background from an image using AI. 100% local processing.',
    inputSchema: {
      type: 'object',
      properties: {
        image: { type: 'string', description: 'Base64 encoded image' },
        format: { type: 'string', enum: ['png', 'webp'], description: 'Output format' }
      },
      required: ['image']
    },
    execute: async (params) => {
      return { status: 'ready', message: 'Use the web interface at /batch-background-remover' };
    },
    signal: controller.signal
  });

  modelContext.registerTool({
    name: 'batch_remove_background',
    description: 'Remove backgrounds from multiple images at once.',
    inputSchema: {
      type: 'object',
      properties: {
        images: { type: 'array', items: { type: 'string' }, description: 'Array of base64 images' },
        format: { type: 'string', enum: ['png', 'webp'] }
      },
      required: ['images']
    },
    execute: async () => {
      return { status: 'ready', message: 'Use the web interface at /batch-background-remover' };
    },
    signal: controller.signal
  });

  modelContext.registerTool({
    name: 'compress_image',
    description: 'Compress image to reduce file size while maintaining quality.',
    inputSchema: {
      type: 'object',
      properties: {
        image: { type: 'string', description: 'Base64 encoded image' },
        quality: { type: 'number', minimum: 1, maximum: 100, description: 'Compression quality' }
      },
      required: ['image']
    },
    execute: async () => {
      return { status: 'ready', message: 'Use the web interface at /batch-image-compressor' };
    },
    signal: controller.signal
  });

  console.log('[WebMCP] Registered 3 tools for AI agents');
})();
