const express = require("express");
const app = express();

const listaAlunos = require("./views/listaAlunos");

app.use(express.static("public"));

app.get('/listaAlunos', (req,res)=>{

    res.send(listaAlunos())

})


app.listen(3001, ()=>{
    console.log("Servidor no ar com express")
})
//Para executar o arquivo, escreva node e ("o nome do java script").