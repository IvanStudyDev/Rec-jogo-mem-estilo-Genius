let order = [];
let clickedOrder = [];
let score = 0;

/*
    0 = VERDE
    1 = VERMELHO
    2 = AMARELO
    3 = AZUL
*/

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

/*
    CRIAR ORDEM ALEATORIA DE CORES
*/
let shuffleOrder = () => {
    let colorOrder =  Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

/*
    ACENDER A PROXIMA COR
*/
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

/*
    CHECAR SE OS BOTÕES CLICADOS SÃO OS MESMOS DA ORDEM GERADA NO JOGO
*/
let CheckOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Portuação: ${score}\nVocê acertou!\nIniciando próximo nível!`);
        nextLevel();
    }
}

/*
    FUNÇÃO PARA O CLIQUE DO USUÁRIO
*/
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        CheckOrder();
    }, 250);
}

/*
    FUNÇÃO QUE RETORNA A COR
*/ 
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    }else if(color == 1) {
        return red;
    }else if(color == 2) {
        return yellow;
    }else if(color == 3) {
        return blue;
    }
}

/*
    FUNÇÃO PARA PRÓXIMO NÍVEL DO JOGO
*/
let nextLevel = () => {
    score++;
    shuffleOrder();
}

/* 
    FUNÇÃO PARA GAME OVER
*/
let gameOver = () => {
    alert(`Portuação: ${score}!\nVocê perdeu o jogo!\nClique em Ok para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

/* 
    FUNÇÃO DE INICIO DO JOGO
*/
let playGame = () => {
    alert('Bem vindo ao Genius!\nIniciando novo jogo');
    score = 0;

    nextLevel();
}

/* 
    EVENTOS DE CLIQUE PARA AS CORES
*/
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

/* 
    INÍCIO DO JOGO
*/
playGame();