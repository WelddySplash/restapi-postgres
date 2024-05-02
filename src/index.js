const express = require('express');//inportamos express
const app = express();//lo hacemos funcionar

//middlewares: funciones antes de llegar a las rutas
app.use(express.json());//pasar json a javascript
app.use(express.urlencoded({extended: false}));//procesar objetos

//definicion de rutas
app.use(require('./routes/index'));

app.listen(3000);//hacemos que el servidor escuche atraves del puerto 3000
console.log('Server on port 3000');//mensaje de que se conecto bien