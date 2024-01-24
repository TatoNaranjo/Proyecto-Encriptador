var isActive = document.getElementById("input-message");
if(document.activeElement === isActive){
    isActive.placeholder = "";
}
else {
    isActive.placeholder = "Ingresa el texto aquí: ...";
}

// Función para evitar que la página se recargue al momento de presionar un botón:

var buttons = Array.from(document.querySelectorAll("#button"));
buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
    });
});

// Función para copiar el contenido del texto cuando se le de click al botón:


function copyText(btn) {
    // Encuentra el contenedor del botón
    var contenedor = btn.closest(".flex-col");

    // Busca el área de texto dentro del contenedor
    var areaDeTexto = contenedor.querySelector("textarea");

    // Verifica si se encontró el área de texto
    if (areaDeTexto) {
        // Selecciona el texto dentro del área de texto
        areaDeTexto.select();
        areaDeTexto.setSelectionRange(0, 99999); // Para dispositivos móviles
        // Copia el texto al portapapeles
        document.execCommand("copy");

        // Deselecciona el texto
        areaDeTexto.setSelectionRange(0, 0);

        // Puedes agregar un mensaje de confirmación o realizar otras acciones después de copiar
        alert("Texto copiado al portapapeles desde el área de texto " + areaDeTexto.id);
    }
}
