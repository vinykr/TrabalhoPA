var conducao = parseFloat(prompt("Digite o valor da condução: "));
//quantidade de conduções por dia
var quantidade = parseFloat(prompt("Digite a quantidade de condução usada em um unico dia:: "));
var dias = parseFloat(prompt("Digite a quantos dias: "));

var resultado = (conducao * quantidade) *dias

console.log ("O gasto mensal é: ", resultado)