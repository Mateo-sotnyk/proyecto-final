>[!NOTE]
Proyecto Final – API REST Backend
>
  *Objetivo General*

Crear una API REST funcional para manejar usuarios y productos, incluye autenticación, CRUD de productos, validaciones y seguridad.

Funcionalidades implementadas

- Usuarios y autenticación

- Registro de usuario con email y contraseña.

- Login con JWT para rutas protegidas.

- Rate limit para evitar abusos en el login.

- Productos

- Listar todos los productos o uno por ID.

- Crear, actualizar o eliminar productos (requiere login).

- Filtrado de productos por nombre, categoría, precio o stock usando query params.

- Validaciones y Seguridad

- Manejo de errores consistente en todas las respuestas.

- Logger de requests con Morgan.


>[!NOTE]
TECNOLOGIAS UTILIZADAS:

Node.js
Express: Framework web.
TypeScript: Para tipado estricto.
Mongoose: ODM para interactuar con MongoDB.
MongoDB: Base de datos NoSQL.
ts-node: Para ejecución directa durante el desarrollo.
Bruno: Cliente API utilizado para las pruebas.

Arquitectura del Proyecto

Se sigue el patrón MVC para mantener el código organizado y escalable:

    src/

    ├── config/        # Configuraciones generales (DB, variables de entorno)
 
    ├── controllers/   # Lógica de endpoints

    ├── interfaces/    # Tipos e interfaces (TypeScript)
 
    ├── middleware/    # Middlewares generales
 
    ├── middlewares/   # Middlewares específicos
 
    ├── model/         # Modelos de datos
 
    ├── routes/        # Rutas de la API
 
    ├── services/      # Funciones y servicios
 
    ├── templates/     # Plantillas
 
    ├── utils/         # Funciones utilitarias
 
    └── validators/    # Validaciones de datos
 

Instrucciones para Ejecutar Localmente 

>[!TIP]
 Configurá tu archivo .env según .env.example antes de ejecutar.

# Clonar el repositorio
```
git clone https://github.com/Mateo-sotnyk/proyecto-final.git
```
# Entrar a la carpeta del backend
```
cd backend_utn
```
# Instalar dependencias
```
npm install
```
# Ejecutar en desarrollo
```
npm run dev
```
# O para producción
```
npm run build
npm run start
```

Accedé al backend en tu navegador:
```
http://localhost:3000
```
Endpoints Principales 
```
POST /auth/register / POST /auth/login

GET /products / GET /products/:id

POST /products, PATCH /products/:id, DELETE /products/:id (requiere login)
```
Deploy 
>[!IMPORTANT]
https://proyecto-final-fn24.onrender.com
 ✅

Mateo Sotnyk – Proyecto Final Backend UTN
