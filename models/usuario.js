var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//esquema do banco 
var UsuarioSchema = new Schema({
  username:String,
  senha:String
});

//exportando o modulo 
module.exports = mongoose.model('Usuario' , UsuarioSchema);