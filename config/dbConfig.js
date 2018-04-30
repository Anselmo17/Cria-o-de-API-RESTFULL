var mongoose = require('mongoose');

//passando o endereco do banco 
var urlString = 'mongodb://localhost/API';

mongoose.connect(urlString);


//tratando a conexao se conecto ou nao 
mongoose.connect(urlString , function(err , res){
  if (err){
    console.log('Nao foi possivel fazer a conexao' , urlString);
  } else {
    console.log('Conectado com sucesso' , urlString);
  }
})