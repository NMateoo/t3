'use strict';

var cuadro=prompt("Diga en que cuadro quiere saludar (1 a 5)","");
cuadro=parseInt(cuadro);

var selector="c"+cuadro;

var estecuadro=document.getElementById("c"+cuadro);
estecuadro.innerHTML="HOLA";
