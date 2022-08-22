let pontoUsuario = 0
let pontoMaquina = 0


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
        console.log('entrou no if');
        pontoUsuario++
    }else {
        document.getElementById(pResult).innerHTML = 'Você perdeu!'
        console.log('entrou no else');
        pontoMaquina++
    }

    if (pontoUsuario ==2) {
        document.querySelector('.ponto-usuario').textContent = pontoUsuario

    }else if (pontoMaquina == 2) {
        document.querySelector('.ponto-maquina').textContent = pontoMaquina
    }

}
