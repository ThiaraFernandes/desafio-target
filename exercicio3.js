// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, 
// que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


const faturamentoMensal = require('./faturamento.json');

const faturamentoMenor = Math.min(...faturamentoMensal);
const faturamentoMaior = Math.max(...faturamentoMensal);

const diasComFaturamento = faturamentoMensal.filter(valor => valor > 0);
const mediaDeFaturamento = diasComFaturamento.reduce((total, valor) => total + valor, 0) / diasComFaturamento.length;
const faturamentoSuperiorAMedia = faturamentoMensal.filter(valor => valor > mediaDeFaturamento).length;

console.log("Menor valor de faturamento ocorrido em 1 dia do mês:", menorFaturamento);
console.log("Maior valor de faturamento ocorrido em 1 dia do mês:", maiorFaturamento);
console.log("Número de dias no mês com faturamento superior à média:", faturamentoSuperiorAMedia);

