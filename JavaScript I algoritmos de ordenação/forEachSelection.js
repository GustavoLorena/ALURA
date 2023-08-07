// outro método de selectionSort através do forEach
const livros = require('./listaLivros.json');
const menorValor = require('./menorValor');

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)

    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];

    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual
})

console.log(livros)