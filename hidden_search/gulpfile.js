const {src,dest, watch, parallel, series} = require('gulp');
const bSync = require('browser-sync').create();
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel=require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');
const del=require('del');

function browserSync(){
        bSync.init({
                server : {
                        baseDir :'app'
                }
        })
}
function runJs(){
        return src([
                'node_modules/jquery/dist/jquery.js',
                'app/js/index.js'
        ])
        .pipe(eslint.format())
        .pipe(eslint.failOnError())
        .pipe(concat('index.min.js'))
        .pipe(babel({
                presets:['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(bSync.stream())
}
function convertStyles()
{
        return src('app/scss/styles.scss')
                .pipe(scss({outputStyle: 'compressed'}))
                .pipe(concat('styles.min.css'))
                .pipe(autoprefixer({
                        overrideBrowserslist:['last 10 version'],
                        grid: true
                }))
                .pipe(dest('app/css'))
                .pipe(bSync.stream())
}
function watchProject()
{
        watch(['app/js/**/*.js','!app/js/**/*.min.js'],runJs);
        watch(['app/scss/**/*.scss'], convertStyles);
       watch(['app/**/*.html']).on('change', bSync.reload);
}
function build(){
        return src([
        'app/css/styles.min.css',
        'app/fonts/**/*',
        'app/js/*.min.js',
        'app/*.html'
        ],{base:'app'})
        .pipe(dest('dist'))
}
function cleanDist(){
        return del('dist')
}
exports.styles = convertStyles;
exports.watch = watchProject;
exports.browsersync = browserSync;
exports.rJS=runJs;
exports.cleanDist=cleanDist;

exports.build= series(cleanDist,build);

exports.default = parallel(convertStyles,runJs,browserSync,watchProject);
