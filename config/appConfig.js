var express = require('express');
var bodyParser = require('body-parser');
var port = '3000';

//exportando variavel app
var app = module.exports = express();

//escutando na porta 
app.listen(port);


//configurar o body_parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//configurar os cors para nao ter erros na requisições
app.use(function(req , res , next ){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Acess-Control-Allow-Methods','GET','POST','PUT','DELETE');
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With , content-type,Authorization');
  next();
})
