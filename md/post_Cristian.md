# RADIO

El elemento `<input>` con el tipo "radio" en HTML se utiliza para crear un botón de opción que permite a los usuarios seleccionar una única opción de un conjunto de opciones mutuamente excluyentes. Este tipo de entrada se usa comúnmente en formularios donde se desea que el usuario elija una opción específica de un grupo.

Aquí hay un ejemplo básico de cómo se usa el elemento `<input>` con el tipo "radio":
```
<form>
  <input type="radio" id="opcion1" name="grupoOpciones" value="opcion1">
  <label for="opcion1">Opción 1</label>

  <input type="radio" id="opcion2" name="grupoOpciones" value="opcion2">
  <label for="opcion2">Opción 2</label>

  <input type="radio" id="opcion3" name="grupoOpciones" value="opcion3">
  <label for="opcion3">Opción 3</label>
</form>

```


En este ejemplo, hemos creado tres botones de opción `(<input type="radio">)` y los hemos agrupado utilizando el atributo name con el valor "grupoOpciones". Este atributo asegura que solo se pueda seleccionar una opción a la vez dentro del grupo. Si un botón de opción se selecciona, automáticamente deselecciona cualquier otro botón en el mismo grupo.

El atributo `id` se utiliza para vincular la etiqueta `<label>` con su correspondiente botón de opción. Esto mejora la accesibilidad y la usabilidad, ya que hace que sea más fácil hacer clic en la etiqueta para seleccionar la opción.

El atributo `value` define el valor que se enviará al servidor cuando se envíe el formulario. En este ejemplo, los valores son "opcion1", "opcion2" y "opcion3", pero puedes ajustarlos según tus necesidades.

En resumen, el input de tipo "radio" se utiliza para crear un conjunto de opciones mutuamente excluyentes en un formulario, permitiendo que los usuarios seleccionen una única opción de un grupo.