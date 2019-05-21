// Testando o comportamento do codigo pop()

// Função de 2 parametros - Primeiro: Nome da suite de teste | Segundo: Função com código que implementa a suite de testes
describe("Stack", function(){
    // Testes a serem executadose recebe 2 parametros - Primeiro : Nome do teste a ser executado | Segundo: Função de teste
    it("Deve implementar o LIFO (Last in, First Out): a retirada é do elemento que está no topo.", function(){
        var pilha = new Stack();
        pilha.push(1);
        pilha.push(2);
        pilha.push(3);
        pilha.push(5);
        
        // Vericar o resultado
        expect(pilha.pop()).toEqual(5);
    });

    // verificar se a função pop() retira o elemento da pilha.
    it("Chamar o pop() deve remover o elemento do topo da pilha.", function() {
        var pilha = new Stack();
        
        pilha.push(1);
        pilha.push(2);
        pilha.push(3);
        pilha.push(5);
        
        pilha.pop();
        
        expect(pilha.size()).toEqual(3);
    });
}); 