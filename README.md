#Ejercicios Bootcamp

Este repositorio muestra los ejercicios necesarios para el curso Bootcamp de Laboratoria.

## Folder Organization

Los ejercicios se organizan de la siguiente manera (se usan nombres de prueba)

    .
    ├── 02-tdd
	    ├── ejercicio-01
		    ├── tests
	    ├── ejercicio-02
		    ├── tests

Existen 3 tipos de folder:

 1. Folder de lección
 2. Folder de ejercicio (pertenece a folder de lección)
 3. Folder de pruebas (pertenece a folder de ejercicio)

##Instalación

	git clone https://github.com/Laboratoria/bootcamp-exercises
	cd bootcamp-exercises
	cd nombre_de_folder_de_leccion
	npm install

##Ejecución
Correr las pruebas unitarias con:

	mocha folder_de_leccion/folder_de_ejercicio/tests

Por ejemplo:

	mocha 02-tdd/ejercicio-01/tests
