// Variable that tells us if the user wants to encrypt or decrypt his text.
let encrypt = 1;

// Function to prevent the page from reloading when a button is pressed:

var buttons = Array.from(document.querySelectorAll("#button"));
buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
    });
});

// Function to copy the text content when the button is clicked:
function copyText(btn) {
    // Find the button container
    let container = btn.closest(".flex-col");

    
    let textArea = container.querySelector("textarea");

    // Searches for the text area inside the container
    if (textArea) {
        // Selects text within the text area
        textArea.select();
        textArea.setSelectionRange(0, 99999); // Para dispositivos móviles
        // Copy text to clipboard
        document.execCommand("copy");

        // Deselects the text
        textArea.setSelectionRange(0, 0);

        var toast = document.getElementById("toast-success");
        toast.style.display='flex';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }
    
}


// Function that encrypts the text.

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

// Function that decrypts the text.
function decryptText(){
    let content = document.getElementById("input-message").value;
    content = content.replace(/ai/g, 'a');
    content = content.replace(/enter/g, 'e');
    content = content.replace(/imes/g, 'i');
    content = content.replace(/ober/g, 'o');
    content = content.replace(/ufat/g, 'u');
    return content;
}

//Function that controls the text displayed on the screen depending 
//on whether the user wants to encrypt or decrypt.
function toggleController(){
    let toggleEncrypt = document.getElementById("encryptToggle");

    toggleEncrypt.addEventListener("change", function() {
        if (toggleEncrypt.checked) {
            document.getElementById("input-label").textContent = "Ingresa el texto que quieres Encriptar";
            document.getElementById("outputMessage").placeholder = "Aquí estará tu texto encriptado";
            document.getElementsByClassName("actionButton")[0].textContent="Encriptar Texto";
            encrypt = 1;

        } 

    }); 
    
    let toggleDecrypt = document.getElementById("decryptToggle");
    toggleDecrypt.addEventListener("change",function(){
        document.getElementById("input-label").textContent = "Ingresa el texto que quieres desencriptar";
        document.getElementById("outputMessage").placeholder = "Aquí estará tu texto desencriptado";
        document.getElementsByClassName("actionButton")[0].textContent="Desencriptar Texto";
        encrypt = 0;
    })
    
}

// Función que controla lo que el usuario quiere hacer, si desencriptar o encriptar el texto.
function actionController(){
if(encrypt){
    document.getElementById("outputMessage").value = encryptText();
    document.getElementsByClassName("actionButton").value="Decodificar Texto";
}
else{
    document.getElementById("outputMessage").value = decryptText();
}
}

toggleController();