const { Router } = require("express");
const User = require("./models/User");
const Cartela = require("./models/Cartela");
const userController = require("./controllers/UserController");
const Comprovante = require("./models/Comprovante");
const comprovanteController = require("./controllers/ComprovanteController");
const cartelaController = require("./controllers/CartelaController");
const routes = Router();
const multer = require("multer");
const multerConfig = require("./config/multer");
const nodemailer = require("nodemailer");

routes.get("/", async (request, response) => {
  //const user = await User.create({email: 'Teste', password: '123'});

  //const user = await User.findOne({email: 'Teste'});
  //user = {email: 'Teste', password: '123'}

  //encontrar todos os usuarios
  //const users = await User.find();

  return response.render("home.html");

  //return response.json(users);
});
routes.get("/comofunciona", async (request, response) => {
  return response.render("comofunciona.html");
});

routes.get("/compreasua", async (request, response) => {
  return response.render("compreasua.html");
});

routes.get("/sobre", async (request, response) => {
  return response.render("sobre.html");
});

routes.get("/cadastro", async (request, response) => {
  return response.render("cadastroParaCompra.html");
});

routes.get("/comprovante", async (request, response) => {
  return response.render("comprovante.html");
});

routes.post("/criar-usuario", userController.create);

routes.post("/criar-usuario", function (req, res, next) {
  console.log(req.body.escolhidos);
  res.render("comprovanteSucesso.html");
});

routes.get("/cartelas", async (request, response) => {
  const cartelas = await Cartela.find();

  return response.json(cartelas);
});

routes.post(
  "/criar-comprovante",
  multer(multerConfig).single("file"),
  function (req, res, next) {
    const nomeImg = req.file.originalname;
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "eduardobaranowskiteste@gmail.com",
        pass: "12345678br",
      },
    });

    transporter
      .sendMail({
        from:
          "Comprovante Leilão de Automóveis <eduardobaranowskiteste@gmail.com>",
        to: "caroline.baranowski@autorizadoademilar.com.br",
        subject: "Dados de Pagamento Loteria de Automóveis!",
        html:
          "emai: " +
          req.body.email +
          "<br>" +
          "nome: " +
          req.body.nome +
          "<br>" +
          "Escolhidos: " +
          req.body.escolhidos +
          "<br>",
        attachments: [
          {
            // Basta incluir esta chave e listar os anexos
            // O nome que aparecerá nos anexos
            filename: nomeImg,
            path: "./tmp/uploads/" + nomeImg,
          },
        ],
      })
      .then((message) => {
        console.log(message);
      })
      .catch((err) => {
        console.log(err);
      });
    res.render("comprovanteSucesso.html");
  }
);

module.exports = routes;
