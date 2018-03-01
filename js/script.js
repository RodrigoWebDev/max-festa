//Pega os items de categoria do menu NAV
let itens = document.querySelectorAll(".header-menu ul div");

//Adiciona um evento de clique em cada um dos itens que redireciona pra pagina produto.html
for (let i = 0; i < itens.length; i++) {
    itens[i].onclick = function () {
        window.location = "../produto.html";
    }
}

//Pega as div do accordion
let accordion = document.getElementsByClassName("accordion");

//Percorre todos os elementos dessa Nodelist e deixa como display os quatro primeiros, como no PSD
for (let i = 0; i <= 3; i++) {
    accordion[i].nextElementSibling.classList.add("display");
}
//Percorre todos os elementos dessa Nodelist e adiciona um evento click que faz com que a ul respectiva apareça ou desapareça
for (let i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function () {
        let ul = this.nextElementSibling;
        ul.classList.toggle("display");
    }
}

//Pega as setas da area de parceiros
let arrow = document.getElementsByClassName("arrow");
//Pega as divs
let div = document.getElementsByClassName("partners-div");
//Posição(DIV) atual
let index = 0;

//limpa os campos das divs e deixa so a primeira
for (i = 0; i < div.length; i++) {
    div[i].style.display = "none";
}

div[0].style.display = "flex";

//Adiciona um evento em ambas para mudar de div
arrow[0].onclick = function () {
    index -= 1;

    if (index < 0) {
        index = 0;
    }
    console.log(index);


    for (i = 0; i < div.length; i++) {
        div[i].style.display = "none";
    }
    div[index].style.display = "flex";

}

arrow[1].onclick = function () {
    let div = document.getElementsByClassName("partners-div");
    index += 1;
    console.log("Index : " + index);
    console.log("Quantidade de DIVS :" + div.length);
    
    if (index > div.length - 1) {
        index = div.length - 1;
    }
    



    for (i = 0; i < div.length; i++) {
        div[i].style.display = "none";
    }
    div[index].style.display = "flex";


}

//Pega o container das setas da area das cores do produto
let innerProducts = document.getElementsByClassName("inner-products"); 
console.log(innerProducts.children[0]);

/*
//Pega as setas da area de parceiros
let arrow = document.getElementsByClassName("arrow");
//Pega as divs
let div = document.getElementsByClassName("partners-div");
//Posição(DIV) atual
let index = 0;

//limpa os campos das divs e deixa so a primeira
for (i = 0; i < div.length; i++) {
    div[i].style.display = "none";
}

div[0].style.display = "flex";

//Adiciona um evento em ambas para mudar de div
arrow[0].onclick = function () {
    index -= 1;

    if (index < 0) {
        index = 0;
    }
    console.log(index);


    for (i = 0; i < div.length; i++) {
        div[i].style.display = "none";
    }
    div[index].style.display = "flex";

}

arrow[1].onclick = function () {
    let div = document.getElementsByClassName("partners-div");
    index += 1;
    console.log("Index : " + index);
    console.log("Quantidade de DIVS :" + div.length);
    
    if (index > div.length - 1) {
        index = div.length - 1;
    }
    



    for (i = 0; i < div.length; i++) {
        div[i].style.display = "none";
    }
    div[index].style.display = "flex";


}
*/