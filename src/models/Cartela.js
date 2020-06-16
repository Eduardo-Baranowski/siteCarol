const mongoose = require("mongoose");

const CartelaSchema = new mongoose.Schema({
  idCartela: Number,
  ativo: Boolean,
});

module.exports = mongoose.model("Cartela", CartelaSchema);
