# Switch en JavaScript

El switch es una estructura de control en JavaScript que permite realizar diferentes acciones basadas en el valor de una expresión. Es una alternativa a múltiples declaraciones `if-else` cuando se necesita evaluar una variable en varios casos.

## ¿Cómo funciona?

La estructura básica de un switch se ve así:

```javascript
switch (expresión) {
  case valor1:
     Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    break;
  case valor2:
     Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    break;
      Más casos según sea necesario
  default:
     Código a ejecutar si ninguno de los casos coincide con la expresión
}
```

-La expresión se evalúa una vez y se compara con los valores de los casos.
-Si se encuentra un caso que coincide con la expresión, se ejecuta el código asociado a ese caso.
-El break se utiliza para salir del bloque switch después de que se ha ejecutado un caso.
-Si no se encuentra ningún caso que coincida, se ejecuta el código dentro del bloque default (opcional).
-Tenemos que utilizar "===" para comprobar que el resultado coincide.

Aquí pongo un ejemplo:

```javascript
switch (expr) {
  case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
   case "Mangos":
   case "Papayas":
   console.log("El kilogramo de mangos y papayas cuesta $2.79.");
    break;
   default:
   console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
}
```

En este caso evalúa el valor de la variable expr y devuelve el precio correspondiente para diferentes frutas que nosotros declaramos, si la fruta no está en la lista, mostrará un mensaje indicando que no disponen de esa fruta en el momento

Ademas también podemos realizar una operación única con múltiples casos:
```javascript
var Animal = "Jirafa";

switch (Animal) {
  case "Vaca":
  case "Jirafa":
  case "Perro":
  case "Cerdo":
    console.log("Este animal subirá al Arca de Noé.");
    break;
  case "Dinosaurio":
  default:
    console.log("Este animal no lo hará.");
}
```
De esta forma vemos cómo tomar decisiones basadas en el valor de una variable.

## ¿Cómo podemos empezar a usarlo?

Para empezar tenemos que tener un HTML con la estructura básica en el cual vayamos a trabajar. Posteriormente nos iremos al script del JS, y empezaremos a escribir el código utilizando el switch ya que proporciona una estructura más limpia y eficiente cuando se necesitan múltiples casos para evaluar, sustituyendo así el if-else, destacando así la posibilidad de evitar repetir código. Además podemos utilizar de referencia el JS que he puesto de ejemplo anteriormente para tenerlo de base, pero se puede modificar como nosotros queramos!!.