const express = require("express");
const app = express();

const listaAlunos = require("./views/listaAlunos");

app.use(express.static("public"));

app.get('/listaAlunos', (req,res,next)=>{
    //responder com html
    res.end(listaAlunos())

})


app.listen(3002, ()=>{
    console.log("Servidor no ar com express")
})
