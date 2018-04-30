//chamando o metodo appConfig
var app = require('./config/appConfig');

//chamando os banco MongoDB
var db = require('./config/dbConfig');



//configurando a porta principal
app.get('/', function(req , res){

  var pessoa = {
    nome:'Anselmo',
    idade:32,
    profissao:'Desenvolvedor'
  };

  res.json(pessoa);
});

