# Ejercicios Bootcamp

Este repositorio muestra los ejercicios usados en el Bootcamp de Laboratoria.

## Organización de carpetas

Los ejercicios se organizan de la siguiente manera (se usan nombres de prueba):

    .
    ├── 02-tdd
	    ├── ejercicio-01
		    ├── tests
	    ├── ejercicio-02
		    ├── tests

Existen 3 tipos de carpetas:

 1. Carpeta de la lección
 2. Carpeta de ejercicio (pertenece a la carpeta de la lección)
 3. Carpeta de pruebas (pertenece a la carpeta del ejercicio)

## Instalación

	git clone https://github.com/Laboratoria/bootcamp-exercises
	cd bootcamp-exercises
	cd nombre_de_carpeta_de_leccion
	npm install

## Ejecución

Ejecutar las pruebas unitarias con:

	mocha carpeta_de_leccion/carpeta_de_ejercicio/tests

Ejemplo:

	mocha 02-tdd/ejercicio-01/tests
