import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import flow from 'rollup-plugin-flow-no-whitespace'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH
const version = process.env.VERSION || pkg.version
const banner =
    '/*\n' +
    ` * rollup-lib-starter v${version}\n` +
    ` * (c) 2018-${new Date().getFullYear()} shinn_lancelot\n` +
    ' * Released under the MIT License.\n' +
    ' */';
const libName = 'rollupLib' || pkg.name

export default [
    {
        input: 'src/main.js',
        output: [
            {
                file: pkg.main,
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
                file: pkg.module,
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
                file: pkg.browser,
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
