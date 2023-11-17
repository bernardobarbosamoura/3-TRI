function tocaSom (idElementoAudio){
      const elemento = document.querySelector(idElementoAudio);   
      if(elemento === null) {
        alert('Elemento não encontrado');
      }
      if (elemento != null && elemento.localName === 'audio'){
          elemento.play();
      }else {
         alert('Elemento não encontrado');

}}
 const listaDeTeclas = document.querySelectorAll('.tecla');
 //Estrutura de repetição - Enquanto 
 //para que as teclas não sejam repetidas de maneira infinita, criamos o for, com o valor de início 0, e valor final chamado de contador < listaDeTeclas.lenght, para que a repetição seja exatamente do tamanho da nossa lista, que é de 9 teclas
 for(let contador =0;contador < listaDeTeclas.length;contador++){
    const tecla =listaDeTeclas[contador];
    //classList armazena todas as informações do elemento pesquisado
    const instrumento = tecla.classList[1];
    // o idAudio é responsável por identificar o som do botão pesquisado 
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);
    //onclick significa "ao clicar na tecla" a função toca som Será executada no ID daquele áudio será buscado e reproduzir

    tecla.onclick = function(){
       tocaSom(idAudio);
    };
    //onkeydown significa "quando a tecla estiver pressionada", nesse caso uma função será executada, e qual é essa função? é a estilização de mudança de cor do botão quando as tecla enter e space forem apertadas.
    tecla.onkeydown = function(evento) {
       if (evento.code ==='Enter'  || evento.code === 'Space'){
       tecla.classList.add('ativa');
    }
};
//onkeyup significa "quando a tecla estiver erguida, não pressionada nesse caso a função será removida
    tecla.onkeyup = function() {
       tecla.classList.remove('ativa');
    };     
    console.log(instrumento);
console.log(contador);
}