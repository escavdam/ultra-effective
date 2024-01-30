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
const pregunta = process.argv[2];
console.log(await myBard.ask(pregunta));
```

Asegúrate de configurar tu package.json para que se ejecute como un módulo, añadiendo lo siguiente:

```json
{
  "type": "module",
}
```

Esto es necesario para que podamos usar `import` en vez de `require`.

Ahora puedes ejecutarlo con `node index.js "¿Cómo estás?"` y te devolverá una respuesta.
