const botaoPlayPouse = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoProximo = document.getElementById("proximo")
const botaoAnterior = document.getElementById("anterior")
const nomeCapitulo = document.getElementById('Capitulo')

const num_capitulos = 10;
let play_audio = 0;
let capituloAtual = 1

function tocarFaixa(){
    audioCapitulo.play();
    play_audio = 1;

    botaoPlayPouse.classList.remove('bi-play-circle-fill')
    botaoPlayPouse.classList.add('bi-pause-circle-fill')
}

function pausarFaixa(){
    audioCapitulo.pause()
    play_audio = 0;

    botaoPlayPouse.classList.remove('bi-pause-circle-fill')
    botaoPlayPouse.classList.add('bi-play-circle-fill')
}

function tocar_pausar(){
    if (play_audio===0){
        tocarFaixa();
    }else{
        pausarFaixa();
    } 
}

function trocarNomeCapitulo() {
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual
}

function proximaFaixa(){
    if (capituloAtual===10) {
        capituloAtual = 1;
    }else{
        capituloAtual += 1;
    }

    if (play_audio===1) {
        pausarFaixa();
    } 

    audioCapitulo.src = './src/books/dom-casmurro/' + capituloAtual + '.mp3';
    trocarNomeCapitulo()
}

function anteriorFaixa(){
    if (capituloAtual!=1) {
        capituloAtual -= 1;
    }

    if (play_audio===1) {
        pausarFaixa();
    } 

    audioCapitulo.src = './src/books/dom-casmurro/' + capituloAtual + '.mp3'
    trocarNomeCapitulo()
}

botaoPlayPouse.addEventListener("click", tocar_pausar);
botaoProximo.addEventListener("click", proximaFaixa)
botaoAnterior.addEventListener("click", anteriorFaixa)