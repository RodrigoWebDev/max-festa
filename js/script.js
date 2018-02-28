//Pega os items de categoria do menu NAV
let itens = document.querySelectorAll(".header-menu ul div");

//Adiciona um evento de clique em cada um dos itens que redireciona pra pagina produto.html
for (let i = 0; i < itens.length; i++){
    itens[i].onclick =  function(){
        window.location = "../produto.html";
    }
}