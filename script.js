const express = require("express");
const app = express();

// const listaAlunos = require("./views/listaAlunos");

app.use(express.static("public"));

const listaAlunos = [
    { 
        id: 1, 
        nome: 'João', 
        idade: 20, 
        curso: 'Engenharia', 
        cidade: 'São Paulo' 
    },
    { 
        id: 2, 
        nome: 'Maria', 
        idade: 22, 
        curso: 'Medicina', 
        cidade: 'Rio de Janeiro' 
    },
    { 
        id: 3, 
        nome: 'Pedro', 
        idade: 21, 
        curso: 'Administração', 
        cidade: 'Belo Horizonte' 
    },
    { 
        id: 4, 
        nome: 'Ana', 
        idade: 19, 
        curso: 'Direito', 
        cidade: 'Salvador' 
    }
];

// app.get('/listaAlunos', (req,res)=>{

//     res.send(listaAlunos())

// })

app.get('/listaAlunos', (req, res) => {
    res.json(listaAlunos);
});

app.listen(3001, ()=>{
    console.log("Servidor no ar com express")
})
//Para executar o arquivo, escreva node e ("o nome do java script").