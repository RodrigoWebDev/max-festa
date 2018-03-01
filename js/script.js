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
        index = div.length - 1;
    }


    for (i = 0; i < div.length; i++) {
        div[i].style.display = "none";
    }
    div[index].style.display = "flex";

}

arrow[1].onclick = function () {
    index += 1;
    
    if (index > div.length - 1) {
        index = 0;
    }
    



    for (i = 0; i < div.length; i++) {
        div[i].style.display = "none";
    }
    div[index].style.display = "flex";


}

//Essa seção da interatividade nas abas dos produto
let releases1Arrow = document.querySelectorAll(".releases1 .arrow");
let products1 = document.getElementsByClassName("products1");
let productIndex = 0;

for(i = 0; i < products1.length; i++){
    products1[i].style.display = "none";
}

products1[0].style.display = "flex";

//Adiciona um evento clique em ambas para mudar de div
releases1Arrow[0].onclick = function(){
     productIndex -= 1;

    if (productIndex < 0) {
        productIndex = products1.length - 1;
    }

    for (i = 0; i < products1.length; i++) {
        products1[i].style.display = "none";
    }
    products1[productIndex].style.display = "flex";

}

releases1Arrow[1].onclick = function(){
    console.log(products1[6]);
    productIndex += 1;
    if (productIndex > products1.length - 1) {
        productIndex = 0;
    }
    console.log(productIndex);
    for (i = 0; i < products1.length; i++) {
        products1[i].style.display = "none";
    }
    products1[productIndex].style.display = "flex";

}

let releases2Arrow = document.querySelectorAll(".releases2 .arrow");
let products2 = document.getElementsByClassName("products2");
let product2Index = 0;
console.log(releases2Arrow);

for(i = 0; i < products2.length; i++){
    products2[i].style.display = "none";
}

products2[0].style.display = "flex";

releases2Arrow[0].onclick = function(){
     product2Index -= 1;

    if (product2Index < 0) {
        product2Index = products2.length - 1;
    }

    for (i = 0; i < products2.length; i++) {
        products2[i].style.display = "none";
    }
    products2[product2Index].style.display = "flex";
    console.log("click");
}

releases2Arrow[1].onclick = function(){
    console.log("clicou");
    product2Index += 1;
    if (product2Index > products2.length - 1) {
        product2Index = 0;
    }
    console.log("checou");

    for (i = 0; i < products2.length; i++) {
        products2[i].style.display = "none";
    }
    console.log("limpou");
    products2[product2Index].style.display = "flex";
    console.log("mostrou");

}