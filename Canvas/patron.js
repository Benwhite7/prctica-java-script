var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("patrones");
var lienzo = d.getContext("2d");


function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath(); 
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var ancho = d.width;
    var espacio = ancho/lineas ; 
    var yi , xf ;
    var yf , xi ;

 for (l = 0; l < lineas; l++)
 {
  yi = espacio * l
  xf = espacio * (l + 1)
  dibujarLinea( "blue" , 0 , yi , xf , 300);
 }

for (l=0 ; l < lineas ; l++)
{
 yi= 300 - espacio * l
 xf= 300 - espacio * ( l + 1 )  
 dibujarLinea ("blue", 300 , yi , xf , 0 ); 
}

for (l=0 ; l < lineas ;l++)
{
 yf= 300 - espacio * (l+ 1) 
 xi= espacio * l     
 dibujarLinea ("blue" , xi , 300 , 300 ,yf );
}

for (l=0 ; l < lineas ;l++)
{
 yi= espacio * l 
 xf= 300 - espacio * l       
 dibujarLinea ("blue" , 0 , yi , xf , 0 );
}

dibujarLinea("blue",0 , 0 , 0 , 299 );
dibujarLinea("blue",0 , 299 , 299 , 299 );
dibujarLinea("blue",299 , 299 , 299 , 0 );
dibujarLinea("blue",299 , 0 , 0 , 0 );
}