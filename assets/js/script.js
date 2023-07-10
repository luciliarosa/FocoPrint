//PRELOADER EVENTO
window.addEventListener("load", function(){
    document.querySelector(".preloader").style.display = "none";
});

//MENU PRINCIPAL
document.querySelector(".hamburguer").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("mostrar"); 
});


//BOTAO TOPO
window.onscroll = function(){
    btnTop();
}

function btnTop(){
    if(document.querySelector("body").scrollTop > 30 || document.documentElement.scrollTop > 30){
        document.querySelector(".btn-topo").style.display = "flex";
    }
    else{
        document.querySelector(".btn-topo").style.display = "none";
    }
}

