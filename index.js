const express = require("express");
const app = express();

const routes = require('./src/routes/routes')
app.use('/',routes)

app.listen(3002, ()=>{
    console.log("Servidor no ar com express")
})