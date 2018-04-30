var mongoose = require('mongoose');

var ProdutoSchema = new Schema({

  nome : String,
  descricao: String,
  valor: String
});


module.exports = mongoose.model('Produto' , ProdutoSchema);