'use strict';

var color="white";
// function eligeColor() {
//     color=prompt("Diga en que color quiere que se dibuje (azul, rojo, verde)","");

//     switch (color) {
//         case "azul":
//             color="blue";
//             break;
//         case "rojo":
//             color="red";
//             break;
//         case "verde":
//             color="green";
//             break;
//         default:
//             color="black";
//     }
// }

function eligeColor(identificador) {
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    color=getComputedStyle(cuadro).backgroundColor;
}
function saludar(identificador) {
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.color=color;
    cuadro.innerHTML="Hola";
    color=getComputedStyle(color).backgroundColor;
}