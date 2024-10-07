# GitHub User Search App

## Descripción

Esta es una aplicación web construida con Next.js (page router) que permite buscar, listar y marcar como favoritos usuarios de GitHub. Utiliza la API de GitHub Users para obtener datos y presenta una interfaz intuitiva para interactuar con los usuarios.

## Requisitos

### Home

- Obtiene una lista inicial de usuarios de la API de GitHub Users.
- Muestra los usuarios en una lista con sus nombres y avatares.
- Implementa un buscador que permite filtrar los usuarios haciendo peticiones a la API por nombre.
- Cada usuario tiene un enlace a una página de detalle.
- Permite marcar usuarios como favoritos (sin necesidad de persistir).

### Página de Detalle del Usuario

- Muestra los detalles de un usuario específico al hacer clic en él desde la página de listado (nombre, avatar, bio, repositorios, etc.).
- Indica si el usuario es favorito y permite agregar o eliminarlo.

## Tecnologías Utilizadas

- **Next.js**: Framework para React que permite la renderización del lado del servidor y generación de sitios estáticos.
- **React**: Biblioteca para construir interfaces de usuario.
- **API de GitHub**: Proporciona datos sobre los usuarios de GitHub.
- **Chakra UI**: Para el estilo y diseño de la interfaz.

## Instalación

1. Clona el repositorio:

   ````bash
   git clone https://github.com/NicoGonzalez6/Fravega-challenge.git
   cd github-user-search-app ```

   ````

1. Instala las dependencias::

   ```bash
   npm install
   ```

1. Inicia la aplicación:
   ```bash
   npm run dev
   ```
