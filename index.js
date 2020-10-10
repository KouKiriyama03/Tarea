// Importar express
const express = require("express");

// Crear un servidor express
const app = express();
//Creación de la ruta
app.use("/", (req, res, next) => {
    res.send("¡¡¡TAREA!!!");
});

// Inicializar el servidor en un puerto en específico
    app.listen(5005, () => {
        console.log("Servidor ejecutándose en el puerto 5005");
    });