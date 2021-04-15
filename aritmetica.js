var i;
var media = 0;
var valores = []
var n = prompt("Com quantos valores deseja fazer a média:");

for(i = 0; i < n; i++) {
	valores.push(parseInt(prompt(`Digite o valor ${i + 1}:`)))
    media += valores[i]
}

media /= n;
console.log(`A média dos seus ${n} valores é de ${media}`)