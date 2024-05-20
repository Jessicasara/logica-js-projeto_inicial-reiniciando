alert("Bem vindo ao jogo do número secreto");

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto'

let subtitulo = document.querySelector('h2')
subtitulo.innerHTML = 'Digite o número secreto'

let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 3;

function verificaChute(){

while (tentativas > 0) {
    chute = parseInt(prompt("Digite um número de 1 a 10: "));
    if(chute === numeroSecreto){
        console.log("Você acertou");
        alert(`Parabéns vc acertou! O número secretop é: ${chute}`);
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}` );
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas--;
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        
        alert(`Você ainda tem ${tentativas} ${palavraTentativa}`)
        if(tentativas === 0){
            alert("Suas tentativas acabaram");
        }

    }
}
}