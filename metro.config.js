const path = require('path');
const fs = require('fs');
const {getDefaultConfig} = require('metro-config');

const exists = pathName => {
  try {
    return fs.existsSync(pathName);
  } catch {
    return false;
  }
};

/**
 * Looks and returns module where it's found, from:
 * 1. Website/node_modules
 * 2. Website/src/native/node_modules
 * @param {*} moduleName
 * @returns
 */
const pathToModule = (defaultModulesDir, moduleName) => {
  // 1. Look in local node_modules
  let pathDir = path.join(process.cwd(), `./node_modules/${moduleName}`);

  if (exists(pathDir)) {
    return pathDir;
  }

  // 2. Look in root node_modules
  pathDir = path.join(process.cwd(), `../../node_modules/${moduleName}`);

  if (exists(pathDir)) {
    return pathDir;
  }

  // 3. Look in designated parent directories
  if (defaultModulesDir[moduleName]) {
    return defaultModulesDir[moduleName];
  }

  console.log('Failed to find the module');

  return '';
};

// Enable access to `lib` top level directory
const customConfig = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      extraNodeModules: new Proxy(
        {
          '@store': path.resolve(__dirname, './app/config/store'),
        },
        {
          get: (defaultModulesDir, moduleName) =>
            pathToModule(defaultModulesDir, moduleName),
        },
      ),
    },
    projectRoot: path.resolve(__dirname),
    watchFolders: [path.resolve(__dirname, './app')],
  };
})();

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = customConfig;
