const Cartela = require("../models/Cartela");
module.exports = {
  async create(request, response) {
    const { escolhidos } = request.body;
    console.log(request.body);
    console.log(escolhidos);

    // {email: '...', password: '...'}

    //
    //const cartela = await Cartela.find(idCartela.equals(req.body.escolhidos));
    //const cartela = await cartela.update({
    //idCartela: escolhidos,
    //ativo: false,
    //});

    console.log(cartela);
    //return response.json(cartelas);

    console.log(user);
    return response.render("comprovanteSucesso.html");
  },
};
