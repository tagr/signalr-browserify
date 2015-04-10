var browserify = require("browserify"),
    gulp = require("gulp"),
    jquery = require("jquery"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    uglify = require("gulp-uglify");

gulp.task("default", function () {
    return browserify(["./app.js"]).bundle()
        .pipe(source("app.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(__dirname + "/dist"));
});