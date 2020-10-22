class Circle {
    constructor(radius, color) {
        this._radius = radius;
        this._color = color;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    getRadius() {
        return this._radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}