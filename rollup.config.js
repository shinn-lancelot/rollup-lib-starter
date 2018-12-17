import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import flow from 'rollup-plugin-flow-no-whitespace'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH
const version = process.env.VERSION || pkg.version
const libName = "rollupLib" || pkg.name;
const banner =
    '/*\n' +
    ` * ${libName} v${version}\n` +
    ` * (c) 2018-${new Date().getFullYear()} ${pkg.author}\n` +
    ` * Released under the ${pkg.license} License.\n` +
    ' */';
const outPath = './dist/'
const outFileInfo = {
    'cjs': {
        'dev': pkg.main,
        'prod': outPath + libName.toLowerCase() + '.cjs.min.js'
    },
    'esm': {
        'dev': pkg.module,
        'prod': outPath + libName.toLowerCase() + '.esm.min.js'
    },
    'umd': {
        'dev': pkg.browser,
        'prod': outPath + libName.toLowerCase() + '.umd.min.js'
    }
}

export default [
    {
        input: 'src/main.js',
        output: [
            {
                file: production ? outFileInfo.cjs.prod : outFileInfo.cjs.dev,
                format: 'cjs',
                banner: banner,
                name: libName
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            buble(),
            flow(),
            production && terser()
        ]
    },
    {
        input: 'src/main.js',
        output: [
            {
                file: production ? outFileInfo.esm.prod : outFileInfo.esm.dev,
                format: 'es',
                banner: banner,
                name: libName
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            buble(),
            flow(),
            production && terser()
        ]
    },
    {
        input: 'src/main.js',
        output: [
            {
                file: production ? outFileInfo.umd.prod : outFileInfo.umd.dev,
                format: 'umd',
                banner: banner,
                name: libName
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            buble(),
            flow(),
            production && terser()
        ]
    }
]
