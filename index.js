// Importar express
const express = require("express");

// Crear un servidor express
const app = express();
// Importar handlebars como template engine
const exphbs = require("express-handlebars");
// crear un servidor express
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));

app.set("view engine", "hbs");

// 


//Creación de la ruta
app.use("/", (req, res, next) => {
    res.render("home");
});

// Inicializar el servidor en un puerto en específico
    app.listen(5005, () => {
        console.log("Servidor ejecutándose en el puerto 5005");
    });   