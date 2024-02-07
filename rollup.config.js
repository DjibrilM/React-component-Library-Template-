const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs')
const { dts } = require('rollup-plugin-dts');
const packageJson = require('./package.json');
const postcss = require('rollup-plugin-postcss');

module.exports = [
    {
        input: './src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            typescript({ tsconfig: './tsconfig.json' }),
            commonjs(),
            postcss(),
        ]
    },

    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.css$/]
    }
]