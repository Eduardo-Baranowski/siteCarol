const mongoose = require("mongoose");

const ComprovanteSchema = new mongoose.Schema({
  nome: String,
  email: String,
  escolhidos: Number,
  comprovante: String,
});

module.exports = mongoose.model("Comprovante", ComprovanteSchema);
