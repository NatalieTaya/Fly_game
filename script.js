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
let flystep=5
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
    },time)
}
function moveXback(b){
    let timermovebX = setInterval(function() {
     if (b < currentpositionX-posionmouseX && b < flystep) {
        cubic.style.left = currentpositionX + b + "px";  
        currentpositionX=cubic.offsetLeft
        b+=2
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
    } 
    },time)
}
function moveYback(b){
    let timermovebY = setInterval(function() {
     if (b < currentpositionY-posionmouseY && b < flystep) {
        cubic.style.top = currentpositionY + b + "px";  
        currentpositionY=cubic.offsetTop
        b+=2
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
    let a=0,b=0,c=0,d=0
    let quadrant;
    currentpositionX=cubic.offsetLeft
    currentpositionY=cubic.offsetTop
    distX = posionmouseX-currentpositionX - 25
    distY = posionmouseY-currentpositionY - 25
    alpha = Math.atan(Math.abs(distY/distX)) * 57.3

    if (Math.pow(distX,2) + Math.pow(distY,2) < 2000 ) {
        if (distX>0 && distY>0 && currentpositionX>20 && currentpositionY>20 ) {
            quadrant=4
            moveX(a)
            moveY(c)
            fly.style.transform = `rotate(${270+alpha}deg)`;
        } else if (distX>0 && distY<0 && currentpositionX>20 && currentpositionY<screenheight-50 ) {
            quadrant=1
            moveX(a)
            moveYback(d)
            fly.style.transform = `rotate(${270-alpha}deg)`;
        } else if (distX<0 && distY>0 && currentpositionX<screenwidth-50 && currentpositionY>20 ) {
            quadrant=3
            moveXback(b)
            moveY(c)
            fly.style.transform = `rotate(${90-alpha}deg)`;
        } else if (distX<0 && distY<0 && currentpositionX<screenwidth-50 && currentpositionY<screenheight-50 ) {
            quadrant=2;
            moveXback(b);
            moveYback(d);
            fly.style.transform = `rotate(${90+alpha}deg)`;
        }
    }
    clearInterval(timermovebX)
    clearInterval(timermoveX)
    clearInterval(timermovebY)
    clearInterval(timermoveY)
} 
