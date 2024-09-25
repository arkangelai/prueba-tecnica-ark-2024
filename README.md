# Prueba Técnica Arkangel AI 2024

## Objetivo

El objetivo de esta prueba es construir una aplicación sencilla para la gestión de tareas (ToDo) que permita:

1. Listar tareas.
2. Crear, editar y eliminar tareas.
3. Filtrar tareas por estado (completadas/no completadas).
4. Cambiar entre diferentes usuarios ficticios para mostrar las tareas de cada uno.

## Requisitos Técnicos

- **Frontend**: React.
- **API**: Simula una API utilizando **fetch** o **Axios**. Los datos se obtendrán de [JSONPlaceholder](https://jsonplaceholder.typicode.com/), específicamente de los endpoints de **users** y **todos**.

## Descripción del Proyecto

La aplicación consiste en una interfaz de usuario que:

1. Permite seleccionar entre diferentes usuarios ficticios.
2. Muestra la lista de tareas asociadas al usuario seleccionado.
3. Permite:
   - Crear nuevas tareas (simulado, sin persistencia real).
   - Editar el título de una tarea.
   - Eliminar una tarea.
   - Marcar una tarea como completada o no completada.
   - Filtrar las tareas por completadas y no completadas.

## Funcionalidades

### 1. Selección de Usuario

- Implementa un dropdown para seleccionar entre los usuarios disponibles. (Fetch de `https://jsonplaceholder.typicode.com/users`).
- Al seleccionar un usuario, deben cargarse las tareas correspondientes a ese usuario (Fetch de `https://jsonplaceholder.typicode.com/todos?userId={userId}`).

### 2. Listado de Tareas (ToDos)

- Mostrar las tareas en una lista con su estado (completada o no completada).
- Cada tarea debe tener las siguientes opciones:
  - Marcar como completada/no completada.
  - Editar el título de la tarea (inline editing).
  - Eliminar la tarea.
- Incluir un filtro para mostrar todas las tareas, solo las completadas o solo las no completadas.

### 3. Agregar Tarea

- Incluir un formulario sencillo que permita agregar una nueva tarea con un título.
- La nueva tarea debe añadirse a la lista actual (simulado, sin persistencia real).
