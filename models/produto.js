var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//esquema do banco 
var ProdutoSchema = new Schema({
  name:String,
  descricao:String,
  valor:String
});

//exportando o modulo 
module.exports = mongoose.model('Produto' , ProdutoSchema);