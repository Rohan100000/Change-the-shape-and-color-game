"use strict"
var outer = document.getElementById("outer-box");
var inner = document.getElementById("inner-box");
var color_button = document.getElementById("change-color");
var shape_button = document.getElementById("change-shape");
function changeColor(){
    var random = Math.floor(Math.random() * 10);
    random = random % 3;
    if(random == 0)
        outer.style.backgroundColor = "red";
    else if(random == 1)
        outer.style.backgroundColor = "blue";
    else
        outer.style.backgroundColor = "green";
}

function changeShape(){
    var random = Math.floor(Math.random() * 10);
    random = random % 3;
    if(random == 0)
        inner.style.borderRadius = "0%";
    else if(random == 1)
        inner.style.borderRadius = "25%";
    else
        inner.style.borderRadius = "50%";
}

color_button.addEventListener("click",changeColor);
shape_button.addEventListener("click",changeShape);