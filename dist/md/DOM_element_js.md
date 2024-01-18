# DOM (Document Object Model)

El DOM es un modelo que indica como se debe estructurar las pásginas o las aplicaciones web. Estas se construyen y se interpretan de forma secuencial, por lo que puede pasar esque cuando se intente acceder a un elemento y aún no este disponible.

El objeto inicial del que parten todos los objetos, en el DOM, es el objeto **document** y de este objeto se van construyendo y definiendo los demás.
El objeto **document** de JavaScript, representa a la etiqueta **html**.

## 1. Los nodos y sus tipos:

Aunque existe 12 tipos de nodos en JS, solo se suelen utilizar 5 porque son los qu más se necesitan para realizar las acciones u operaciones cuando se trabaja con páginas o aplicaciones web.

|Tipo nodo | Descripción |
| -------- |    ----     |
|Document  | Nodo raíz del que dependen todos los demás. |
|Element   | Son los elementos representados por las etiquetas HTML.|
|Attr      | Son las propiedades de las etiquetas asociadas a cada Element.|
|Text      | Son los valores o textos contenidos dentro de las etiquetas del HTML|
|Comment   | Son los que se ha generadoa partir de etiquetas doctype y que se transforman en nodos o han sido creados como comentarios |

## 2. Selección de elementos

- Para acceder a los elementos del DOM debemos recurrir a los métodos y propiedades proporcionadas por el DOM. Por ejemplo:

```JS

document.querySelector("table")

```

- Una vez seleccionados los nodos se puede modificar su contenido o estilo. De este modo:
  
```JS

elemento.innerHTML  =  "Hola mundo"

```

## 3. Eventos

El DOM permite vinculare eventos a elementos del documento. Los eventos representan acciones o interacciones, como hacer click en un botón, etc. JS puede escuchar estos eventos y ejecutar un código en respuesta. Este es un ejemplo:

```JS

elemento.addEventListener("click", function() {

alert("click!");

});

```

## 4. Creación y Eliminación de Nodos

- JS permite crear nuevos nodos y agregarlos al document.
  
```JS

let  elemento  =  document.createElement("div");

```

- También se permiten eliminarlos.
  
```JS

elemento.parentNode.removeChild(elemento);

```