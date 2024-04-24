const express = require('express');
const app = express();
const port = 3000;
//primera ruta, en general deberia ser el main
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//assi se crean las distintas rutas que forman parte de la app
app.get("/main", (req, res) => {
  res.send("Hello World!   MAINNNNNNN");
});
//ruta con paso de parametros, en este caso el id es el parametro en forma normal, despues se carga main/5 el id tendria valor 5
app.get("/main/:id", (req, res) => {
  res.send("Hello World!   MAINNNNNNN   param " + req.params.id);
})
//ruta generica para indicar que la ruta no existe, si o si debe ir al final de la lista de rutas, pero antes del listen
app.get("*", (req, res) => {
  res.send("Ruta no encontrada");
});

//acá se escucha el servidor y manda mensaje indicando el puerto donde esta activo
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})