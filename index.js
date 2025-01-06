const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

// Conexão com o banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados.");
  })
  .catch((msgErro) => {
    console.error("Erro ao conectar com o banco de dados:", msgErro);
  });

// Configuração do EJS e arquivos estáticos
app.set("view engine", "ejs");
app.use(express.static("public"));

// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
// Página inicial com perguntas
app.get("/", (req, res) => {
  Pergunta.findAll({
    raw: true,
    order: [["id", "DESC"]],
  }).then((perguntas) => {
    res.render("index", { perguntas: perguntas });
  });
});

// Página de formulário para nova pergunta
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

// Salvar nova pergunta
app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect("/");
  });
});

// Página de uma pergunta específica com respostas
app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;

  Pergunta.findOne({
    where: { id: id },
  }).then((pergunta) => {
    if (pergunta != undefined) {
      Resposta.findAll({
        where: { perguntaId: pergunta.id },
        order: [["id", "DESC"]],
      }).then((respostas) => {
        res.render("pergunta", { pergunta: pergunta, respostas: respostas });
      });
    } else {
      res.redirect("/");
    }
  });
});

// Salvar nova resposta
app.post("/responder", (req, res) => {
  var corpo = req.body.corpo;
  var perguntaId = req.body.pergunta;

  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId,
  }).then(() => {
    res.redirect("/pergunta/" + perguntaId);
  });
});

// Excluir uma resposta
app.delete("/responder/excluir/:id", (req, res) => {
  const respostaId = req.params.id;

  Resposta.destroy({
    where: { id: respostaId },
  })
    .then(() => {
      res.status(200).send("Resposta excluída com sucesso.");
    })
    .catch((error) => {
      console.error("Erro ao excluir resposta:", error);
      res.status(500).send("Erro ao excluir resposta.");
    });
});

// Iniciar o servidor
app.listen(8080, () => {
  console.log("App rodando!");
});
