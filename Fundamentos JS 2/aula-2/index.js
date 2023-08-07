const listaLivros = require('./array2');

function mergeSort(array) {
    if(array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordena(parte1, parte2);

    }

    return array;
}

function ordena(parte1, parte2) {
    let posicaoAtualPart1 = 0;
    let posicaoAtualPart2 = 0;
    const resultado = []

    while(posicaoAtualPart1 < parte1.length && posicaoAtualPart2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualPart1]
        let produtoAtualParte2 = parte2[posicaoAtualPart2]

        if (produtoAtualParte1.preco <produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1)
            posicaoAtualPart1++
        } else{
            resultado.push(produtoAtualParte2)
            posicaoAtualPart2++
        }
    }

    return resultado.concat(posicaoAtualPart1 < parte1.length
        ? parte1.slice(posicaoAtualPart1)
        : parte2.slice(posicaoAtualPart2))
}

console.log(mergeSort(listaLivros))