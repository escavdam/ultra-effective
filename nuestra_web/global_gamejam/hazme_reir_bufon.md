# Hazme reir bufón

Un pequeño pitch de juego con ml5 y webcam, con la temática 'Hazme reir' de la Global Game Jam 2024.

## Idea

Eres un bufón 🤡 delante del rey, delante tuya (en el mundo real) encontrarás diferentes objetos (globos, pelotas, una guitarrita, sombreros...) que deberás combinar (en ti) para hacerle reir.

Tu misión es encontrar la mejor combinación de objetos en cada ronda, determinada por la reaccion que tenga el rey (en el mundo virtual) a tus combinaciones de objetos.

## Tecnología

Originalmente pensé en usar [ml5](https://ml5js.org/) para detectar objetos en la webcam, y [p5.js](https://p5js.org/) para el resto de elementos y lógica del juego, aunque se podria adaptar a un motor de juegos y pasar de usar ML.

## Loop de juego

Idea para el loop de juego:

[![](https://mermaid.ink/img/pako:eNplkrFOAzEMhl8l8tQT7XC9rQMsHZGKBGMWNzE0cHGqJCeEqj4MT4IEL4aTHkcLmRz7__39p8sBTLAEK3jsw6vZYczqYa05ZalmM8fOuNA0mjVLnWcaagt9SMoMxBkV5vj1njSr6ZhIVTAwKhP81jHKFlbnGkuKVdg-Uw5JQ6MWi2slNiuEW6Li7mXAo0IRqz0Kre9R1CVOTVhtJZjmYq5Xg71pDxo-PzbVLBFiJJPDjYaj5joWoUquytPgsRXqVVsXT2MOY6ZUpov2B1vkE2dZOWvymBxayTnmPaGK91da3LU4g4tiWbZTjCFO_OUZv9y7Yi3Sy04taoC7YP6yx_Elq_vP6i6-Fe2I6qYGzMFT9OisPJJD-YUa8o48aVhJaTG-aNB8FB0OOdy_sYFVjgPNYdhbzLR2-BTRn5rHb3tQzII?type=png)](https://mermaid.live/edit#pako:eNplkrFOAzEMhl8l8tQT7XC9rQMsHZGKBGMWNzE0cHGqJCeEqj4MT4IEL4aTHkcLmRz7__39p8sBTLAEK3jsw6vZYczqYa05ZalmM8fOuNA0mjVLnWcaagt9SMoMxBkV5vj1njSr6ZhIVTAwKhP81jHKFlbnGkuKVdg-Uw5JQ6MWi2slNiuEW6Li7mXAo0IRqz0Kre9R1CVOTVhtJZjmYq5Xg71pDxo-PzbVLBFiJJPDjYaj5joWoUquytPgsRXqVVsXT2MOY6ZUpov2B1vkE2dZOWvymBxayTnmPaGK91da3LU4g4tiWbZTjCFO_OUZv9y7Yi3Sy04taoC7YP6yx_Elq_vP6i6-Fe2I6qYGzMFT9OisPJJD-YUa8o48aVhJaTG-aNB8FB0OOdy_sYFVjgPNYdhbzLR2-BTRn5rHb3tQzII)