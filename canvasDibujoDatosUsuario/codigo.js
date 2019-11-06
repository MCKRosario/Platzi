var nLineas = document.getElementById('numeroLineas')
var boton = document.getElementById('boton')
boton.addEventListener("click", dibujoPorClick );

 
var borrar = document.getElementById('borrar')
borrar.addEventListener("click", limpiarPantalla);


var d = document.getElementById('dibujo');
var ancho = d.width;
var lienzo = d.getContext('2d');


function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
   
    var lineas = parseInt(nLineas.value);
    var l = 0;
    var x,y,z;
    var color1 = "#00a8ff"
    var color2 = "#9c88ff"
    var color3 = "#fbc531"
    var color4 = "#4cd137"
    var espacio = ancho / lineas;
    var marco = ancho - 1;

    for(l=0; l<lineas; l++)
    {
        x = espacio * l;
        y = espacio * (l+1);
        z = ancho - x
       
        dibujarLinea(color1,x,0,ancho,y);
        dibujarLinea(color2,0,x,y,ancho);
        dibujarLinea(color3,x,ancho,ancho,z);
        dibujarLinea(color4,0,z,x,0);

        dibujarLinea(color1,1,1,1,marco);
        dibujarLinea(color2,1,marco,marco,marco);
        dibujarLinea(color3,1,1,marco,1);
        dibujarLinea(color4,marco,1,marco,marco);

    }

    
}

function limpiarPantalla() 
{
    lienzo.clearRect(0, 0, d.width, d.height);    
}