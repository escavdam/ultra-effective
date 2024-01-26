# Juego webcam ml5

Un pequeño pitch de juego con ml5 y webcam, con la temática 'Hazme reir' de la Global Game Jam 2024.

## Idea

Eres un bufón 🤡 delante del rey, delante tuya (en el mundo real) encontrarás diferentes objetos (globos, pelotas, una guitarrita, sombreros...) que deberás combinar (en ti) para hacerle reir.

Tu misión es encontrar la mejor combinación de objetos en cada ronda, determinada por la reaccion que tenga el rey (en el mundo virtual) a tus combinaciones de objetos.

## Tecnología

Usaremos [ml5](https://ml5js.org/) para detectar objetos en la webcam, y [p5.js](https://p5js.org/) para el resto de elementos y lógica del juego.

## Loop de juego

[![](https://mermaid.ink/img/pako:eNqNkTFOAzEQRa9iTZWIpNgtU0BDiUQB5TQTeyCG9TiyvUIoymE4CRJcjLF3tUo6XFl__p_3d30CGx3DDl6G-GEPlIp5vkfJRW-rlRdvfVyvUWbJbLcGockUYjZ2ZClkqKTfr4xilmMTN8MoZGwMey-km8RcehwbMXH_xiVmBF19azTlVggPzDU8qC6zwbCYIylsGAihNarmlrI02O6E8PP92MxKTIltiXcIZ5Q2rs2zb_Y8BuqUctO1RctY4twh1-m2mzHNvnD6xnEcKHty2mvuN6Fq9p_WCdxf9NJwX8GcUkxLtf6qGrnpy3N_JcAGAqdA3ulTnupPRigHDoyw06uj9I6AclYfjSU-fYqFXUkjb2A8Oip87-k1UZjE8x95RrEU?type=png)](https://mermaid.live/edit#pako:eNqNkTFOAzEQRa9iTZWIpNgtU0BDiUQB5TQTeyCG9TiyvUIoymE4CRJcjLF3tUo6XFl__p_3d30CGx3DDl6G-GEPlIp5vkfJRW-rlRdvfVyvUWbJbLcGockUYjZ2ZClkqKTfr4xilmMTN8MoZGwMey-km8RcehwbMXH_xiVmBF19azTlVggPzDU8qC6zwbCYIylsGAihNarmlrI02O6E8PP92MxKTIltiXcIZ5Q2rs2zb_Y8BuqUctO1RctY4twh1-m2mzHNvnD6xnEcKHty2mvuN6Fq9p_WCdxf9NJwX8GcUkxLtf6qGrnpy3N_JcAGAqdA3ulTnupPRigHDoyw06uj9I6AclYfjSU-fYqFXUkjb2A8Oip87-k1UZjE8x95RrEU)