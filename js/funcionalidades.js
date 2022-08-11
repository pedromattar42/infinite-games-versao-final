
// CONTAGEM REGRESSIVA - utilizei o código de uma vídeo aula no youtube - link: https://www.youtube.com/watch?v=Jp4jlQ2JHyU
let to = new Date('oct 07 2022 18:25:58') 

    function update(params) {
        let from = new Date()
        let diff = to - from

        if(diff>0){
            let days = setTwoDigi (Math.floor(diff/1000/60/60/24)),
            hours= setTwoDigi (Math.floor(diff/1000/60/60)%24),
            min= setTwoDigi (Math.floor(diff/1000/60)%60),
            sec= setTwoDigi (Math.floor(diff/1000)%60)
            
            document.querySelector('#days').innerText = days
            document.querySelector('#hours').innerText = hours
            document.querySelector('#min').innerText = min
            document.querySelector('#sec').innerText = sec
        }

        else{
            clearInterval(interval)
            document.querySelector('body').classList.add('alert')
        }
    }

    let interval = setInterval(update, 1000)

    function setTwoDigi(argument) {
        
        return argument>9?argument:'0'+argument
    }

   
// CHAVEADOR DE MENU

var menuBotao = document.querySelector('.js-botao') // seleciona a classe relacionada ao botão que irá exibir o menu em dispositivos de telas pequenas

menuBotao.onclick = function(){ // função que irá disparar o bloco de instruções abaixo ao clicar no botão de menu 
    var menu = document.querySelector('.js-menu-itens-header')

    menu.classList.toggle('menu-responsivo-exibir') // uso do toogle para chavear a classe selecionada e tornar o display da classe 'menu-itens-header' de none para block
                                                    // o que irá exibir o menu na lateral esquerda da página com suas respectivas funções
}