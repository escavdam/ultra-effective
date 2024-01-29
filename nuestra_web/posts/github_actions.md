# Github actions y deploys automáticos

## 1. Introducción

Github Actions es una herramienta que nos permite automatizar tareas en nuestro repositorio de Github. En este caso, vamos a utilizarlo para automatizar el deploy de nuestra web a neocities.

## 2. Crear un token de acceso

Para poder utilizar Github Actions, necesitamos un token de acceso a nuestra cuenta de neocities. Para ello, entra [aqui](https://neocities.org/settings) y haz click en `Manage Site Settings`, y luego en `API Access`. Ahora, haz click en `Generate New API Key`, y copia el token que te aparece.

## 3. Crear un secreto en nuestro repositorio

Ve al repositorio de tu web, y haz click en `Settings`. Ahora, en el menú de la izquierda, haz click en `Secrets`. Ahora, haz click en `New repository secret`, y pon como nombre `NEOCITIES_TOKEN`. En el campo `Value`, pega el token que copiaste en el paso anterior. Ahora, haz click en `Add secret`.

Un secreto es una variable de entorno que podemos utilizar en nuestros workflows. En este caso, vamos a utilizar el secreto NEOCITIES_TOKEN para poder acceder a nuestra cuenta de neocities.

Vamos a usar el secreto en nuestro repositorio de ultra_effective. Para ello, vamos a crear un workflow.

## 4. Crear un workflow

Para crear un workflow, basta con creat una carpeta `.github` en el directorio raíz de nuestro repositorio, y dentro de ella, otra carpeta llamada `workflows`. Dentro de esta carpeta, vamos a crear un archivo llamado `deploy.yml`. El nombre del archivo no importa, pero el nombre de la carpeta sí, ya que es donde Github va a buscar los workflows.

El contenido del archivo es el siguiente:

```yml
name: Deploy to neocities

# only run on changes to main
on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    # When the dist_dir is ready, deploy it to neocities
    - name: Deploy to neocities
      uses: bcomnes/deploy-to-neocities@v1
      with:
        api_token: ${{ secrets.NEOCITIES_API_TOKEN }}
        cleanup: true
        dist_dir: /nuestra_web/.vitepress/dist
```

Vamos a analizar las distintas partes del archivo:

```yml
name: Deploy to neocities
```

El nombre del workflow. Este nombre aparecerá en la página de Actions de nuestro repositorio.

```yml
on:
  push:
    branches:
      - main
```

En qué eventos queremos que se ejecute el workflow. En este caso, queremos que se ejecute cuando hagamos un push a la rama `main`.

```yml
jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    # When the dist_dir is ready, deploy it to neocities
    - name: Deploy to neocities
      uses: bcomnes/deploy-to-neocities@v1
      with:
        api_token: ${{ secrets.NEOCITIES_API_TOKEN }}
        cleanup: true
        dist_dir: /nuestra_web/.vitepress/dist
```

La parte mas importante de esta sección es la última, que es la que se encarga de ejecutar el deploy. En este caso, estamos utilizando un action que ya existe, llamado `bcomnes/deploy-to-neocities`. Este action se encarga de subir el contenido de la carpeta `dist_dir` a neocities. En este caso, estamos subiendo el contenido de la carpeta `.vitepress/dist`, que es donde se genera nuestra web cuando hacemos `npm run build`.

Debemos pasar nuestro token de acceso mediante `${{ secrets.NEOCITIES_API_TOKEN }}` , y podemos definir si queremos que se borre el contenido de la carpeta antes de subir el nuevo contenido mediante el parámetro `cleanup`.

## 5. Ejecutar el workflow

Ahora que ya tenemos nuestro workflow, vamos a ejecutarlo. Para ello, vamos a hacer un cambio en nuestra web, y vamos a hacer un push a la rama `main`. Si todo ha ido bien, deberíamos ver que se ha ejecutado el workflow en la página de Actions de nuestro repositorio.

**Recuerda** que el workflow solo se ejecuta cuando hacemos un push a la rama `main`, además, puede que tenga que esperar un poco hasta que veas los cambios en tu web.

