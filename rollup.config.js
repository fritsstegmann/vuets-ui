import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify-es';
import typescript from '@rollup/plugin-typescript';
import {eslint} from 'rollup-plugin-eslint';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                sourcemap: 'inline',
                file: 'dist/index.esm.js',
                name: 'storna',
                format: 'es',
            },
            {
                sourcemap: 'inline',
                name: 'storna',
                file: 'dist/index.umd.js',
                format: 'umd',
            },
            {
                sourcemap: 'inline',
                name: 'storna',
                file: "dist/index.min.js",
                format: 'iife',
            },
        ],
        external: ['vue'],
        plugins: [
            typescript(),
            vue({
                css: false,
                compileTemplate: true,
            }),
            eslint({
                fix: false,
            }),
            buble(),
            uglify(),
        ],
    },
]
