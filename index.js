const express = require("express");
const app = express();

app.use(express.static("public"));

const routes = require('./src/routes/routes.js')
app.use('/',routes)

app.listen(3002, ()=>{
    console.log("Servidor no ar com express")
})