const livros = require("./listaLivros.json");
const troca = require('./troca');

function insertionSort(lista) {

    for (let atual = 0; atual < lista.lenght; atual++) {
        //cada vez que o for rodar, atual vai passar de 0 para 1, depois de 1 para 2 e assim sucessivamente até a lista.lenght, o mesmo para analise
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            //função troca exportada para evitar repetições no código
            troca(lista, analise);
            analise--
        }
    }
    console.log(lista);
}

insertionSort(livros);