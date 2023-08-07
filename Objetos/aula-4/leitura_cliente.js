const dados = require("./cliente.json");

console.log(dados)
console.log(typeof dados)

//Método para mostrar todo o objeto em JSON em formato de string
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);

//Método para converter a string em objeto novamente
const objetoCliente = JSON.parse(clienteEmString)
console.log(objetoCliente)
console.log(typeof objetoCliente)