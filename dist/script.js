var nome = "Brenda";

var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 7;
var notaDoTerceiroBimestre = 6;
var notaDoQuartoBimestre = 8;

var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre) /
  4;

var notaFixada = notaFinal.toFixed(1);

var notaNaTela = document.getElementById("notaTela");
var notaConvertida = "Sua nota final é " + notaFixada;
notaNaTela.innerHTML = notaConvertida;

console.log("Bem vindo " + nome);
console.log(notaFixada);

// Revisão
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação