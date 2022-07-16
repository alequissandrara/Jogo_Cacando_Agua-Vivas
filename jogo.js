
/*Definindo a 
dimenção do palco */
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaAguaVivaTempo = 1500

/*Aplicando nível de dificuldade */
var dificuldades = window.location.search
dificuldades = dificuldades.replace('?','')

if(dificuldades === 'normal'){
    //1500
    criaAguaVivaTempo = 1500
}else if(dificuldades === 'dificil'){
    //1000
    criaAguaVivaTempo = 1000
}else if(dificuldades === 'chucknorris'){
    //750
    criaAguaVivaTempo = 750
}

function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth
     console.log (largura,altura)
}

ajustaTamanhoPalcoJogo()
 
/* Cronometro do tempo  */
var cronometro = setInterval(function(){
    tempo-=1
    if(tempo < 0 ){
        clearInterval(cronometro)
        clearInterval(criarAguaViva)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
}
}, 1000) 


/*Posição randômica*/
function posicaoRandomica(){

    /*Removendo água-viva anterior (caso exista) */
   if(document.getElementById('aguaViva')){ 
        document.getElementById('aguaViva').remove()
   
    /* Controle de pontos de vida */
    if (vidas > 3){
        
        window.location.href = 'fim_de_jogo.html'
    }else{
        document.getElementById('v' + vidas ).src = "imagens/coracao_vazio.png"
        vidas++
    

    }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

/*criando elemento de 
    forma programática html */
    var aguaViva1 = document.createElement('img')
  	aguaViva1.src = 'imagens/aguaViva1.png'
  	aguaViva1.className = tamanhoAleatorio()
  	aguaViva1.style.left = posicaoX + 'px'
  	aguaViva1.style.top = posicaoY + 'px'
  	aguaViva1.style.position = 'absolute'
    aguaViva1.id = 'aguaViva'
    aguaViva1.onclick = function (){
        this.remove()
    }

    document.body.appendChild(aguaViva1)

    console.log(tamanhoAleatorio())
}
/* Tamanho randômicos */
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'aguaViva1'
        case 1:
            return 'aguaViva2'
        case 2:
            return 'aguaViva3'       


    }

}

