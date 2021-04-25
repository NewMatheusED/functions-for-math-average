var i;
var media = 0;
var valores = [];
var variancia = []
var part1 = 0;
var part2 = 0;
var n =  prompt("Com quantos valores deseja fazer a média:");

for(i = 0; i < n; i++) {
	valores.push(parseInt(prompt(`Digite o valor ${i + 1}:`)))
    media += valores[i] 
}

media /= n;
console.log(`A média dos seus ${n} valores é de ${media}`)

for(i = 0; i < n; i++) {
    variancia.push(valores[i] - media)
    part1 += variancia[i]**2
    console.log(valores, media, variancia)

    console.log(part1)
}

part2 = part1 / n

console.log(`A variancia é de ${part2} e seu desvio padrão é de ${Math.sqrt(part2).toFixed(2)} (√${part2})`)