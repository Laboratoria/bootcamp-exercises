#Ejercicios Bootcamp

Esta rama muestra la forma de crear una nueva unidad de ejercicios dentro del repositorio de bootcamp

## Folder Organization

Los ejercicios se organizan de la siguiente manera

    .
    ├── XX-leccion-name
	    ├── ejercicio-XX
          ├── ejercicio-XX.js
		      ├── tests
              ├── ejercicio-XX_test.js

XX es el __número__ de la lección y/o ejercicio

Existen 3 tipos de folder:

 1. Folder de lección
 2. Folder de ejercicio (pertenece a folder de lección)
 3. Folder de pruebas (pertenece a folder de ejercicio)

##Instalación

Necesitas [Mocha](https://mochajs.org/) para crear pruebas, instalalo de manera global con:

  npm install -g mocha

##Creación de pruebas

TO DO: Crear tutorial de creación de pruebas unitarias

##Ejecución
Correr las pruebas unitarias con:

	mocha folder_de_leccion/folder_de_ejercicio/tests

Por ejemplo:

	mocha 02-tdd/ejercicio-01/tests
