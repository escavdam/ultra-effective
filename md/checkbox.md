# CHECKBOX

El elemento HTML `input type="checkbox"` es un elemento de entrada que te permite insertar un vector o array de valores. El atributo **value** es usado para definr el valor enviado por el **checkbox**. El atributo **checked** se usa para indicar que el elemento está seleccionado. El atributo indeterminate se usa para indicar que el **checkbox** esta en un estado indeterminado (en la mayoria de las plataformas, esto dibuja una linea horizontal que atraviesa el **checkbox**).

## Atributos
`checked` cuando el valor del atributo **type** es `checkbox`, la presencia de este atributo booleano indica que el control se selecciona de forma predeterminada; de lo contrario, se ignora.

`value` el valor inicial de control. Si se omite la propiedad **value**, el **resultado devuelto** al leer esta propiedad será la cadena **on**.

`indeterminate` indica que la casilla de verificación está en un estado indeterminado (en la mayoría de las plataformas, dibuja una línea horizontal a través del checkbox).

## Ejemplos básicos

#### 1.  Formulario de Registro:

```html
<form>
  <label>
    <input type="checkbox" name="terms" value="accepted">
    Aceptar los términos y condiciones
  </label>
  <br>
  <label>
    <input type="checkbox" name="subscribe" value="yes">
    Suscribirse al boletín informativo
  </label>
  <br>
  <button type="submit">Enviar</button>
</form>
```

#### 2. Configuración de Preferencias:

```html
<form>
  <label>
    <input type="checkbox" name="emailNotifications" value="yes">
    Recibir notificaciones por correo electrónico
  </label>
  <br>
  <label>
    <input type="checkbox" name="darkMode" value="enabled">
    Activar modo nocturno
  </label>
  <br>
  <label>
    <input type="checkbox" name="personalizedSuggestions" value="enabled">
    Mostrar sugerencias personalizadas
  </label>
  <br>
  <button type="submit">Guardar preferencias</button>
</form>
```

#### 3. Lista de Tareas:

```html
<ul>
  <li>
    <input type="checkbox" id="task1" name="tasks" value="task1">
    <label for="task1">Completar la tarea 1</label>
  </li>
  <li>
    <input type="checkbox" id="task2" name="tasks" value="task2">
    <label for="task2">Revisar correos electrónicos</label>
  </li>
  <li>
    <input type="checkbox" id="task3" name="tasks" value="task3">
    <label for="task3">Preparar informe mensual</label>
  </li>
</ul>
```