/*
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext('2d');
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);


function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarTeclado (evento)
{
    var colorsito = "blue"
    var movimiento = 5;

    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(colorsito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorsito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorsito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorsito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        
    }   
}


*/

document.addEventListener("mouseup", pru);



function pru (evento)
{
    console.log ("Mensaje");
    console.log (evento);
    
}

