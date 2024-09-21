const faturamentoMensal = require('./faturamento.json'); // Importar o arquivo JSON com os dados de faturamento

function calcularFaturamento(faturamentoMensal) {
  let menorValor = Infinity;
  let maiorValor = -Infinity;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;

  // Filtrar os dias que têm faturamento (ignorar dias com faturamento 0)
  const diasValidos = faturamentoMensal.filter(dia => dia.faturamento > 0);

  // Calcular o menor, maior valor e a soma dos faturamentos
  diasValidos.forEach(dia => {
    if (dia.faturamento < menorValor) {
      menorValor = dia.faturamento;
    }
    if (dia.faturamento > maiorValor) {
      maiorValor = dia.faturamento;
    }
    somaFaturamento += dia.faturamento;
    diasComFaturamento++;
  });

  // Calcular a média mensal
  const mediaMensal = somaFaturamento / diasComFaturamento;

  // Contar o número de dias com faturamento superior à média
  const diasAcimaDaMedia = diasValidos.filter(dia => dia.faturamento > mediaMensal).length;

  return {
    menorValor,
    maiorValor,
    mediaMensal,
    diasAcimaDaMedia
  };
}

// Executar o cálculo
const resultado = calcularFaturamento(faturamentoMensal);

console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
