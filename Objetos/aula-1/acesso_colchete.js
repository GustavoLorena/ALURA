const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: 11122233345,
    email: "andre@dominio.com"
};

 console.log(`O nome de cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

 const chaves = ["nome", "idade", "cpf", "email", "altura"];

 chaves.forEach((chave) => {
    console.log(`A chave ${chave} e tem valor ${cliente[chave]}`)
 })