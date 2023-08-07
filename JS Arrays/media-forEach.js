const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota, indice){
   somaDasNotas += nota;
  //indice não é utilizado no exemplo, serve apenas para mostrar mais um parâmetro
   console.log(indice);
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);