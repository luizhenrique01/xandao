const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");
const app        = express();

//PORTA DO SERVIDOR
const PORTA = 8081;

// DIC ADICIONANDO INFORMACOES ID, NOME E IMAGEM QUE IRAO APARECER NA TELA INICIAL
let ULTIMOHEROIDATERRA = [
  {
    "id": 0,
    "nome": "XANDAO RINDO ",
    "imagem": "https://i0.wp.com/paradoxalnews.com/wp-content/uploads/2020/09/maxresdefault.jpg?fit=780%2C439&ssl=1"
  },
  {
    "id": 1,
    "nome": "XANDAO SERIO ",
    "imagem": "https://pbs.twimg.com/profile_images/1306776294278004736/64yfTxt9.jpg"
  },
  {
    "id": 2,
    "nome": "TOMA ESSE FUCKING DOUBLE BICEPS ",
    "imagem": "https://i1.wp.com/paradoxalnews.com/wp-content/uploads/2020/09/maxresdefault-1.jpg?fit=1200%2C675&ssl=1&resize=350%2C200"
  }
];

// converte o objeto em jason
app.use(bodyParser.json());
app.use(cors());

app.get("/ULTIMOHEROIDATERRA", (req, resposta) => {
    resposta.send(ULTIMOHEROIDATERRA);
});

app.post("/ULTIMOHEROIDATERRA", (req, res) => {
    const XANDAO = req.body;
    XANDAO.id = ULTIMOHEROIDATERRA.length;
    ULTIMOHEROIDATERRA.push(XANDAO);
    res.sendStatus(201);
});

app.put("/ULTIMOHEROIDATERRA/:id", (req, res) => {
    const { id } = req.params;
    const { nome, imagem } = req.body;
    ULTIMOHEROIDATERRA[id] = { id, nome, imagem };
    res.send(ULTIMOHEROIDATERRA[id]);
});

// exemplos
// coringa -> localhost:/item/1
// path parametro -> id = 1 
// meet.google.com/jvq-yddd-yvw
// meet.google.com/:sala

app.get("/item/:id", (req, res) => {
    const id = req.params.id;

    // busca item do array por id
    const item = items.find(pam => pam.id == id);
    
    if(item) {
        res.send(item);
    } else {
        res.sendStatus(404);
    }
});

// inicializa servidor http na porta PORTA
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
