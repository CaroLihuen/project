
## Descripcion

Pequeño CRUD realizado con NestJs y MongoDB. 
El crud creado se trata sobre crear cursos. Cada curso contiene seis propiedades, cuando se crea: 
- name(nombre): string, 
- description(descripción): string, 
- teacher(profesor): string, 
- hoursOfCourse(horas de cursada): string, 
- status(estado): boolean. 

Contiene dentro de la carpeta src la carpeta courses, que dentro contiene tres subcarpetas: dto, interface, schema.

La ruta principal es:  http://localhost:3000/ .
Para entrar a la de course: http://localhost:3000/course . 

## Instalación

```bash
$ npm install
```

## Levantar el servidor

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
