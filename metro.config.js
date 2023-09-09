module.exports = {
  resolver: {
    resolverMainFields: ["react-native", "browser", "main"],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
