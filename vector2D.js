class Vector {
    constructor(x, y) { 
        this.x = x;
        this.y = y;
    }

    get_x() {
        return this.x
    }
    get_y() {
        return this.y
    }
    set_x(x) {
        this.x=x
    }
    set_y(y) {
        this.y=y
    }

    angle () {
        return -Math.atan2(this.y,this.x)*57.3 + 90
    }

    length () {
        return Math.hypot(this.x, this.y)
    }

}