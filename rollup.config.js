/* eslint-env node */

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import sourcemaps from 'rollup-plugin-sourcemaps';

const config = {
  input: 'src/react-leonardo-ui.js',
  output: {
    name: 'reactLUI',
    file: 'dist/react-leonardo-ui.js',
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: [
    'react',
    'react-dom',
  ],
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
  config.output.file = 'dist/react-leonardo-ui.min.js';
  config.plugins.push(uglify());
} else {
  config.plugins.push(sourcemaps());
}

export default config;
