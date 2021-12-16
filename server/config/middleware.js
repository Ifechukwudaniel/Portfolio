module.exports = {
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 100 * 1024 * 1024,
      },
    },
  },
};
