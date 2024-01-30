var container = document.querySelector(".menu-principal");
var btnFechar = document.querySelector(".close-button");
var btnAbrir = document.querySelector("#abrir");

btnFechar.addEventListener("click", function(){
    if(container.style.display === "block"){
        container.style.display = "none";
    }else(container.style.display = "none")
})
btnAbrir.addEventListener("click", function(){
    if(container.style.display === "none"){
        container.style.display = "block";
    }else(container.style.display = "block")
})