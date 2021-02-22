let container = document.querySelector(".container");

container.addEventListener("click", (evento)=> {
    if(evento.target.classList.contains("estrella")){
        console.log("no pasa nada");
    }else{
        //window.location.reload();
        document.getElementById("puntos-5").checked = false;
        document.getElementById("puntos-4").checked = false;
        document.getElementById("puntos-3").checked = false;
        document.getElementById("puntos-2").checked = false;
        document.getElementById("puntos-1").checked = false;
    }
});

