import { dependencies } from './package.json';
import type { Rspack } from '@rsbuild/core';

export const mfConfig:  Rspack.ModuleFederationPluginOptions = {
  name: 'remote',
  exposes: {
    './CatCard': './src/CatCard',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};