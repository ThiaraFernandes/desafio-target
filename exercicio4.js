// Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

const faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;


const percentualSP = (faturamentoSP / faturamentoTotal) * 100;
const percentualRJ = (faturamentoRJ / faturamentoTotal) * 100;
const percentualMG = (faturamentoMG / faturamentoTotal) * 100;
const percentualES = (faturamentoES / faturamentoTotal) * 100;
const percentualOutros = (faturamentoOutros / faturamentoTotal) * 100;

console.log("SP:", percentualSP.toFixed(2) + '%');
console.log("RJ:", percentualRJ.toFixed(2) + '%');
console.log("MG:", percentualMG.toFixed(2) + '%');
console.log("ES:", percentualES.toFixed(2) + '%');
console.log("Outros", percentualOutros.toFixed(2) + '%');

