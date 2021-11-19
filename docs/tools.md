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
