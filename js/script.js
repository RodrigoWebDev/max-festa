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

for (i = 0; i < products1.length; i++) {
    products1[i].style.display = "none";
}

products1[0].style.display = "flex";

//Adiciona um evento clique em ambas para mudar de div
releases1Arrow[0].onclick = function () {
    productIndex -= 1;

    if (productIndex < 0) {
        productIndex = products1.length - 1;
    }

    for (i = 0; i < products1.length; i++) {
        products1[i].style.display = "none";
    }
    products1[productIndex].style.display = "flex";

}

releases1Arrow[1].onclick = function () {
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

for (i = 0; i < products2.length; i++) {
    products2[i].style.display = "none";
}

products2[0].style.display = "flex";

releases2Arrow[0].onclick = function () {
    product2Index -= 1;

    if (product2Index < 0) {
        product2Index = products2.length - 1;
    }

    for (i = 0; i < products2.length; i++) {
        products2[i].style.display = "none";
    }
    products2[product2Index].style.display = "flex";
}

releases2Arrow[1].onclick = function () {
    product2Index += 1;
    if (product2Index > products2.length - 1) {
        product2Index = 0;
    }

    for (i = 0; i < products2.length; i++) {
        products2[i].style.display = "none";
    }
    products2[product2Index].style.display = "flex";

}

//Drop down login e sacola de compras
let user = document.getElementsByClassName("hover")[0];
let login = document.getElementsByClassName("login")[0];
let basket = document.getElementsByClassName("hover")[1];
let shop = document.getElementsByClassName("shop")[0];

user.onmouseover = function () {
    login.style.display = "block";
}
login.onmouseover = function () {
    this.style.display = "block";
}

user.onmouseout = function () {
    login.style.display = "none";
}
login.onmouseout = function () {
    this.style.display = "none";
}

shop.onmouseover = function () {
    this.style.display = "block";
}
basket.onmouseover = function () {
    shop.style.display = "block";
}

shop.onmouseout = function () {
    this.style.display = "none";
}
basket.onmouseout = function () {
    shop.style.display = "none";
}

let dropdownNav = document.getElementsByClassName("dropdown-nav")[0];
let menu = document.querySelectorAll("nav ul div");
dropdownNav.style.display = "none";
console.log(menu);

for (i = 0; i < menu.length; i++) {
    menu[i].onmouseover = function () {
        dropdownNav.style.display = "flex";
    }
    menu[i].onmouseout = function () {
        dropdownNav.style.display = "none";
    }
}

dropdownNav.onmouseover = function () {
    dropdownNav.style.display = "flex";
}

dropdownNav.onmouseout = function () {
    dropdownNav.style.display = "none";
}
