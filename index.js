const express = require("express");
const app = express();

const bodyParser = require('body-parser');

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const routes = require('./src/routes/routes.js');
app.use('/',routes);

app.listen(3002, ()=>{
    console.log("Servidor no ar com express")
});