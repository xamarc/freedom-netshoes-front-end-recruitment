import * as gulp from 'gulp';
import * as cleanCSS  from 'gulp-clean-css';
import * as concat  from 'gulp-concat';
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function minifyCss() {
    return gulp.src(project.cssMinify.source)
        .pipe(cleanCSS())
        .pipe(concat(project.cssMinify.filename))
        .pipe(gulp.dest(project.cssMinify.output));
}