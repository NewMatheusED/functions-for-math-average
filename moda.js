var i;
var valores = [];
var duplicates = [];
var n = prompt("Com quantos valores deseja fazer a média:");

for(i = 0; i < n; i++) {
	valores.push(parseInt(prompt(`Digite o valor ${i + 1}:`)));
}

function OrdenarNumerada(a,b) {

	if (a == b) return 0; 
	if (a < b) return -1; 
	if (a > b) return 1;
}

valores.sort(OrdenarNumerada)
console.log(valores)

for(i = 0; i < valores.length; i++) {
	if(valores[i + 1] === valores[i]) {
		duplicates.push(valores[i])
	}
}

console.log(`Os valores que se repetem são ${duplicates}`)