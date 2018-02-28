//Pega os items de categoria do menu NAV
let itens = document.querySelectorAll(".header-menu ul div");

//Adiciona um evento de clique em cada um dos itens que redireciona pra pagina produto.html
for (let i = 0; i < itens.length; i++){
    itens[i].onclick =  function(){
        window.location = "../produto.html";
    }
}

//Pega as div do accordion
let accordion = document.getElementsByClassName("accordion");

//Percorre todos os elementos dessa Nodelist e deixa como display os quatro primeiros, como no PSD
for(let i = 0; i <= 3; i++){
    accordion[i].nextElementSibling.classList.add("display");
}
//Percorre todos os elementos dessa Nodelist e adiciona um evento click que faz com que a ul respectiva apareça ou desapareça
for(let i = 0; i < accordion.length; i++){
    accordion[i].onclick = function(){
        let ul = this.nextElementSibling;
        ul.classList.toggle("display");
    }
}

