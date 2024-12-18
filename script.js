var fly=document.getElementById("fly");
var cubic=document.getElementById("cube");
var postext=document.getElementById("pos")
cubic.style.left = 300 + "px";

postext.style.bottom = 50 +"px";
var time =200
var posionmouseX,posionmouseY

var currentpositionX
var currentpositionY

// move X
function moveX(a){
    var timermoveX = setInterval(function() {
    if (posionmouseX>=currentpositionX && a < posionmouseX-currentpositionX){
        cubic.style.left = currentpositionX + a + "px";
        currentpositionX=cubic.offsetLeft
        a+=2
        postext.innerHTML = currentpositionX + " " +currentpositionY
    } 
    },time)
}
function moveXback(b){
    var timermovebX = setInterval(function() {
     if (posionmouseX<=currentpositionX && b < currentpositionX-posionmouseX) {
        cubic.style.left = currentpositionX - b + "px";  
        currentpositionX=cubic.offsetLeft
        b+=2
        postext.innerHTML = currentpositionX + " " +currentpositionY
    }
    },time)
}
// move Y
function moveY(a){
    var timermoveY = setInterval(function() {
    if (posionmouseY>=currentpositionY && a < posionmouseY-currentpositionY){
        cubic.style.top = currentpositionY + a + "px";
        currentpositionY=cubic.offsetTop
        a+=2
        postext.innerHTML = currentpositionX + " " +currentpositionY
    } 
    },time)
}
function moveYback(b){
    var timermovebY = setInterval(function() {
     if (posionmouseY<=currentpositionY && b < currentpositionY-posionmouseY) {
        cubic.style.top = currentpositionY - b + "px";  
        currentpositionY=cubic.offsetTop
        b+=2
        postext.innerHTML = currentpositionY + " " +currentpositionY
    }
    },time)
}

document.onmousedown = function(event) {
    posionmouseX=event.clientX
    posionmouseY=event.clientY
    var a=0,b=0,c=0,d=0
    currentpositionX=cubic.offsetLeft
    currentpositionY=cubic.offsetTop
    if (posionmouseX>=currentpositionX){
        moveX(a)
        fly.style.transform = "rotate(90deg)"
    }
    if (posionmouseX<=currentpositionX){
        moveXback(b)
        fly.style.transform = "rotate(270deg)"
    }
    if (posionmouseY>=currentpositionY){
        moveY(c)
        fly.style.transform = "rotate(180deg)"
    }
    if (posionmouseY<=currentpositionY){
        moveYback(d)
        fly.style.transform = "rotate(0deg)"
    }

    clearInterval(timermovebX)
    clearInterval(timermoveX)
    clearInterval(timermovebY)
    clearInterval(timermoveY)



    postext.innerHTML = currentpositionX + " " +currentpositionY
}