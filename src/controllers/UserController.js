const User = require("../models/User");

module.exports = {
  async create(request, response) {
    const {
      nome,
      dataNascimento,
      naturalidade,
      cpf,
      email,
      celular,
      residencial,
      cep,
      estado,
      cidade,
      bairro,
      rua,
      numero,
      complemento,
      escolhidos,
    } = request.body;
    console.log(request.body);
    console.log(
      nome,
      dataNascimento,
      naturalidade,
      cpf,
      email,
      celular,
      residencial,
      cep,
      estado,
      cidade,
      bairro,
      rua,
      numero,
      complemento,
      escolhidos
    );

    // {email: '...', password: '...'}
    const user = await User.create({
      nome: nome,
      dataNascimento: dataNascimento,
      email: email,
      naturalidade: naturalidade,
      cpf: cpf,
      email: email,
      celular: celular,
      residencial: residencial,
      cep: cep,
      estado: estado,
      cidade: cidade,
      bairro: bairro,
      rua: rua,
      numero: numero,
      complemento: complemento,
      escolhidos: escolhidos,
    });

    console.log(user);

    //return response.render("createUser.html", { user: user });
    return response.render("cadastroSucesso.html");
  },
};
