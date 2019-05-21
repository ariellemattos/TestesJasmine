// push: adiciona um novo elemento à pilha;
// pop: retira e retorna o elemento do topo da pilha (o último elemento que foi adicionado);
//  peek: permite verificar o elemento que está no topo da pilha, mas sem tirá-lo de lá;
// size: função auxiliar que permite verificar a quantidade de elementos presentes na pilha;
// isEmpty: outra função auxiliar que retorna se a pilha está vazia.

function Stack() {
    var itens = new Array();
     
    return {
    
      push : function(item) {
       itens.push(item);
      },
    
      pop : function () {
       if(this.isEmpty()) {
         throw new Error("Pilha está vazia!");
       }
       return itens.pop();
      },
    
      peek : function() {
       return itens[itens.length - 1];
      },
    
      size : function() {
       return itens.length;
      },
    
      isEmpty : function() {
       return itens.length == 0;
      } 
   }; 
  }