const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador")
contador[0].textContent="Olá"
const tempoObjetivo1= new Date (2024,6,12,10,00)
const tempoObjetivo2= new Date (2024,7,13,11,00)
const tempoObjetivo3= new Date (2024,8,14,12,00)
const tempoObjetivo4= new Date (2024,9,15,13,00)

for(let i = 0 ; i < botoes.length; i++){
    botoes[i].onclick = function(){
     for (let j = 0; j< botoes.length ; j++){
         botoes[j].classList.remove("ativo")
         conteudo[j].classList.remove("ativo")
     }   
     botoes[i].classList.add("ativo")
     conteudo[i].classList.add("ativo")
    }
}
