Taller de Creación de Router para Single Page App con JavaScript

"Nuestra Aplicación Web va hacer capaz de funcionar en una sola página, es decir que nunca se genere un reload una recarga de nuestro sitio web completo."

Dato nuevo: La palabra "VANILLA" describe a los productos originales sin nada extra.

1.- La lógica detrás de nuestro enrutador

    Los pasos que se van a seguir para llevar a cabo la creación del Router del lado del cliente para SPA son:

    Cargar la ruta
    Identificar en donde nos encontramos en el sitio. (Carga inicial de la ruta).
    loadInitialRoute()

    Comparar la URL con una ruta
    La URL a la que nos queremos mover, se debe comparar con las rutas que tenemos.
    matchUrlToRoute()

    Actualizar la URL en la barra de navegación
    Para esto utilizaremos el método de HTML pushState. (windows.history.pushState).
    loadRoute()

    Actualizar el DOM con el nuevo contenido
    Para esto vamos a usar innerHTML.
    loadRoute()
 
 2.- Implementando routing del lado del cliente

     window.history.pushState({ data:'Movimiento'}, 'Title', 'patch');

3.- Creando una aplicación sencilla en html

    Creamos un archivo html con la siguiente estructura
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cliente de nuestro SPA Router</title>
    </head>
    <body>
    <header>
        <ul>
            <li><button>Home</button></li>
            <li><button>Contact</button></li>
            <li><button>About Me</button></li>
        </ul>
    </header>
    <div><h1>Hi student 😉 This's the Home
    </h1></div>
    </body>
    </html>
        
4.- Creando el servidor de nuestra app

    Tenemos que crear un servicio que se encarge de consultar en vivo nuestra app.

    Recomendación: Tenemos que instalar Ubuntu Bash en Windows

    En VSC abrimos nuestro terminal 

    Y colocamos el siguiente comando:    sudo npm install http-server-spa -g
    Este comando nos permite instalar una librería muy pequeña que nos va a servir para montar nuestra página y generar un servidor que nos envie al puerto https://localhost:8080 

    En el terminal debemos estar la ruta en donde se encuentre nuesta APP o proyecto.

    Para correr el servidor: http-server-spa . ./index.html

    



