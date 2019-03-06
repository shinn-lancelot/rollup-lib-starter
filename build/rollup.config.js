import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import flow from 'rollup-plugin-flow-no-whitespace'
import json from 'rollup-plugin-json'
import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'
import serve from 'rollup-plugin-serve'
import pkg from '../package.json'

const production = !process.env.ROLLUP_WATCH
const version = process.env.VERSION || pkg.version
const libName = 'RollupLib'
const birthYear = 2018
const banner =
    '/*\n' +
    ` * ${libName} v${version}\n` +
    ` * (c) ${birthYear}-${new Date().getFullYear()} ${pkg.author}\n` +
    ` * Released under the ${pkg.license} License.\n` +
    ' */'
const outPath = './dist/'
const outFileInfo = {
  'dev': {
    'cjs': pkg.main,
    'esm': pkg.module,
    'umd': pkg.browser
  },
  'prod': {
    'cjs': outPath + libName.toLowerCase() + '.cjs.min.js',
    'esm': outPath + libName.toLowerCase() + '.esm.min.js',
    'umd': outPath + libName.toLowerCase() + '.min.js'
  }
}
const outPutCss = {
  'dev': outPath + libName.toLowerCase() + '.css',
  'prod': outPath + libName.toLowerCase() + '.min.css'
}

export default {
  input: 'src/index.js',
  output: [
    {
      file: production ? outFileInfo.prod.cjs : outFileInfo.dev.cjs,
      format: 'cjs',
      banner: banner,
      name: libName
    },
    {
      file: production ? outFileInfo.prod.esm : outFileInfo.dev.esm,
      format: 'es',
      banner: banner,
      name: libName
    },
    {
      file: production ? outFileInfo.prod.umd : outFileInfo.dev.umd,
      format: 'umd',
      banner: banner,
      name: libName
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    buble({
      include: 'src/js/**'
    }),
    production && terser(),
    flow(),
    json(),
    postcss({
      // minimize: production && true,  // 已用cssnano替代压缩工作
      plugins: [production && cssnano],
      extract: production ? outPutCss.prod : outPutCss.dev
    }),
    production ||
      serve({
        open: true,
        openPage: '/example/index.html',
        contentBase: '',
        host: 'localhost',
        port: 1180
      })
  ]
}
