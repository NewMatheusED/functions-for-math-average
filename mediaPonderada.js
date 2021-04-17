let valores = [];
let peso = [];
let numerador = 0;
let denominador = 0;
let mediaFinal = 0
let n = prompt('Quantos valores deseja calcular: ');

for(var i = 0; i < n; i++) {
    valores.push(parseInt(prompt(`Digite o valor ${i + 1}: `)));
    peso.push(parseInt(prompt(`Digite o peso do valor ${i + 1}: `)));
    numerador += valores[i] * peso[i];
    denominador += peso[i]
}

mediaFinal = numerador / denominador;
console.log(`A média é ${mediaFinal}`)