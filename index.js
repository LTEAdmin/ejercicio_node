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
//acá se escucha el servidor y manda mensaje indicando el puerto donde esta activo

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})