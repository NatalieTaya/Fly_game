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

    movex(a) {
        let cubic=document.getElementById("cube");
        let timermoveX = setInterval(function() {
            if (a < posionmouseX-currentpositionX && a < flystep && 
                currentpositionX>=10 && currentpositionX<=screenwidth-60 ){
                cubic.style.left = currentpositionX - a + "px";
                currentpositionX=cubic.offsetLeft
                a+=2
            } 
            else if (a <= currentpositionX-posionmouseX && a < flystep && 
                currentpositionX>=10 && currentpositionX<=screenwidth-60 ){
                cubic.style.left = currentpositionX + a + "px";  
                currentpositionX=cubic.offsetLeft
                a+=2
            }
        },time)
    }

    movey(a){
        let timermoveY = setInterval(function() {
        if (a < posionmouseY-currentpositionY && a < flystep && 
            currentpositionY>=10 && currentpositionY<=screenheight-50){
            cubic.style.top = currentpositionY - a + "px";
            currentpositionY=cubic.offsetTop
            a+=2
        } else if (a <= currentpositionY-posionmouseY && a < flystep && 
            currentpositionY>=10 && currentpositionY<=screenheight-50){
            cubic.style.top = currentpositionY + a + "px";  
            currentpositionY=cubic.offsetTop
            a+=2
        }
    
        },time)
    }

}