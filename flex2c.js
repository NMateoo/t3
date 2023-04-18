'use strict';

var cuadro=prompt("Diga en que cuadro quiere saludar (1 a 5)","");
var color=prompt("Diga en que color quiere que se dibuje (a-azul, b-rojo, c-verde)","");
cuadro=parseInt(cuadro);

var estecuadro="";

switch (cuadro) {
    case 1:
        estecuadro=document.getElementById("c1");
        break;
    case 2:
        estecuadro=document.getElementById("c2");
        break;
    case 3:
        estecuadro=document.getElementById("c3");
        break;
    case 4:
        estecuadro=document.getElementById("c4");
        break;
    case 5:
        estecuadro=document.getElementById("c5");
        break;
    default:
        alert("Numero no valido");
}

switch (color) {
    case "a":
        estecuadro.style.color="blue";
        break;
    case "b":
        estecuadro.style.color="red";
        break;
    case "c":
        estecuadro.style.color="green";
        break;
    default:
        alert("Color no valido")
}

if(estecuadro!="") {
    estecuadro.innerHTML="HOLA";
}