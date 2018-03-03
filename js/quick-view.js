//Mostra o quickview painel ao clicar na imagem do produto
let prodImg =  document.querySelectorAll(".product a img");
let quickView = document.getElementsByClassName("overlay")[0];
let close = document.querySelectorAll(".quick-view .close");

close[0].onclick = function(){
    
    quickView.style.display = "none";
}

for (let i = 0; i < prodImg.length; i++) {
    prodImg[i].onclick = function(){
        quickView.style.display = "block";
    }
}

//Mostra o botao "espiar" em cima da imagem
let quickProd = document.querySelectorAll(".product-quick-view img:nth-child(1)")[0];
let spy = document.querySelectorAll(".product-quick-view img:nth-child(2)")[0];


quickProd.onmouseover = function(){
    spy.style.display = "block";
}

quickProd.onmouseout = function(){
    spy.style.display = "none";
}


