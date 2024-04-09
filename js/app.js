let contadorAlugado = 1;
let jogosAlugados = [contadorAlugado]
let contadorDevolucao = 0;
let jogosDevolvidos = [];

function alterarStatus(qualJogo) {

    let clicado = document.getElementById(`game-${qualJogo}`);
    let imagem = clicado.querySelector('.dashboard__item__img');
    let botao = clicado.querySelector('.dashboard__item__button');

    if (botao.classList.contains('dashboard__item__button--return')) {
        let confirmar = prompt('Deseja realmente Devolver esse jogo? (s/n)');

        if (confirmar == 'n') {
            return;
        } else {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.classList.add('dashboard__item__img');
            botao.innerHTML = '<a>Alugar</a>';
            devolucao();
        }     

    } else {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__img')
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = '<a> Devolver</a>';
        Aluguel()
    }
    
}


function Aluguel() {
    jogosAlugados.pop(contadorAlugado);
    contadorAlugado++;
    jogosAlugados.push(contadorAlugado);
    console.log(`Alugados: ${jogosAlugados}`);
}

function devolucao() {
    jogosDevolvidos.pop(contadorDevolucao);
    contadorDevolucao++;    
    jogosDevolvidos.push(contadorDevolucao);
    console.log(`Devolvidos: ${jogosDevolvidos}`);
}
