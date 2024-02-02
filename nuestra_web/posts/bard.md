# Bard

Bard es un modelo de lenguaje desarrollado por Google basado en el bots como GPT.

Podemos usarla desde [su página oficial](https://bard.google.com/chat), pero también podemos usarla en node con varias librerias.

Tenemos desde la [oficial de google](https://www.npmjs.com/package/dialogflow), donde nos dejan [crear chatbots](https://cloud.google.com/dialogflow?hl=es-419) personalizados, a [otras creadas por la comunidad](https://github.com/PawanOsman/GoogleBard) que dan diferentes grados de libertad y facilidad de uso, segun el que queramos usar.
Usaremos [este fork](https://github.com/EvanZhouDev/bard-ai) del oficial para comunicarnos facilmente con Bard.

## Instalación

Para instalarlo, basta con usar npm:

```bash
npm install bard-ai
```

## Uso

Para usarlo, basta con importarlo y crear una instancia de la clase `Bard`, pasandole como argumento la cookie de bard y luego preguntarle usando el método `ask`.

Para conseguir la cookie, abre tu navegador en la pagina de bard, abre la consola de desarrollador y ve a `Application > Cookies` y busca la cookie llamada `__Secure-1PSID`. Copia el valor de la cookie y pégalo en el código.

```js
import Bard from "bard-ai";
const COOKIE = "Ingresa aqui tu cookie de bard";
let myBard = new Bard(COOKIE);
const pregunta = "enseñame los comandos basicos SQL para interactuar con bases de datos";
console.log(await myBard.ask(pregunta));
```
Asegúrate de configurar tu package.json para que se ejecute como un módulo, añadiendo lo siguiente:

```json
{
  "type": "module",
}
```

Si quieres poder pasarle la pregunta como argumento al script, puedes hacerlo de la siguiente manera:

```js
import Bard from "bard-ai";
const COOKIE = "Ingresa aqui tu cookie de bard";
let myBard = new Bard(COOKIE);
const pregunta = process.argv[2];
console.log(await myBard.ask(pregunta));
```



Esto es necesario para que podamos usar `import` en vez de `require`.

Ahora puedes ejecutarlo con `node index.js "¿Cómo estás?"` y te devolverá una respuesta.

## Alias

Configurar el script como un alias en nuestro sistema para poder ejecutarlo desde cualquier lugar puede ser util.

En linux, podemos hacerlo de la siguiente manera:

```bash
code ~/.bashrc
```

Y añadimos la siguiente línea al final del archivo:

```bash
alias bard="node /ruta/a/tu/script/index.js"
```

Guardamos el archivo y ejecutamos el siguiente comando para que se apliquen los cambios:

```bash
source ~/.bashrc
```

Listo!

En Windows, podemos hacerlo de la siguiente manera:

```bash
doskey bard=node C:\ruta\a\tu\script\index.js $*
```

El `$*` es para que podamos pasarle argumentos al script.

Si en algun momento quieres eliminar el alias, puedes hacerlo con el siguiente comando:

```bash
doskey bard=
```

Listo! Ahora puedes usar bard desde cualquier lugar de tu sistema directamente en la terminal.