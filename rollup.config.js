/* eslint-env node */

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import sourcemaps from 'rollup-plugin-sourcemaps';

const config = {
  name: 'reactLUI',
  input: 'src/react-leonardo-ui.js',
  output: {
    file: 'dist/react-leonardo-ui.js',
    format: 'umd',
  },
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
  config.output.file = 'dist/react-leonardo-ui.min.js';
  config.plugins.push(uglify());
} else {
  config.plugins.push(sourcemaps());
}

export default config;
