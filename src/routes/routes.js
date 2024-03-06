const express = require("express");
const app = express();

app.use(express.static("public"));

const router = express.Router();

const listaAlunos = require("../views/listaAlunos.js");

router.get('/listaAlunos', (req, res) => {
    let arrAluno = ["Ana", "Carlos", "Renato"];
    let texto="";
    for (i = 0; i < arrAluno.length; i++) {
        texto += i + ":" + arrAluno[i] + "<br>";
    }
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
        res.end(texto);
});

router.get('/alunoLista', (req,res)=> {

    res.send(listaAlunos());

})

module.exports = router;

//exporta o arquivo para o modulo de exportação que executa arquivos externos que fazem para do conjunto com o framework