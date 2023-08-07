const livros = require('./listaLivros.json');
const menorValor = require('./menorValor');
                                        //lenght -1: a ultima posição nao precisa ser verificada pois a medida que a verificação chega no penultimo indice, o array já está ordenado
for (let atual = 0; atual < livros.length - 1; atual ++) {
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];
    console.log('posição atual', atual)
    console.log('livro atual', livros[atual])
    let livroMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor])

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual

}

console.log(livros)