//Pega os items de categoria do menu NAV
let itens = document.querySelectorAll(".header-menu ul div");

//Adiciona um evento de clique em cada um dos itens que redireciona pra pagina produto.html
for (let i = 0; i < itens.length; i++) {
    itens[i].onclick = function () {
        window.location = "../produto.html";
    }
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


//Mostra a div d navegação ao passar o mouse por cima de alguns dos itens de categorias
let dropdownNav = document.getElementsByClassName("dropdown-nav")[0];
let menu = document.querySelectorAll("nav ul div");
dropdownNav.style.display = "none";


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

