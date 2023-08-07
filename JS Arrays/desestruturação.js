const alunos = ["Gustavo", "Dayane", "Eduarda"];
const medias = [8, 9, 10];

const listaAlunosEMedias = [alunos, medias];

function exibeNomeEMedia(aluno) {
    if (listaAlunosEMedias[0].includes(aluno)) {
        // const alunos =  listaAlunosEMedias[0];
        // const medias = listaAlunosEMedias[1];

        const [alunos, medias] = listaAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a media ${mediaDoAluno}!`);

    } else {
        console.log("Aluno  nao  cadastrado");
    }
}
exibeNomeEMedia("Gustavo");