document.addEventListener("keydown", caminoCerdo);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var x = 0;
var y = 0;

var fondo = {
    url: "tile.png",
    cargarOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var cantidad = aleatorio(1,50);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
    fondo.cargarOK = true;
    dibujar();
};

function cargarVacas()
{
    vaca.cargarOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargarOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargarOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargarOK)
    {
        console.log(cantidad);
       for(var v=0; v<cantidad; v++)
        {
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
        
    }
       
}


function caminoCerdo (evento)
{
   if(cerdo.cargaOK)       
    {   
        var movimiento = 10;
        var x = 0;
        var y = 0;
            
        switch(evento.keyCode)
        {
            case teclas.UP:
            y = y - movimiento;
            papel.drawImage(cerdo.imagen,x,y);
            break;

            case teclas.DOWN:
            y = y + movimiento;
            papel.drawImage(cerdo.imagen,x,y);
            break;

            case teclas.LEFT:
            x = x - movimiento;
            papel.drawImage(cerdo.imagen,x,y);
            break;
            
            case teclas.RIGHT:
            x = x + movimiento;
            papel.drawImage(cerdo.imagen,x,y);
            break;
            
        }   
    }    
}

function aleatorio (min, maxi)
{
    var resultado;
    resultado = Math.floor (Math.random() * (maxi - min + 1)) + min;
    return resultado;

}
