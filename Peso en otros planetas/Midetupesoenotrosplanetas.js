var resultadoMarte = document.querySelector('#tuPeso');
       var resultadoJupiter = document.querySelector('#peso');
       var resultadoSaturno = document.querySelector('#Speso');
       var resultadoVenus = document.querySelector('#Vpeso');
       var resultadoMercurio = document.querySelector('#Mpeso');
       var usuario = document.querySelector('#calPeso');
       var btn = document.querySelector ('#btncalcular');
       btn.addEventListener('click' , btnOnClick )

       var g_tierra = 9.8;
       var g_marte = 3.7;
       var g_jupiter = 24.8;
       var g_saturno = 10.4;
       var g_venus = 8.8 ;
       var g_mercurio = 3.7;


       function btnOnClick (){
       var resultado_Marte;
       resultado_Marte = usuario.value * g_marte / g_tierra;
       resultado_Marte = parseInt(resultado_Marte)
       resultadoMarte.innerText = "Pesas en Marte: " + resultado_Marte + " Kg";

       var resultado_Jupiter;
       resultado_Jupiter = usuario.value * g_jupiter / g_tierra;
       resultado_Jupiter = parseInt(resultado_Jupiter)
       resultadoJupiter.innerText = "Pesas en Jupiter : " + resultado_Jupiter + " Kg" ;

       var resultado_Saturno;
       resultado_Saturno =  usuario.value * g_saturno / g_tierra;
       resultado_Saturno = parseInt(resultado_Saturno)
       resultadoSaturno.innerText = "Pesas en Saturno : " + resultado_Saturno + " Kg" ;

       var resultado_Venus;
       resultado_Venus =  usuario.value * g_venus / g_tierra;
       resultado_Venus = parseInt(resultado_Venus)
       resultadoVenus.innerText = "Pesas en Venus : " + resultado_Venus + " Kg" ;

       var resultado_Mercurio;
       resultado_Mercurio =  usuario.value * g_mercurio / g_tierra;
       resultado_Mercurio = parseInt(resultado_Mercurio)
       resultadoMercurio.innerText = "Pesas en Mercurio : " + resultado_Mercurio + " Kg" ;
      }