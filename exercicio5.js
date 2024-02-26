// Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


function inverterCaracteresString(str){
    let caracteresInvertidos = '';

for(let i= str.length -1; i>=0; i--){
    caracteresInvertidos += str[i];
}
return caracteresInvertidos;
}

const stringDigitada = 'Olá, Mundo!';
const stringInvertida = inverterCaracteresString(stringDigitada);
console.log(stringInvertida);