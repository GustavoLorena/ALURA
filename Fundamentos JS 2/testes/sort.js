let numeros = [1, 2, 3, 101, 20, 3, 30, 31, 40];
numeros.sort();
console.log(numeros);

// Saída
// [1, 101, 2, 20, 3, 3, 30, 31, 40]
//a saída mostra a classificação dos números um pouco diferente do esperado. Isso ocorre pois o método trata os elementos do array como strings e os coloca em ordem sequencial de acordo com sua posição na tabela ASCII, onde 20 vem antes de 3