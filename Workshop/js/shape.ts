export class shape{
    private edges:number;
    private points=[];
    private distances=[];
    constructor(edges,points){
        this.edges=edges;
        this.points=points;
        this.distances=[];
        this.distance();

    }
    distance(){
        var m,n;
        for(var i=0; i<this.edges; i++) {
            m = i;
            n = (i+1)%this.edges;
            this.distances[i] = Math.sqrt(Math.pow((this.points[m].x - this.points[n].x), 2) + Math.pow((this.points[m].y - this.points[n].y), 2));
        }
    }
    perimeter() {
        var sum = 0;
        for(var i=0; i<this.edges; i++) {
            sum += this.distances[i];
        }
        return sum;
    }
    area()
    {
        if (this.edges)
        var s = this.perimeter() / 2;
        var mul;

        if (this.edges === 3) {
            mul = s;
        } else {
            mul = 1;
        }
        for(var i=0; i<this.edges; i++) {
            mul *= (s-this.distances[i]);
        }
        return Math.sqrt(mul);
    }
    
}

export class points{
    private x:number;
    private y:number;

    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

var square = new shape(4, [new points(0, 0), new points(0, 2), new points(2, 2), new points(2, 0)]);
console.log("Perimeter of square = " + square.perimeter());
console.log("Area  of square = " + square.area());

var triangle = new shape(3, [new points(0, 0), new points(0, 2), new points(2, 2)]);
console.log("Perimeter of triangle = " + triangle.perimeter());
console.log("Area of triangle = " + triangle.area());

var rectangle = new shape(4, [new points(0, 0), new points(0, 4), new points(2, 4), new points(2, 0)]);
console.log("Perimeter of rectangle = " + rectangle.perimeter());
console.log("Area of rectangle = " + rectangle.area());