var endereco = {
    rua : "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP",
}

function imprime(endereco){
    return (`O usuário mora em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, na ${endereco.rua} com nº ${endereco.numero}`) 
}

imprime(endereco)
