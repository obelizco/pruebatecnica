# Pruebatecnica

Este proyecto sirve para realizar busquedas de posts por distintos criterio, por ejemplo: autor, correo y palabras claves del post. 

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.
Mira Instalación para conocer como desplegar el proyecto.

## Pre-requisitos 📋

Para poder ejecutar el proyecto es necesario tener instalado el Angular CLI en la version 11.0.1 o posteriores.

## Instalación 🔧

Descargar e instalar Angular CLI globalmente: npm install -g @angular/cli
Clonar este repositorio: git clone https://github.com/obelizco/pruebatecnica.git.
Ejecutar npm install desde la raiz del proyecto.
Ejecutar ng serve en la terminal desde la raiz del proyecto.
Provecho. 🎉


## Ejecución de pruebas funcionales
Seleccionamos el criterio de busqueda y escribimos la palabra con la cual deseamos hacer la busqueda, para el primer caso el filtro por autor del post.
[filtro_autor](https://user-images.githubusercontent.com/54820397/128114050-dca78d2d-1550-412c-a7bd-74be5c2a71a3.png)

Selecionamos un autor del listado de sugerencias y nos muestra el resultado con los post.
[Listado_post_filtroautor](https://user-images.githubusercontent.com/54820397/128114327-4e792f4a-96cd-4609-8697-795fe42b6326.png)

Podemos apreciar en cada post, los diferentes comentarios que tiene y su detalle.
[comentarios_posts](https://user-images.githubusercontent.com/54820397/128114662-0a4da482-d3de-4550-bf44-805a37265a76.png)

Cambiamos de criterio de busqueda y elegimos por "correo"
[filtro_correo](https://user-images.githubusercontent.com/54820397/128114627-c330e615-f2ac-47bc-af7d-210bf1282aa7.png)

Selecionamos un correo del listado de sugerencias y nos muestra el resultado con los post.
![Listado_post_filtrocorreo](https://user-images.githubusercontent.com/54820397/128114742-7c3f09f8-f64f-44d2-a687-13f595613c83.png)

Cambiamos de criterio de busqueda y elegimos por "Palabra clave dentro el post"
![filtro_palabraclave](https://user-images.githubusercontent.com/54820397/128115445-f0968377-88b3-44b7-93ad-77e39ce41154.png)

Escribimos la palabra y presionamos el icono de la lupa. Podremos apreciar el resultado de los post que contienen en su titulo, la palabra escrita.![Listado_post_filtropalabra_clave](https://user-images.githubusercontent.com/54820397/128115535-af916f78-98d4-45b8-9f1c-56b8990e79be.png)


## Tecnología usada
Angular 11.x: La versión lista para producción de Angular
Angular Material: Una implementación del Material Design en Angular.js
