let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function limpiarlabels() {
    // Selecciona los elementos label por su id y cambia su contenido
    document.getElementById('label1').value = '';
    document.getElementById('label2').value = '';
    document.getElementById('label3').value= '';
    document.getElementById('label4').value= '';
    document.getElementById('label5').value= '';

}
