"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var CourseService = (function () {
    function CourseService(http) {
        var _this = this;
        this.http = http;
        this.loadCourses().subscribe(function (courses) {
            _this.courses = courses;
        }, function (error) {
            console.log(error);
        });
    }
    CourseService.prototype.getCourses = function () {
        return this.courses;
    };
    CourseService.prototype.getCourse = function (id) {
        return Promise.resolve(this.courses).then(function (courses) { return courses.filter(function (course) { return course.id === id; })[0]; });
    };
    CourseService.prototype.loadCourses = function () {
        return this.http.get('./assets/courses.json')
            .map(this.extractData)
            .catch(this.handleError);
    };
    CourseService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body || {};
    };
    CourseService.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    CourseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map