const express = require('express');

const router = express.Router();

router.get('/listaAlunos', (req, res) => {
    let arrAluno = ["Ana", "Carlos", "Renato"];
    let texto="";
    for (i = 0; i < arrAluno.length; i++) {
        texto += i + ":" + arrAluno[i] + "<br>";
    }
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
        res.end(texto);
});

module.exports = router;

//exporta o arquivo para o modulo de exportação que executa arquivos externos que fazem para do conjunto com o framework