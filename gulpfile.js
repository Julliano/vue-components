/* eslint-disable */
const path = require('path');
const uglify = require('rollup-plugin-uglify');
const vue = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const { rollup } = require('rollup');
const json = require('rollup-plugin-json');
const chalk = require('chalk');
const gulp = require('gulp');
const jsonfile = require('jsonfile');
const fs = require('fs');
const glob = require('glob');
const nodeResolve = require('rollup-plugin-node-resolve');

const { version } = require('./package.json');
const packageJson = jsonfile.readFileSync('./package.json');
const paths = { src: 'src/components/**/*.vue', dist: 'dist' };
const bccPaths = {
    src: './src/bc-components',
    dist: './src/bc-components/dist'
};
const componentsVueJs = glob.sync('./src/components/**/*.vue');
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
    for (let i = 0; i < componentsVueJs.length; i++) {
        Object.keys(configs).forEach(async function (key) {
            const config = configs[key];
            console.log(chalk.cyan(`Building ${key}: ${config.output}`));
            const inputOptions = {
                input: path.join(componentsVueJs[i]),
                plugins: [
                    vue({
                        css: true,
                        compileTemplate: true
                    }),
                    postcss({
                        plugins: [
                            autoprefixer()
                        ]
                    }),
                    json(),
                    nodeResolve({module: true})
                ].concat(config.plugins || [])
            };
            const bundle = await rollup(inputOptions);
            const componentName = componentsVueJs[i].split('components/')[1].replace('.vue', '');
            const outputOptions = {
                file: path.join(__dirname, 'dist', `${componentName}${config.output}`),
                format: config.format,
                banner,
                name: componentName
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
    await console.log(chalk.green('dgt-vue-components built'));
});

gulp.task('compile-bc-components', async () => {
    const bcFilter = bccPaths.src+'/bc-filter.vue';
    console.log(bcFilter);
    Object.keys(configs).forEach(async function (key) {
        const config = configs[key];
        console.log(chalk.cyan(`Building ${key}: ${config.output}`));
        const inputOptions = {
            input: bcFilter,
            plugins: [
                vue({
                    css: true,
                    compileTemplate: true
                }),
                postcss({
                    plugins: [
                        autoprefixer()
                    ]
                }),
                json(),
                nodeResolve({module: true})
            ].concat(config.plugins || [])
        };
        const bundle = await rollup(inputOptions);
        const componentName = bcFilter.split('bc-components/')[1].replace('.vue', '');
        const outputOptions = {
            file: `${bccPaths.dist}/${componentName}${config.output}`,
            format: config.format,
            banner,
            name: componentName
        };
        await bundle.write(outputOptions);
    });

});

gulp.task('copy-dist-package-json-bcc', () => {
    gulp.src(bccPaths.src+'/package.json')
        .pipe(gulp.dest(bccPaths.dist));
});

gulp.task('copy-readme-bcc', () => {
    gulp.src(bccPaths.src+'/README.md')
        .pipe(gulp.dest(bccPaths.dist));
});

gulp.task('build-bcc', ['compile-bc-components', 'copy-dist-package-json-bcc', 'copy-readme-bcc'], async () => {
    await console.log(chalk.green('dgt-vue-bc-components built'));
});
