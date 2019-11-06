var d = document.getElementById('dibujo');
var lienzo = d.getContext('2d');
var lineas = 30;
var l = 0;
var x,y,z;
var colorsillo="#17c0eb";

for(l=0; l<30; l++)
{
    x = 10 * l;
    y = 10 * (l+1);
    z = 300 - x
       
    dibujarLinea(colorsillo,x,0,300,y);
    dibujarLinea(colorsillo,0,x,y,300);
    dibujarLinea(colorsillo,x,300,300,z);
    dibujarLinea(colorsillo,0,z,x,0);
}

dibujarLinea(colorsillo,1,1,1,299);
dibujarLinea(colorsillo,1,299,299,299);
dibujarLinea(colorsillo,1,1,299,1);
dibujarLinea(colorsillo,299,1,299,299);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
