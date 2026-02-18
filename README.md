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