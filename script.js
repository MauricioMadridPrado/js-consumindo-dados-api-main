async function buscaEndereco(cep) {
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json`)

        let consultaCepConvertida = await consultaCep.json()
        if (consultaCepConvertida.erro) {
            throw Error('CEP não existente');
        }

        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');
        let bairro = document.getElementById('bairro')

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;
        bairro.value = consultaCepConvertida.bairro;

        console.log(consultaCepConvertida)

        return consultaCepConvertida
    } catch (erro) {
        mensagemErro.innerHTML= '<p>CEP invalido, tente novamente!</p>'
        console.log(erro)
    }
}

let cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value))

e





// let ceps = ['96501014','99999999']
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas))
