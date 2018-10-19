const gulp = require('gulp');
const vueify = require('gulp-vueify');
const jsonfile = require('jsonfile');

const packageJson = jsonfile.readFileSync('package.json');
const paths = {
    src: 'src/components/**/*.vue',
    dist: 'dist'
};

gulp.task('compile-vue-components', function () {
    return gulp.src(paths.src)
        .pipe(vueify())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('generate-dist-package-json', ['compile-vue-components'], function () {
    const newPackageJson = {
        name: packageJson.name + "",
        version: packageJson.version,
        private: false,
        dependencies: packageJson.dependencies
    };
    const distPackageJson = './' + paths.dist + '/package.json';
    jsonfile.writeFileSync(distPackageJson, newPackageJson, {spaces: 2});
    return;
});

gulp.task('build', [ 'generate-dist-package-json']);
