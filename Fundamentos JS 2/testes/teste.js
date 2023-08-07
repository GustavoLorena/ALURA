// Não tem condição de parada, o que torna o código com um processo infinito

function dorme(milissegundos){
    return new Promise(resolve => setTimeout(resolve, milissegundos));
}
async function incrementaNumero(numero){
    console.log(numero)
    await dorme(2000)
    return incrementaNumero(numero + 1)
  }
  
  incrementaNumero(1)