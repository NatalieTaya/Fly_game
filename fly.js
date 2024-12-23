class Fly {
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

    move() {
        let cubic=document.getElementById("cube");
        let i = 0
        for (i = 0; i < 3; i+=1) {
            setTimeout(() =>   { 
                cubic.style.left = currentpositionX - distX/10 + "px";
                cubic.style.top = currentpositionY - distY/10 + "px";
            }, 300)
        }
    }
}