
 //Exercicio 2
 //Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
 
function sequenciaFibonacci(numero) {
    if (numero === 0 || numero === 1) {
      return numero;
    }
    return sequenciaFibonacci(numero - 1) + sequenciaFibonacci(numero - 2);
  }
  
  function verificarFibonacci(numero) {
    let resultado = sequenciaFibonacci(numero);
    if (resultado === numero) {
      console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }
  }
  verificarFibonacci(5); 
