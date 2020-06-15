const User = require("../models/Comprovante");
const nodemailer = require("nodemailer");
module.exports = {
  async create(request, response) {
    const { nome, email, escolhidos, comprovante } = request.body;
    console.log(request.body);
    console.log(nome, email, escolhidos, comprovante);

    // {email: '...', password: '...'}
    const user = await User.create({
      nome: nome,
      email: email,
      escolhidos: escolhidos,
      comprovante: comprovante,
    });

    console.log(user);
    return response.render("comprovanteSucesso.html");
  },
};
