"use strict";
exports.__esModule = true;
exports.points = exports.shape = void 0;
var shape = /** @class */ (function () {
    function shape(edges, points) {
        this.points = [];
        this.distances = [];
        this.edges = edges;
        this.points = points;
        this.distances = [];
        this.distance();
    }
    shape.prototype.distance = function () {
        var m, n;
        for (var i = 0; i < this.edges; i++) {
            m = i;
            n = (i + 1) % this.edges;
            this.distances[i] = Math.sqrt(Math.pow((this.points[m].x - this.points[n].x), 2) + Math.pow((this.points[m].y - this.points[n].y), 2));
        }
    };
    shape.prototype.perimeter = function () {
        var sum = 0;
        for (var i = 0; i < this.edges; i++) {
            sum += this.distances[i];
        }
        return sum;
    };
    shape.prototype.area = function () {
        if (this.edges)
            var s = this.perimeter() / 2;
        var mul;
        if (this.edges === 3) {
            mul = s;
        }
        else {
            mul = 1;
        }
        for (var i = 0; i < this.edges; i++) {
            mul *= (s - this.distances[i]);
        }
        return Math.sqrt(mul);
    };
    return shape;
}());
exports.shape = shape;
var points = /** @class */ (function () {
    function points(x, y) {
        this.x = x;
        this.y = y;
    }
    return points;
}());
exports.points = points;
var square = new shape(4, [new points(0, 0), new points(0, 2), new points(2, 2), new points(2, 0)]);
console.log("Perimeter = " + square.perimeter());
console.log("Area = " + square.area());
var triangle = new shape(3, [new points(0, 0), new points(0, 2), new points(2, 2)]);
console.log("Perimeter = " + triangle.perimeter());
console.log("Area = " + triangle.area());
var rectangle = new shape(4, [new points(0, 0), new points(0, 4), new points(2, 4), new points(2, 0)]);
console.log("Perimeter = " + rectangle.perimeter());
console.log("Area = " + rectangle.area());
