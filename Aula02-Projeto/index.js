let escolhaUsuario1 = prompt("Escolha 1 para papel, 2 para pedra e 3 para tesoura: ");
let escolhaUsuario2 = prompt("Escolha 1 para papel, 2 para pedra e 3 para tesoura: ");
let escolhaUsuario3 = prompt("Escolha 1 para papel, 2 para pedra e 3 para tesoura: "); 
let escolhaMaquina = escolhaComputador(4, 1);


function escolhaComputador(max, min) {
   
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}



function validaEscolhaUsuario (btnValue) {

     if (escolhaMaquina == 2){
        document.getElementById('escolha-maquina').innerHTML = '<img src="./img/img-rock.png" alt="img"></img>'
    }else if (escolhaMaquina == 1){
        document.getElementById('escolha-maquina').innerHTML ='<img src="./img/img-paper2.png" alt="img"></img>'
    }else{
        document.getElementById('escolha-maquina').innerHTML = '<img src="./img/img-scissors.png" alt="img"></img>'
    }
    
    let pontuacao=() => {
        
        if(btnValue == escolhaMaquina){
            console.log(btnValue);
            return 0
        }else if(btnValue == 1 && escolhaMaquina == 2 || btnValue == 2 && escolhaMaquina == 3 || btnValue == 3 && escolhaMaquina == 1){
            console.log(btnValue);
            return 1
    
        }else {
            console.log(btnValue);
            return 0.0
     }
    }

   

    if(pontuacao() == 1){
        document.getElementsByClassName('p-result').innerHTML = 'Parabéns Voçê Venceu!'
    }else {
        document.getElementsByClassName('p-result').innerHTML = 'Voçê Perdeu!'
    }

}

const primeira = rodadas(escolhaUsuario1)
const segunda = rodadas(escolhaUsuario2)
const terceira = rodadas(escolhaUsuario3)

if ((primeira + segunda + terceira)  >= 2 ) {
    console.log("Você ganhou a porra do jogo")
}else {
    console.log("Você perdeu a porra do jogo")
}

console.log(primeira);
console.log(segunda);
console.log(terceira);  


// --------------------------------Escolha do usuario----------------------------------------

const btnPrimeiro = document.getElementById('bttn')

console.log(btnPrimeiro.value);

