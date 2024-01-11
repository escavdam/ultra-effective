## Local Storage en JavaScript:

El `localStorage` es una interfaz de almacenamiento en el navegador que permite a las aplicaciones web almacenar datos de forma persistente en el dispositivo del usuario. La información almacenada en el `localStorage` persiste incluso después de cerrar y volver a abrir el navegador, lo que lo convierte en una opción útil para almacenar pequeñas cantidades de datos.

### Cómo Utilizar el Local Storage con Ejemplos de Código:

1. **Guardar Datos en el Local Storage:**

   ```javascript

   localStorage.setItem('nombre', 'Ejemplo');
   var usuario = { nombre: 'John', edad: 30 };
   localStorage.setItem('usuario', JSON.stringify(usuario));
   ```
    Estamos guardando una cadena y un objeto en el localStorage. En este caso como tenemos objeto utilzamos el JSON.stringify
2. **Recuperar Datos del Local Storage:**
   ```javascript

    var nombre = localStorage.getItem('nombre');
    var usuarioGuardado = localStorage.getItem('usuario');

    var usuarioObjeto = JSON.parse(usuarioGuardado);
   ```
   Aquí, estamos recuperando datos del localStorage. La cadena JSON se convierte de nuevo a un objeto usando JSON.parse para el objeto guardado.
3. **Eliminar Datos del Local Storage:**
     ```javascript

    localStorage.removeItem('nombre');

    localStorage.clear();
     ```
    Y puedes eliminar un elemento o limpiar todo el localStorage usando removeItem o clear respectivamente.
