import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH
const version = process.env.VERSION || pkg.version
const banner =
    '/*\n' +
    ` * rollup-lib-starter v${version}\n` +
    ` * (c) 2018-${new Date().getFullYear()} shinn_lancelot\n` +
    ' * Released under the MIT License.\n' +
    ' */';

export default {
    input: 'src/main.js',
    output: [
        {
            file: pkg.browser,
            format: 'umd',
            banner: banner,
            name: 'rollup-lib-starter'
        },
        {
            file: pkg.main,
            format: 'cjs',
            banner: banner,
            name: 'rollup-lib-starter'
        },
        {
            file: pkg.module,
            format: 'es',
            banner: banner,
            name: 'rollup-lib-starter'
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        production && uglify()
    ]
};
