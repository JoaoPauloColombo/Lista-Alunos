const express = require("express");
const app = express();

app.use(express.static("public"));

const router = express.Router();

const listaAlunos = require("../views/listaAlunos.js");

var arrAluno = [{ name: 'Ana' }, { name: 'Carlos' }, { name: 'Renato' }];
arrAluno.push({ name: 'Pedro' });
router.get('/listaAlunos', (req, res) => {
    let texto = "";
    for (let i = 0; i < arrAluno.length; i++) {
        texto += i + ":" + arrAluno[i].name + "<br>";
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(texto);
});

router.get('/listaAlunos/:name', (req, res) => {
    const { name } = req.params;
    const index = arrAluno.map(aluno => aluno.name).indexOf(name);
    let texto;
    if (index > -1) {
        texto = "<h1>Aluno localizado no sistema.</h1><h3>O id do aluno no Array é " + index + "</h3>";
    } else {
        texto = "<h1>Aluno não localizado no sistema.</h1>";
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(texto);
});

router.get('/alunoLista', (req, res) => {
    res.send(listaAlunos());
});

router.post('/addAlunos', (req, res) => {
    const { name } = req.bodyParser;
    app.use(bodyParser.json())
    arrAluno.push({ name });
    res.send("Aluno adicionado com sucesso!");

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end("<h1>Usuario ja foi cadastrado</h1>");
});

router.get('/novoAluno/:name', (req,resp) => {
    const { name } = req.params;

    const index = arrAluno.map(aluno => aluno.name).indexOf(name);

    if(index === -1){
        let novoNome = {name: name};
        arrAluno.push(novoNome);
        resp.send(arrAluno);
    }else{
        resp.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        resp.end("<h1>Usuario ja foi cadastrado</h1>");
    }

})


module.exports = router;


//exporta o arquivo para o modulo de exportação que executa arquivos externos que fazem para do conjunto com o framework