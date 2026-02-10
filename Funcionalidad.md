TIENDA DE ROPA (PROJECT BREAK)

- Se ha creado la estructura básica de carpetas del proyecto.

- Procedemos a iniciar node e instalar dependencias a través del terminal:

    - " npm init -y "                              -- Para iniciar node
    - " npm install express mongoose dotenv "      -- Para instalar las dependencias necesarias

Conexión a la base de datos en config/db.js

Creación del modelo de los productos en "Product.js"

Conexion del servidor principal en index.js

A traves de productControlers creamos los controladores con los diferentes enpoints
    - Mostrar todos los productos mediante una petición GET
    - Crear un producto nuevo con POST
    -
Despues se enlaza con las rutas en "productRoutes.js"





    Crear el dashboard con lista de productos en "/dashboard"


Debe mostrar:

Todos los productos

Enlaces para editar

Botón para eliminar

Enlace para crear producto nuevo