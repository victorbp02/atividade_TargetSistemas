function isFibonacci(num) {
    let a = 0, b = 1, temp;
  
    // Gerando a sequência de Fibonacci até que o valor seja maior ou igual ao número informado
    while (b < num) {
      temp = a + b;
      a = b;
      b = temp;
    }
  
    // Verificando se o número informado pertence à sequência
    if (b === num || num === 0) {
      return `${num} pertence à sequência de Fibonacci.`;
    } else {
      return `${num} não pertence à sequência de Fibonacci.`;
    }
  }
  
  // Exemplo de uso
  const numero = 21;  // Substitua pelo número que deseja verificar
  console.log(isFibonacci(numero));
  