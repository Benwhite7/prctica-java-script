var teclas = {
  UP: 38,
  DOWN : 40,
  LEFT : 37,
  RIGHT : 39 
 };

var vm = document.getElementById("villa_minecraft");
var papel = vm.getContext("2d");

var fondo=
{
 url:"villageplatzi.png",
 cargaOk : false
}

var vaca = 
{
 url : "Vaca.png",
 cargaOk : false
}

var pollo = 
{
 url: "Pollo.png",
 cargaOk : false
}

var cerdo =
{
 url :"Cerdo.png",
 cargaOk : false
}

document.addEventListener("keydown" , dibujarTeclado);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image ();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load" , cargarPollos );

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load" , cargarCerdos );

var x = 10 ;
var y = 10 ;

function cargarFondo()
{
  fondo.cargaOk=true;
  dibujar();
}
 
function cargarVacas ()
{
 vaca.cargaOk = true;
 dibujar();
}

function cargarPollos ()
{
 pollo.cargaOk = true;
 dibujar ();
}

function cargarCerdos ()
{
 cerdo.cargaOk = true ;
 dibujar ();
}

 function dibujar()
 {
   if (fondo.cargaOk == true) 
   {
     papel.drawImage(fondo.imagen, 0 , 0);
   }
   
    if (pollo.cargaOk == true )
   {
     var cantidad = aleatorio (0,15);
     for (var v=0 ; v < cantidad ; v++ )
     {
     var x = aleatorio(0 , 7);
     var y = aleatorio(0 , 7);
     var x = x * 60;
     var y = y * 60;
     papel.drawImage (pollo.imagen , x , y);
    }
   }
   if (cerdo.cargaOk == true )
   {
     var cantidad = aleatorio (0,15);
     for (var v=0 ; v < cantidad ; v++ )
     {
     var x = aleatorio(0 , 7);
     var y = aleatorio(0 , 7);
     var x = x * 60;
     var y = y * 60;
     papel.drawImage (cerdo.imagen , x , y);
    }
   }
 }
 
 function dibujarTeclado (evento)
 {
  var movimiento = 10;
  switch(evento.keyCode)
  {
    case teclas.UP:
      papel.drawImage(vaca.imagen , x ,y - movimiento);
      y = y - movimiento ;
    break ;
    case teclas.DOWN:
      papel.drawImage(vaca.imagen , x ,y + movimiento);
      y = y + movimiento;
    break ;
    case teclas.LEFT:
      papel.drawImage(vaca.imagen , x - movimiento ,y);
      x = x - movimiento;
    break ;
    case teclas.RIGHT:
      papel.drawImage(vaca.imagen , x + movimiento ,y);
      x = x + movimiento;
    break ;
  }
 }
function aleatorio (min , maxi)
{
  var resultado ;
  resultado = Math.floor (Math.random()*(maxi-min + 1 )) + min ;
  return resultado ;
}

