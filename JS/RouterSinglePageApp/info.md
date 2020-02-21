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
 