let pontoUsuario = 0
let pontoMaquina = 0
let contador = 0

function validaEscolhaUsuario (btnValue, btnMaquina, pResult) {

    let escolhaMaquina = escolhaComputador(4, 1);


    function escolhaComputador(max, min) {
   
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

     if (escolhaMaquina == 2){
        document.getElementById(btnMaquina).innerHTML = '<img src="./img/img-rock.png" alt="img"></img>'
    }else if (escolhaMaquina == 1){
        document.getElementById(btnMaquina).innerHTML ='<img src="./img/img-paper2.png" alt="img"></img>'
    }else{
        document.getElementById(btnMaquina).innerHTML = '<img src="./img/img-scissors.png" alt="img"></img>'
    }
    
    let pontuacao=() => {
        
        if(btnValue == escolhaMaquina){
            console.log(btnValue);
            return 0
        }else if(btnValue == 1 && escolhaMaquina == 2 || btnValue == 2 && escolhaMaquina == 3 || btnValue == 3 && escolhaMaquina == 1){
            console.log(btnValue);
            return 1

     }
    }

    if(pontuacao() == 1){
      
        document.getElementById(pResult).innerHTML = 'Parabéns! Você venceu!'
        document.getElementById('p1').innerHTML += " ganhou"
        console.log('entrou no if');
        pontoUsuario++
        console.log(pontoUsuario);
    }else {
        document.getElementById(pResult).innerHTML = 'Você perdeu!'
        document.getElementById('p1').innerHTML += " perdeu"
        console.log('entrou no else');
    }


}

document.querySelector('.ponto-usuario').textContent = pontoUsuario

/* const primeira = rodadas(escolhaUsuario1)
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
 */
