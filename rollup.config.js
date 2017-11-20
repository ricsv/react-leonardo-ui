/* eslint-env node */

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import sourcemaps from 'rollup-plugin-sourcemaps';

const config = {
  entry: 'src/react-leonardo-ui.js',
  dest: 'dist/react-leonardo-ui.js',
  moduleName: 'React Leonardo UI',
  format: 'umd',
  external: [
    'react',
    'react-dom',
  ],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      modulesOnly: true,
      customResolveOptions: {
        moduleDirectory: 'src',
      },
    }),
  ],
};

if (process.env.BUILD === 'production') {
  config.dest = 'dist/react-leonardo-ui.min.js';
  config.plugins.push(uglify());
} else {
  config.plugins.push(sourcemaps());
}

export default config;
