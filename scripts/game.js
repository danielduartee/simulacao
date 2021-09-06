function avatar() {
    location.href = 'file:///C:/Users/danie/Documents/GAME%20the%20GAME/html/game.html';
}
function dead() {
    location.href = "file:///C:/Users/danie/Documents/GAME%20the%20GAME/html/gameover.html";
    alert("Pessima escolha amigo, o aCid não iria te ajudar!!");
}
function cajado() {
    var escolha = '';
    escolha = prompt("Você escolheu o Cajado, mas emcontramos o priemiro desafio, não podemios fazer barulho. \n  Opação 1 vamos correndo \n vamos nadando");
    while (escolha != '1' && escolha != '2') {
        escolha = prompt("Você escolheu o Cajado, mas emcontramos o priemiro desafio, não podemios fazer barulho. \n  Opação 1 vamos correndo \n vamos nadando")
    }
    if (escolha == '1') {
        alert("Olha o zombie, precisamos passar por eles.")
    } else {
        alert("fizemos baraulho demais, esse foi nosso erro!")
        location.href = "file:///C:/Users/danie/Documents/GAME%20the%20GAME/html/gameover.html";
    }
}

function arma() {
    var escolha = '';
    escolha = prompt("Você escolheu o Cajado, mas emcontramos o priemiro desafio, não podemios fazer barulho. \n  Opação 1 vamos correndo \n vamos nadando");
    while (escolha != '1' && escolha != '2') {
        escolha = prompt("Você escolheu o Cajado, mas emcontramos o priemiro desafio, não podemios fazer barulho. \n  Opação 1 vamos correndo \n vamos nadando")
    }
    if (escolha == '1') {
        alert("Olha o zombie, precisamos passar por eles.")
    } else {
      alert("fizemos baraulho demais, esse foi nosso erro!")
        location.href = "file:///C:/Users/danie/Documents/GAME%20the%20GAME/html/gameover.html";
    }
}