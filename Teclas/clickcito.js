document.addEventListener("mousemove", moverMouse);
document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", levantarMouse);
var colorsote = document.getElementById("color_que_deseas");
colorsote.addEventListener("change",changeColor);
var coloreando;
var cuadro = document.getElementById("caballete");
var papel = cuadro.getContext("2d");
var estado ;
var x ;
var y ;
var xf;
var yf;

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.lineWidth = 2;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath(); 
}

dibujarLinea("black", 1 ,1 , 1 ,300 , papel);
dibujarLinea("black", 1 ,1 , 300 ,1 , papel);
dibujarLinea("black", 300 , 1 , 300 ,300 , papel);
dibujarLinea("black", 1 ,300 , 300 ,300 , papel);
function presionarMouse(eventoPresionar)
{
 estado = 1
 x = eventoPresionar.layerX;
 y= eventoPresionar.layerY;
}
function moverMouse(eventoMover)
{
 if(estado==1)
 {
  dibujarLinea(coloreando, eventoMover.layerX , eventoMover.layerY ,xf , yf , papel);
 }
 else
 {
  xf= eventoMover.layerX;
  yf= eventoMover.layerY;
 }
}
function levantarMouse(eventoLevantar)
{
 if (estado = 0 );
 xf= eventoLevantar.layerX;
 yf= eventoLevantar.layerY;
}


function changeColor()
{
 coloreando=colorsote.value ;
}