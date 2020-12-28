class Food {
    constructor(image,x,y,width,height) {
        this._image = image;
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    showFood(food,x,y,canvas) {
        if (food < 1) {
            return food.random;
        }
    }
}