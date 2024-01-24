let encriptar = 1;

var isActive = document.getElementById("input-message");
if(document.activeElement === isActive){
    isActive.placeholder = "";
}
else {
    isActive.placeholder = "Ingresa el texto aquí:";
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
    let contenedor = btn.closest(".flex-col");

    // Busca el área de texto dentro del contenedor
    let areaDeTexto = contenedor.querySelector("textarea");

    // Verifica si se encontró el área de texto
    if (areaDeTexto) {
        // Selecciona el texto dentro del área de texto
        areaDeTexto.select();
        areaDeTexto.setSelectionRange(0, 99999); // Para dispositivos móviles
        // Copia el texto al portapapeles
        document.execCommand("copy");

        // Deselecciona el texto
        areaDeTexto.setSelectionRange(0, 0);

        //TODO: Add a animated Notification.
        var toast = document.getElementById("toast-success");
        toast.style.display='flex';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }
    
}


// Función para encriptar el texto

function encryptText(){
    let content = document.getElementById("input-message").value;
    console.log(content);
    let message = "";
    for(let i = 0; i<content.length;i++){
        if(content[i]=='a')message+='ai';
        else if(content[i]=='e')message+='enter';
        else if(content[i]=='i')message+='imes';
        else if(content[i]=='o')message+= 'ober';
        else if(content[i]=='u')message+='ufat';
        else message+=content[i];
    }
    //console.log(message);
    return message;
}

function decryptText(){
    let content = document.getElementById("input-message").value;
    content = content.replace(/ai/g, 'a');
    content = content.replace(/enter/g, 'e');
    content = content.replace(/imes/g, 'i');
    content = content.replace(/ober/g, 'o');
    content = content.replace(/ufat/g, 'u');
    return content;
}

//Función que controla el texto que aparece en la pantalla según el usuario quiera encriptar o desencriptar.

function toggleController(){
    let toggleEncrypt = document.getElementById("encryptToggle");

    toggleEncrypt.addEventListener("change", function() {
        if (toggleEncrypt.checked) {
            document.getElementById("input-label").textContent = "Ingresa el texto que quieres Encriptar";
            document.getElementById("outputMessage").placeholder = "Aquí estará tu texto encriptado";
            document.getElementsByClassName("actionButton")[0].textContent="Encriptar Texto";
            encriptar = 1;

        } 

    }); 
    
    let toggleDecrypt = document.getElementById("decryptToggle");
    toggleDecrypt.addEventListener("change",function(){
        document.getElementById("input-label").textContent = "Ingresa el texto que quieres desencriptar";
        document.getElementById("outputMessage").placeholder = "Aquí estará tu texto desencriptado";
        document.getElementsByClassName("actionButton")[0].textContent="Desencriptar Texto";
        encriptar = 0;  // O el valor que desees asignar cuando el toggle está desactivado
    })
    
}

//Función que controla la acción que quiere hacer el usuario, si desencriptar o encriptar.
function actionController(){
if(encriptar){
    document.getElementById("outputMessage").value = encryptText();
    document.getElementsByClassName("actionButton").value="Decodificar Texto";
    //document.getElementById("outputMessage").placeholder = encrypt();

}
else{
    document.getElementById("outputMessage").value = decryptText();
}
}

toggleController();