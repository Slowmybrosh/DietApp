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

# Integración Continua
---

Se han elegido Travis CI y CircleCI como sistemas de integración continua a usar en el proyecto, pero eso no significa que sean los unicos que existan. 

En un primer lugar se barajó utilizar otros sistemas como: Jenkins o TeamCity.

De las mayores ventajas de Jenkins es que es gratuito y cuenta con una gran comunidad sobre la que se apoya esta comunidad, ya que es de código abierto.

Por otra parte se contempló la idea de utilizar TeamCity, que también ofrece una suscripción gratuita sin limitaciones en el número de builds que hacer y que cuenta con construcciones simultaneas en diferentes entornos. 

En conclusión el motivo por el que se usaron las herramientas de Travis y CircleCI fue por su sencillez a la hora de crear las configuraciones de las builds y la gran cantidad de documentación que existe para dichas herramientas.

## Travis CI

Uno de los sistemas de integración continua que se ha elegido es Travis CI, ya que es un sistema muy sencillo de configurar, además cuenta con integración en GitHub y tiene habilitado el uso de la API 'Checks' por defecto. 

Para su configuración se ha creado el archivo `.travis.yml`, donde se especifica el lenguaje a usar. En este caso Nodejs en varias de sus versiones. Una de las versiones usadas es la versión '14', lanzada en Abril de 2020, que es la más antigua que se permite usar en Jest, el framework sobre el que se lanzan los test, también se usa la última versión disponible, que actualmente es la versión 17 y la versión LTS más reciente que ahora mismo es la 16. 

Una de las desventajas de Travis es que actualmente tienes que introducir un método de pago para poder acceder a la prueba gratuita, otorgando solo 10000 créditos durante un mes. Después de ese mes, se deberá comprar una suscripción.

## Circle CI

La segunda herramienta de integración continua que usaremos es CircleCI, que permite su uso gratuito (sin tener que meter un método de pago como ocurría con Travis)

Para su configuración se ha creado la carpeta `.circleci` que contiene el fichero de configuración para la herramienta. 

Se ha elegido como segundo sistema de integración porque es sencillo de usar y tiene bastante documentación útil. Además como se mencionaba anteriormente si que es 'gratis', ofreciendo muchos más creditos que Travis. Y aparentemente gasta menos de estos creditos en comparación a otras herramientas de integración continua. 

Otra de las ventajas que existen con CircleCI es que tiene un editor de configuración integrado en la aplicación web, permitiendo así solventar los posibles fallos que pueda haber al subir por primera vez dicha configuración, o al cambiarla. 

Para su configuración se ha elegido la imagen `ubuntu-2004:202010-01`, ya que es la que se recomienda usar en la documentación de CircleCI. Dicha imagen tiene instalados: Ubuntu 20.04, docker y docker-compose. Teniendo justo las herramientas que necesitaremos. 
