import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify-es';
import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                sourcemap: true,
                file: 'dist/index.esm.js',
                name: 'storna',
                format: 'es',
            },
        ],
        external: ['vue'],
        plugins: [
            typescript(),
            vue({
                css: false,
                compileTemplate: true,
            }),
            buble(),
            uglify(),
        ],
    },
    {
        input: 'src/index.ts',
        output: [
            {
                sourcemap: true,
                name: 'storna',
                file: 'dist/index.umd.js',
                format: 'umd',
            },
        ],
        plugins: [
            typescript(),
            vue({
                css: false,
                compileTemplate: true,
            }),
            buble(),
            uglify(),
        ],
    },
    {
        input: 'src/index.ts',
        output: [
            {
                sourcemap: true,
                name: 'storna',
                file: "dist/index.min.js",
                format: 'iife',
            },
        ],
        plugins: [
            typescript(),
            vue({
                css: false,
                compileTemplate: true,
            }),
            buble(),
            uglify(),
        ],
    },
]
