TIENDA DE ROPA - BACKEND

App de tienda de ropa con login de administrador para editar, crear y borrar productos. Con subida de imagenes mediante cloudynari y API REST para los productos.



TECNOLOGIAS:

Cloudinary
Node
Express
Express-session
Method-override
Mongoose
Multer
MongoDB atlas
Mongoose
Deploy en RENDER

URL
https://tienda-ropa-backend-cv2c.onrender.com

URL API REST

https://tienda-ropa-backend-cv2c.onrender.com/api/products

obtener productos por id
/api/products/:id




ESTRUCTURA DE CARPETAS

├── config 
│ ├── db.js 
│ ├── cloudinary.js 
│ └── multer.js 
├── controllers 
│ ├── productController.js 
│ ├── apiProductController.js 
│ └── authController.js 
├── helpers 
│ ├── baseHtml.js 
│ ├── template.js 
│ └── getNavBar.js 
├── middlewares 
│ └── authMiddleware.js 
├── models 
│ └── Product.js 
├── public 
│ └── styles.css 
├── routes 
│ ├── productRoutes.js 
│ ├── apiProductRoutes.js 
│ └── authRoutes.js 
├── index.js 
├── .env 
└── package.json



FUNCIONALIDAD

USUARIO

El usuario puede ver el listado de los productos detallados con:

-Imagen del producto
-Nombre
-Descripción
-Talla
-Precio

ADMINISTRADOR

El administrador puede editar los productos mediante el login y salir de la sesión con el botón de logout

Crear productos
Editarlos
Elinminarlos
Subida de imagenes mediante cloudinary

AUTENTICACION
(El acceso al dashboard con un inicio de sesión en la sección "login" de la barra de navegación)

ADMIN_USER
ADMIN_PASSWORD

credenciales de prueba:
-admin
-1234



DESPLIEGUE

-Aplicación desplegada en Render.

Pasos:

-Subida del proyecto a GitHub.
-Creación de Web Service en Render.
-Configuración de variables de entorno.
-Deploy desde el repositorio.

AUTOR

Javier García Álvarez