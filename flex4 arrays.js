'use strict';

var color="white";

var colorFr=new Array(
    'blueviolet',
    'royalblue',
    'goldenrod',
    'brown',
    'lightsteelblue')

var colorFn=new Array(
    'white',
    'blue',
    'black',
    'yellow',
    'red')

function pinturaInicial() {
    for (var i=0;i<5;i++) {
        let elemento=document.getElementById("c"+(i+1))
        elemento.style.color=colorFn[i]
        elemento.style.backgroundColor=colorFr[i]
    } 
}

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
}

pinturaInicial()