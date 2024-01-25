# CSS Grid Layout

CSS Grid Layout es una herramienta poderosa para crear diseños de página complejos y flexibles en CSS. Permite dividir la página en filas y columnas, proporcionando un control preciso sobre la disposición de los elementos.

## 1. Concepto Básico

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px; 
  /* Dos filas de tamaños diferentes */
  grid-template-columns: 1fr 2fr;  /*Dos columnas, 
  la segunda es el doble de ancha que la primera*/
  gap: 10px;    /* Espacio de 10px entre filas y columnas */
}
```

## 2. Colocación de Elementos

Puedes colocar elementos en la cuadrícula utilizando las propiedades grid-row y grid-column.

```css
.item {
  grid-row: 1 / 3; /* Ocupa desde la fila 1 hasta la fila 3 (inclusive) */
  grid-column: 2;  /* Ocupa la columna 2 */
}
```

## 3. Atajos con grid-area

La propiedad grid-area es un atajo que combina grid-row, grid-column, grid-row-end, y grid-column-end.

```css
.item {
  grid-area: 1 / 2 / 3 / 4; /* Equivalente a grid-row, grid-column, grid-row-end, grid-column-end */
}
```

## 4. Alineación
   

Puedes alinear elementos dentro de las celdas utilizando propiedades como justify-items y align-items en el contenedor.

```css
.container {
  justify-items: center; /* Alinea los elementos en el centro horizontalmente */
  align-items: center; /* Alinea los elementos en el centro verticalmente */
}
```

## 5. Diseño Responsivo

CSS Grid Layout es altamente responsive. Utiliza la unidad fr para especificar tamaños relativos y las funciones minmax() y auto para un diseño flexible.

```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  /* Crea columnas de al menos 100px de ancho y crece para llenar el espacio disponible */
}
```

## 6. Distribución Automática

CSS Grid ofrece propiedades como auto-fill y auto-fit que permiten una distribución automática de elementos en la cuadrícula.

```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  /* Crea columnas de al menos 100px de ancho y crece para llenar el espacio disponible */
}
```

## 7. Áreas de la Cuadrícula

Puedes definir áreas en la cuadrícula y colocar elementos en esas áreas para simplificar la estructura del código.

```css
.container {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.item {
  grid-area: header; /* Coloca el elemento en el área "header" */
}
```

## 8. Alineación Avanzada

Propiedades como justify-content y align-content permiten la alineación de las filas y columnas en el contenedor de la cuadrícula.

```css
.container {
  justify-content: space-around; /* Distribuye uniformemente las filas en el contenedor */
  align-content: center;         /* Centra verticalmente las columnas en el contenedor */
}
```

## 9. Ordenación de Elementos

La propiedad order permite cambiar el orden visual de los elementos sin modificar el orden en el código HTML.

```css
.item {
  order: 1; /* Mueve el elemento al principio del orden visual */
}
```

## 10. Fracciones y Unidades de Auto

Además de fr, las unidades como min-content, max-content y auto pueden ser útiles en ciertos contextos.

```css
.container {
  grid-template-columns: 1fr min-content auto;
}
```

Aquí dejo algunos ejemplos de los resultados que se podrían alcanzar usando este util comando.

Una forma de contener la información.

Una ayuda visual de como se generan los bloques.

Este [LINK](https://youtu.be/dQw4w9WgXcQ) le llevará directo a la pagina web official de CSS para que consulte cualquier duda que tenga.

:-D
