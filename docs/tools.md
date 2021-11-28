# Herramientas del proyecto

En este fichero se describirán las diferentes herramientas que se irán usando a lo largo del desarrollo del proyecto. 

---

# Lenguaje de programación
---
En un principio se planteó usar lenguajes de programación distintos a Typescript, como por ejemplo Python; pero una de las desventajas de Python es que no puedes establecer variables privadas, así que se podrían acceder a todos los datos desde cualquier parte. Typescript no tiene ese problema, además de tener un sistema de tipo estático.

Se ha terminado eligiendo el lenguaje de Typescript debido a su flexibilidad y velocidad, que no tiene nada que envidiar a Python; además como Typescript es un superconjunto de Javascript, es totalmente compatible con los scripts creados en dicho lenguaje. Otra de las ventajas de Typescript es la fácil interpretación y el apollo de IntelliSence en IDEs de desarrollo compatibles, como VSCode.

Para usar Typescript usaremos el entorno de Node.js que corre sobre Javascript, ya que es escalable y fácil de aprender.

# Gestor de tareas
---
El gestor de tareas utilizado será NPM, en rigor NPM no es un gestor de tareas sino de dependencias, pero para las tareas que vamos a realizar a lo largo del projecto no no es necesario utilizar nada más complejo como Grunt.

Las ventajas de usar NPM como un gestor de tareas son:
- Es posible añadir un ‘hook’ que permite lanzar una tarea o después de la tarea que hayamos realizado.
- Podemos establecer un conjunto de variables que se usaran en las tareas

Estas dos ventajas son las más interesantes de cara al uso de NPM como gestor de tareas para el proyecto.

# Framework de test
---
Existen bastantes frameworks para ejecutar los test sobre el proyecto que se está desarrollando, investigando un poco podemos ver algunos como: [Jest](https://jestjs.io/es-ES/), [Mocha](https://mochajs.org/) e [Intern](https://theintern.io/). 

Cada framework tiene sus propias ventajas y desventajas, pero usaremos Jest, ya que es el más sencillo de instalar y aunque tenga menos herramientas disponibles que Mocha, tiene las que usaremos en el proyecto.

Por otra parte en el caso de Mocha tendremos que instalar la librería "Mocha.js" y "Chai.js", siendo esta última la que contiene las aserciones: expect, assert y should. Además se investigó la posibilidad de usar Intern como framework para ejecutar los test, pero este tiene poca documentación sobre su uso.

para instalar Jest usaremos el comando:
>npm install jest @types/jest ts-jest typescript -D

El comando usado anteriormente instala además un módulo que contiene las definidiones de tipos de Jest

# Docker
---

Para probar los contenedores de manera aislada, construiremos una imagen de docker que tenga la configuración necesaria para lanzar dichos test.

Usaremos una base con `node:17-alpine`. Ya que la versión 17 es la última version soportada por docker y la variante 'alpine' tiene otras ventajas destacadas. La que más influye en la toma de decisión para usar dicha versión es que ocupa menos espacio.

Por otra parte se automatizará la subida de una imagen actualizada mediante una github action, además de otra action que permita la sincronización del fichero README.md en el repositorio de Docker, buscando en el 'Marketplace' de actions en github se ha encontrado una [herramienta](https://github.com/marketplace/actions/docker-hub-readme-description-sync) que permite actualizar el README de manera sencilla.
