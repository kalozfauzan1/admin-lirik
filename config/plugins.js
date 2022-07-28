module.exports = ({ env }) => ({
  'transformer': {
    enabled: true,
    config: {
      prefix: '/api/',
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      }
    }
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    provider: 'local-custom-path',
    enabled: true,
    providerOptions: {
      path: env('UPLOADS_PATH') || 'public/uploads',
      sizeLimit: 100000
    },
  },
});
