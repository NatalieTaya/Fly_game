let fly=document.getElementById("fly");
let cubic=document.getElementById("cube");
let postext=document.getElementById("counter")
let msg=document.getElementById("msg")
let screenwidth = window.innerWidth;
let screenheight = window.innerHeight;

cubic.style.left = screenwidth/2 + "px";
cubic.style.top = screenheight/2 + "px";

let time = 5
let posionmouseX,posionmouseY
let flystep = 5
let currentpositionX
let currentpositionY
let alpha
let distX, distY;

// move X
function moveX(a){
    let timermoveX = setInterval(function() {
    if (a < posionmouseX-currentpositionX && a < flystep){
        cubic.style.left = currentpositionX - a + "px";
        currentpositionX=cubic.offsetLeft
        a+=2
    } 
    else if (a <= currentpositionX-posionmouseX && a < flystep){
        cubic.style.left = currentpositionX + a + "px";  
        currentpositionX=cubic.offsetLeft
        a+=2
    }
    },time)
}

// move Y
function moveY(a){
    let timermoveY = setInterval(function() {
    if (a < posionmouseY-currentpositionY && a < flystep){
        cubic.style.top = currentpositionY - a + "px";
        currentpositionY=cubic.offsetTop
        a+=2
    } else if (a <= currentpositionY-posionmouseY && a < flystep){
        cubic.style.top = currentpositionY + a + "px";  
        currentpositionY=cubic.offsetTop
        a+=2
    }

    },time)
}


let collective=document.getElementById("collective")
let X_fly, Y_fly, X_collective, Y_collective

window.onload=function(){
    collective.style.left = Math.random()*screenwidth +"px"
    collective.style.top = Math.random()*screenheight +"px"

    X_fly = cubic.offsetLeft;
    Y_fly = cubic.offsetTop;
    X_collective = collective.offsetLeft 
    Y_collective = collective.offsetTop 
}

let counter = 0
let timercol = setInterval(function() {
    X_fly = cubic.offsetLeft;
    Y_fly = cubic.offsetTop;
    X_collective = collective.offsetLeft 
    Y_collective = collective.offsetTop 
    if (Math.abs(X_fly-X_collective)<50 && Math.abs(Y_fly-Y_collective)<50) {
       collective.style.left = Math.random()*screenwidth +"px"
       collective.style.top = Math.random()*screenheight +"px"
       counter+=1
       postext.innerHTML = "Eaten: " + counter
   }
   },500)


document.onmousemove = function(event) {
    posionmouseX=event.clientX
    posionmouseY=event.clientY
    let a=0,c=0
    currentpositionX=cubic.offsetLeft
    currentpositionY=cubic.offsetTop
    distX = posionmouseX-currentpositionX - 25
    distY = posionmouseY-currentpositionY - 25
    alpha = Math.atan(Math.abs(distY/distX)) * 57.3

    let vect = new Vector(-distX,distY);
    msg.innerHTML = currentpositionX;

    if (Math.pow(distX,2)+Math.pow(distY,2)<2000  && 
            currentpositionX>=20 && currentpositionY>=20 && 
            currentpositionX<=screenwidth-50 && currentpositionY<=screenheight-50 ) {
        moveX(a)
        moveY(c)
        fly.style.transform = `rotate(${vect.angle()}deg)`;
    }

    clearInterval(timermoveX)
    clearInterval(timermoveY)
} 
