const cliente =  {
    nome:"Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555550", "1144444440"],
}

cliente.enderecos = [
{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
},
]

cliente.enderecos.push({
    rua: "Joseph ladder",
    numero: 404,
    apartamento: false,
})

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaApenasApartamentos)
// console.log(cliente.enderecos)