function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numeroSorteado; 

    for (let i = 0; i < quantidade; i++){
        numeroSorteado = obterNumeroAleatorio(de, ate);
        while (numerosSorteados.includes(numeroSorteado)){
            numeroSorteado = obterNumeroAleatorio(de, ate);
        }
        numerosSorteados.push(numeroSorteado);

    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;

    alterarStatusBotao(); 

    


    // let numeroSorteado = obterNumeroAleatorio(de, ate);
   // alert(numerosSorteados);
 
}

function obterNumeroAleatorio(de, ate) {
    return Math.floor(Math.random() * (ate - de + 1)) + de;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    
    if (botao.classList.contains('container__botao-desabilitado')) {

        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
 
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();

}
