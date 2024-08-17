# Prueba Técnica

Desarrollar una aplicación web utilizando un backend en Express con MongoDB y un frontend en React. La aplicación debe permitir la realización de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una entidad principal, basada en datos consumidos desde una API gratuita y la DB Mongo. La aplicación debe estar desarrollada completamente en TypeScript.

## Descripción del Proyecto

Este proyecto se desarrolla utilizando Node/Express y React con TypeScript tanto para el backend como para el frontend. Utiliza MongoDB como base de datos.

### Funcionalidades

- **Registro y Autenticación de Usuarios**: Permite a los usuarios registrarse, iniciar sesión y gestionar su autenticación.

- **Operaciones CRUD**: Permite crear, leer, actualizar y eliminar datos en la base de datos MongoDB.

- **Integración con API Externa**: Obtiene datos desde una API externa, los almacena en la base de datos local y permite su visualización y edición.

- **Interfaz de Usuario**: Una interfaz React para interactuar con el backend y realizar operaciones CRUD.

- **Animaciones**: Algunos botones como el inicio de sesión y regístro cuentan con animaciones css de transiciones y otros como spinner de carga en la obtención de datos desde la API externa.

- **Documentación de la API con Swagger**: Desde la ruta /api/v1/docs/ del servidor, puede verse las documentación de las rutas con los métodos detallados y los parámetros a insertar en cada una.

- **Bcrypt**: De utilizó la librería bcrypt en lugar de crypto-js para la encriptación de password de los usuarios registrados en el sistema, la funcionalidad en sí es la misma.

- **Paginación**: En la obtención de publicaciones desde la API externa, se realizó un paginado que se filtra por querys, donde desde el front se le indica la página, el número de publicaciones obtenidas por página y las publicaciones totales.

## Ejecución del Proyecto

### Backend

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/Zonorg/server-challenge.git
   ```

2. **Instalar Dependencias**

   Sobre el directorio raíz

   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno**
   Crea un archivo .env en el directorio raíz del backend y agrega las siguientes variables:

    ```
   DATABASE_URL=mongodb+srv://zonorg:794613258@cluster0.masr3or.mongodb.net/practice?retryWrites=true&w=majority&appName=Cluster0
   PORT=8080
   ```

4. **Ejecutar el Backend**
   ```
   npm start
   ```

- El backend estará corriendo en http://localhost:8080

### Frontend

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/Zonorg/client-challenge.git
   ```

2. **Instalar Dependencias**

   Sobre el directorio raíz

   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno**
   Crea un archivo .env.local en el directorio raíz del frontend y agrega la siguientes variable:

    ```
   NEXT_PUBLIC_API_URL="http://localhost:8080/api"
   ```

4. **Ejecutar el Frontend**
   ```
   npm run build
   npm start
   ```

- El frontend estará corriendo en http://localhost:3000 por defecto.


## URL del Sitio

- **Frontend**: https://client-challenge.vercel.app/
- **Backend**: https://server-challenge.onrender.com/

*Es probable que el backend tarde unos minutos en cargar, ya que es un servidor gratuito y se cierra al haber inactividad.

## Documentación de Swagger

- **Por defecto se encontrará en la ruta**: http://localhost:8080/api/v1/docs/