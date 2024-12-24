let fly=document.getElementById("fly");
let cubic=document.getElementById("cube");
let postext=document.getElementById("counter")
let msg=document.getElementById("msg")
let screenwidth = window.innerWidth;
let screenheight = window.innerHeight;
let flyy = new Fly()
cubic.style.left = screenwidth/2 + "px";
cubic.style.top = screenheight/2 + "px";

let posionmouseX,posionmouseY
let distX, distY;

let collective=document.getElementById("collective")
let X_fly, Y_fly, X_collective, Y_collective

window.onload=function(){
    collective.style.left = Math.random()*screenwidth +"px"
    collective.style.top = Math.random()*screenheight +"px"

    setInterval(function() {
        let vect = new Vector(-distX,distY);
        X_fly = cubic.offsetLeft;
        Y_fly = cubic.offsetTop;
        X_collective = collective.offsetLeft 
        Y_collective = collective.offsetTop  
        distX = X_collective-X_fly
        distY = Y_collective-Y_fly  
        flyy.movetosnack()
        fly.style.transform = `rotate(${vect.angle()}deg)`
    }, 300)
}

let counter = 0
let timercol = setInterval(function() {
    X_fly = cubic.offsetLeft;
    Y_fly = cubic.offsetTop;
    X_collective = collective.offsetLeft 
    Y_collective = collective.offsetTop 
    if (Math.abs(X_fly-X_collective)<50 && Math.abs(Y_fly-Y_collective)<50) {
       collective.style.left = (Math.random()*(0.9-0.1)+0.1)*screenwidth +"px"
       collective.style.top = (Math.random()*(0.9-0.1)+0.1)*screenheight +"px"
       counter+=1
       postext.innerHTML = "Eaten: " + counter
    }
},200)

document.onmousemove = function(event) {
    posionmouseX=event.clientX
    posionmouseY=event.clientY
    X_fly=cubic.offsetLeft
    Y_fly=cubic.offsetTop  
    distX = posionmouseX-X_fly
    distY = posionmouseY-Y_fly
    
    if (Math.pow(distX,2)+Math.pow(distY,2)<2000 ) {
        flyy.moveaway()
        fly.style.transform = `rotate(${vect.angle()-180}deg)`;
    } 
    clearInterval(timermoveX)
    clearInterval(timermoveY)
 
}