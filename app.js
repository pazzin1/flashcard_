function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartão = document.createElement('article')
    cartão.className = 'cartão'


    cartão.innerHTML = `
    <div class="cartao__conteudo">

    <h3>${Colégio}</h3>
    <div class="cartao__conteudo__pergunta">
       <p>${Como é o nome do colégio?}</p>
    </div>
    <div class="cartao__conteudo__resposta">
       <p>${O nome é Colégio Rural Estadual de Pinhalzinho.}</p> 
    </div>
  </div>
    
 `

 let respostaEstaVisivel = false
 
 function viraCartao(){
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
 }
 cartao.addEventListener('click', viraCartao)
 
 container.appendChild(cartão)
    }