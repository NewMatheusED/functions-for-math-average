var i;
var quantidade = 0;
var definition = 0;
var total = 0;
var valores = [];
var conditions;
var n = parseInt(prompt("Quantos valores deseja calcular a mediana:"));

for(i = 0; i < n; i++) {
   valores.push(parseInt(prompt(`Digite o valor ${i + 1}:`)))
}

function OrdenarNumerada(a,b) {

     if (a == b) return 0; 
     if (a < b) return -1; 
     if (a > b) return 1;
}

valores.sort(OrdenarNumerada)
console.log(valores)

if(valores.length % 2 == 0) {
    conditions = true //par
    console.log(`Quantidade par`);
} else {
    conditions = false //impar
    console.log(`Quantidade impar`);
}

switch (conditions) {
    case true:
        quantidade = valores.length
        quantidade = quantidade / 2 //identificar o valor no array
        definition = quantidade - 1 //identificar o valor do array
        total = valores[quantidade] + valores[definition]
        console.log(`${valores[quantidade]} + ${valores[definition]} = ${total}`)
        console.log(`${total} / 2`)
        total = total / 2
        console.log(`Mediana: ${total}`)
        break;
    case false:
        quantidade = valores.length
        quantidade = quantidade / 2 //identificar o valor no array
        definition = quantidade - 0.5 //identificar o valor no array
        total = valores[definition]
        console.log(`Mediana: ${total}`)
        break;
}