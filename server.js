//chamando o metodo appConfig
var app = require('./config/appConfig');

//chamando os banco MongoDB
var db = require('./config/dbConfig');

//chamando o models usuario
var usuario = require('./models/produto');

//chamando o modulo produto controllers 
var produtoController = require('./controllers/produtoControllers');



//configurando a porta principal
app.get('/', function(req , res){
  res.end('Bem vindo a API');
});

//rotas dos produtos

//pegando a lista de produtos
app.get('/produtos', function(req , res){
  produtoController.list(function(resp){
    res.json(resp);
  })
});


//metodo de cadatrar os produtos 
app.post('/cadastro' , function(req , res){

  //pegando os dados da requisição
  var name = req.body.name;
  var descricao = req.body.descricao;
  var valor = req.body.valor;

  //salvando os valores no banco 
    produtoController.save(name , descricao , valor , function(resp){
      res.json(resp);
    });
});


//metodo para remover dados do banco 
app.delete('/deletar/:id' , function(req , res){
  
    //pegando o dado do parametro a ser excluido
    var id = req.params.id;
    
    //chamando o produto controllers
    produtoController.delete(id , function(resp){
      res.json(resp);
    });
});