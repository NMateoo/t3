'use strict';

var color="white";
function eligeColor() {
    color=prompt("Diga en que color quiere que se dibuje (azul, rojo, verde)","");

    switch (color) {
        case "azul":
            color="blue";
            break;
        case "rojo":
            color="red";
            break;
        case "verde":
            color="green";
            break;
        default:
            color="black";
    }
}

function saludarc1() {
    let cuadro=document.getElementById("c1");
    cuadro.style.color=color;
    cuadro.innerHTML="Hola";
    
    console.log("hola")
}
function saludarc2() {
    let cuadro=document.getElementById("c2");
    cuadro.style.color=color;
    cuadro.innerHTML="Hola";
    
    console.log("hola")
}
function saludarc3() {
    let cuadro=document.getElementById("c3");
    cuadro.style.color=color;
    cuadro.innerHTML="Hola";
    
    console.log("hola")
}
function saludarc4() {
    let cuadro=document.getElementById("c4");
    cuadro.style.color=color;
    cuadro.innerHTML="Hola";
    
    console.log("hola")
}
function saludarc5() {
    let cuadro=document.getElementById("c5");
    cuadro.style.color=color;
    cuadro.innerHTML="Hola";
    
    console.log("hola")
}

eligeColor();