/* eslint-disable */
const path = require('path');
const uglify = require('rollup-plugin-uglify');
const vue = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const { rollup } = require('rollup');
const chalk = require('chalk');
const gulp = require('gulp');
const jsonfile = require('jsonfile');
const fs = require('fs');

const { version } = require('./package.json');
const packageJson = jsonfile.readFileSync('./package.json');
const paths = { src: 'src/components/**/*.vue', dist: 'dist' };
const componetsVueJs = [
    'dgt-autocomplete', '' +
    'dgt-card',
    'dgt-component-grid',
    'dgt-grid',
    'dgt-list',
    'dgt-star-rating',
    'dgt-tabs',
    'dgt-tab',
    'dgt-tag-input',
    'dgt-pagination',
    'dgt-layout',
    'dgt-toast',
    'dgt-thumbnail',
    'dgt-collapse'];
const banner =
    `${'/*!\n' +
    ' * dgt-vue-components'}${version}\n` +
    ` * (c) 2018-${new Date().getFullYear()} Digitro\n` +
    ' */';

/*
    const configs = {
        umd: {
            output: '.js',
            format: 'umd'
        },
        umdMin: {
            output: '.min.js',
            format: 'umd',
            plugins: [uglify()]
        },
        cjs: {
            output: '.common.js',
            format: 'cjs'
        },
        esm: {
            output: '.esm.js',
            format: 'es'
        }
    }
*/

const configs = {
    umd: {
        output: '.js',
        format: 'umd'
    }
};
gulp.task('compile-vue-components', async () => {
    for (let i = 0; i < componetsVueJs.length; i++) {
        Object.keys(configs).forEach(async function (key) {
            const config = configs[key];
            console.log(chalk.cyan(`Building ${key}: ${config.output}`));
            const inputOptions = {
                input: path.join(__dirname, 'src', 'components', `${componetsVueJs[i]}.vue`),
                plugins: [
                    vue({
                        css: true,
                        compileTemplate: true
                    }),
                    postcss({
                        plugins: [
                            autoprefixer()
                        ]
                    })
                ].concat(config.plugins || [])
            };
            const bundle = await rollup(inputOptions);
            const outputOptions = {
                file: path.join(__dirname, 'dist', `${componetsVueJs[i]}${config.output}`),
                format: config.format,
                banner,
                name: componetsVueJs[i]
            };
            await bundle.write(outputOptions);
        });
    }
});

gulp.task('generate-dist-package-json', async () => {
    const newPackageJson = { name: `${packageJson.name}`, version: packageJson.version, private: false, dependencies: packageJson.dependencies };
    const distPackageJson = `./${paths.dist}/package.json`;
    jsonfile.writeFileSync(distPackageJson, newPackageJson, { spaces: 2 });
    return;
});

gulp.task('generate-readme', () => {
    fs.createReadStream('README.md').pipe(fs.createWriteStream(`./${paths.dist}/README.md`));
    return;
});

gulp.task('build', ['compile-vue-components', 'generate-dist-package-json', 'generate-readme'], async () => {
    await console.log(chalk.green('All modules built'));
});
