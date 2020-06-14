const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: String,
  dataNascimento: Date,
  naturalidade: String,
  cpf: String,
  email: String,
  celular: String,
  residencial: String,
  cep: String,
  estado: String,
  cidade: String,
  bairro: String,
  rua: String,
  numero: String,
  complemento: String,
  escolhidos: Number,
});

module.exports = mongoose.model("User", UserSchema);
