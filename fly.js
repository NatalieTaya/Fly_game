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

    movetosnack() {
        //let cubic=document.getElementById("cube");
        cubic.style.left = X_fly + distX/10 + "px";
        cubic.style.top = Y_fly + distY/10 + "px";
        }
    
    moveaway() {
        let cubic=document.getElementById("cube");
        for (let i = 0; i < 3; i+=1) {
            setTimeout(() =>   { 
                cubic.style.left = X_fly  - distX/5 + "px";
                cubic.style.top = Y_fly - distY/5 + "px";
            }, 100)
        }
    }
}
