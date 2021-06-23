//Esta es la función que nos muestra el video.
function reproducirVideo() {                                       
    const captarBoton = document.getElementById("contenedorVideo");
    captarBoton.style.display = "flex";

}

//Esta es la función que detiene y oculta el video.
function cerrarVideo() {
    const captarBotonCerrar = document.getElementById("contenedorVideo");
    const tomarVideo = document.getElementById("video");
    tomarVideo.pause();
    captarBotonCerrar.style.display = "none";
}



