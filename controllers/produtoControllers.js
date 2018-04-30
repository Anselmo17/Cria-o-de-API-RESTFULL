//importando o produto
var Produto = require('../models/produto');


//funcao para salvar os dados no banco 
exports.save = function(name , descricao , valor , callback){

  new Produto ({
    'name':name ,
    'descricao':descricao,
    'valor':valor
  }).save(function(error , produto){
    if(error){
      callback({error:'Não foi possivel salvar os dados'})
    }else{
      callback(produto);
    }
  });

}

//listar todos os dados da aplicação
exports.list = function(callback){
  Produto.find({}, function(error , produtos){
    if(error){
      callback({error:'Nao foi possivel encontrar os produtos '});
    }else{
      callback(produtos);
    }
  });
}


//apagar algum dado da aplicação
exports.delete = function(id , callback ){
  Produto.findById(id , function(error , produto){
      //se de error executa 
      if(error){
        callback({error:'Nao foi possivel excluir'});
      }else{

        //se não tiver erro executa 
        produto.remove(function(error){
          if(!error){
            callback({reposta:'Produto excluido com sucesso'});
          }
        });
      }
  });
}