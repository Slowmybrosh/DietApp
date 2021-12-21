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


# Servicios esenciales en la nube
---

## Logger

Un logger es esencialmente una utilidad que nos permitirá llevar un registro de las diferentes operaciones que se hacen en una aplicación. Con la característica de que si es una aplicación distribuida podremos ser conscientes de lo que ocurre en cada parte de la aplicación. 

Para añadir esta funcionalidad al proyecto se han revisado algunos loggers para Typescript y Javascript (ambos lenguajes son compatibles). Uno de los loggers que se revisó fue [Winston](https://www.npmjs.com/package/winston), pero no se consiguió terminar de configurar correctamente así que por simplicidad no se integró en el proyecto. Además su última actualización tiene un año de antigüedad. Pero tiene algunas utilidades interesantes como la posibilidad de usar diferentes formatos para el log, no solo JSON, y que puedes crear diferentes instancias del logger cada una con un nivel diferente. 

Otro logger que se probó fue [loglevel](https://www.npmjs.com/package/loglevel). Este es un logger minimalista con multitud de niveles, desde los niveles más bajos (Trace y Debug) hasta los más altos (Warn y Error). Su instalación es muy sencilla, se trata simplemente de instalarlo, importar el logger a los ficheros donde se necesite y echarlo a andar. El principal motivo por el que no se eligió es que no es capaz de mandar los registros en formato JSON a un fichero de manera sencilla. Se tendría que redirigir el flujo de datos desde la consola a un fichero. 

Adicionalmente, se intentó integrar [roarr](https://www.npmjs.com/package/roarr) que es un logger muy completo, parecido a Winston y con mucho potencial, pero no fui capaz de configurarlo completamente para mandar los registros a un fichero. Las ventajas de Roarr frente a Winston y Bunyan (otro logger que no se ha probado en este proyecto), es que no se necesita una configuración a nivel de programa, es decir, que no necesitamos instanciar el log en cada fichero donde lo usemos.

Por último se hablará de [Pino](https://www.npmjs.com/package/pino), el logger que se ha escogido entre los mencionados anteriormente. Tiene casi las mismas utilidades que Roarr o Winston, pero además incluye una serie de plugins como pino-pretty que permiten cambiar el estilo de los registros que aparecen en la consola. No se ha hecho uso de este plugin ya que se busca que los registros salgan en formato JSON, para su posterior procesado. También se hace uso de la posibilidad de crear hijos del logger, se ha usado un hijo del logger en cada clase. Además, por lo que parece se actualiza frecuentemente, la última actualización es del 1 de diciembre de 2021.

Se ha terminado eligiendo Pino por su sencillez a la hora de configurarlo, además es fácil redirigir el flujo para guardar los registros en un fichero definido por el usuario.  

## Configuración remota y variables de entorno

Para la configuración remota se han probado dos herramientas: Etcd3 y Consul. Dada la dificultad para configurar consul (a nivel de cliente, ya que no se ha configurado un servidor), se ha escogido Etcd3. 

Etcd3 permite mantener un control sobre las variables de entorno a nivel distribuido, cabe destacar que no se ha configurado un servidor y se está haciendo uso del cliente solamente. Esto obviamente hace que salte un error de conexión al servidor, que se ha gestionado haciendo uso de una tercera herramienta que guarda las variables de entorno en un fichero. 

Esta utilidad es Dotenv, que permite salvar y recuperar (entre otras cosas) variables de entorno. Para este proyecto por ahora solo se recupera la variable 'LOG_DIR' que es el path donde se guardarán los registros del logger.

Para esta parte del proyecto se ha creado una clase que permite configurar los diferentes aspectos de la aplicación. Por ahora solo se hace uso de esta clase configuración en la clase del logger.

# API Rest 

Para este apartado del proyecto es necesario implementar una API Rest para la aplicación. 

## Requisitos

- Debe ser facil de configurar, teniendo en cuenta que ya tenemos un directorio de trabajo establecido.
- Aportar la documentación necesaria para configurar correctamente la API rest tanto de manera básica como de manera avanzada.
- No puede ser un framework que se ha abandonado, así que debemos buscar uno que ofrezca mantenimiento y actualizaciones frecuentes. 
- Debe ser compatible con el lenguaje que se está utilizando en el proyecto (Typescript), la mayoría de frameworks de Javascript también funcionan para Typescript.

Ahora que hemos mencionado los requisitos que debe tener el framework de la API Rest, hay que buscar entre los miles disponibles el que se ajusta a nuestros requisitos. Debemos tener en cuenta que se nos prohibió expresamente utilizar Flask (usado para otra asignatura de este cuatrimestre) y Express. 

Una de las opciones más conocidas es [Koa](https://koajs.com/), este framework está desarrollado por el mismo equipo que Express y aunque la prohibición del uso de este framework no afecta a Koa, no se ha planteado el uso del framework para el proyecto. Bien es cierto que si que se ha investigado un poco sobre el framework, observando que trae gran cantidad de documentación. Además al ser tan popular tiene una gran comunidad que mantiene viva una "Wiki", que ayuda a que la curva de aprendizaje sea sencilla. Otra de sus ventajas principales es que es muy liviano siendo tan solo unas 600 lineas de codigo. El problema fundamental de este framework es su baja compatibilidad con otros middleware y eso puede suponer un problema de cara al futuro del proyecto. Por último mencionar que su ultima actualización es de hace dos meses.

El segundo framework sobre el que se ha investigado es [Sails](https://sailsjs.com/). Lo interesante de esta herramienta es que sigue el método MVC, permitiendo desarrollar claramente el proyecto en estas tres secciones. Aunque se anuncien como un framework de JS puro, es posible utilizarlo con Typescript, el lenguaje del que hacemos uso en el proyecto. Una de sus principales ventajas es que se adapta perfectamente a cualquier base de datos que utilicemos, y encima no tenemos que escribir el código de la API-Rest, ya que su sistema de blueprints lo hace por nosotros. Ya que buscamos aprender a crear una API-Rest, no se hará uso de esta herramienta en el proyecto; aunque con fines educativos es muy buena opción. Este framework cumple también con el requisito del mantenimiento y actualización ya que se actualizó por ultima vez hace 3 meses.

En tercer lugar, le echaremos un vistazo a (MeteorJS)[https://www.meteor.com/]. Un framework también muy conocido del que hacen uso algunas empresas muy famosas, IKEA entre otras. Su última actualización es de hace tan solo 22 días, convirtiendolo así en el framework más "actualizado" del que se ha investigado. La documentación de la herramienta también es importante, ya que sin ella no sabríamos el potencial que tiene. Destacaremos que la documentación de Meteor parece muy completa, cuenta con tutoriales para crear una simple API hasta una muy avanzada. No solo tiene tutoriales, sino que cuenta con un apartado de buenas prácticas de uso para producir aplicaciones y un canal de Youtube donde explican tutoriales, actualizaciones y novedades de la herramienta. 

Por último llegamos al framework elegido, (Fastify)[https://www.fastify.io/]. Este presume de ser el framework web más rápido del mercado actual, habiendose comparado con Express. Bien es cierto que se ejecutaba una sencilla aplicación "Hello world!" como benchmark, pero aún así fue casi el doble de rápido. Esta herramienta permite encapsular plugins (es posible que en un futuro el proyecto necesite hacer uso de alguno), la ventaja principal por la que se ha elegido este framework es la rapidez con la que se permite levantar una API rest, haciendo uso de una sintaxis sencilla y el uso de funciones asíncronas. Aunque hayamos hecho uso de el logger Pino, configurado en el anterior objetivo, es interesante conocer que Fastify utiliza Pino también en sus propios logger.

Bien es cierto que Fastify no tiene las todas las ventajas de los otros frameworks mencionados, Koa tiene una comunidad más "comprometida" y está respaldado por Express (aunque no sea compatible con su middleware). Sail es más fácil de montar ya que hace uso de su sistema de "Blueprints" y MeteorJS es mucho más conocido que la herramienta de la que hacemos uso. Pero se ha terminado decantando por Fastify debido a su velocidad a la hora de servir peticiones y su facilidad para montar el sistema.