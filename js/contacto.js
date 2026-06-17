// Los mensajes de error y éxito deben mostrarse directamente en el DOM
document.addEventListener("DOMContentLoaded", function () {

    // Validacion de campo segun el 
    // requerimiento de usar el evento input o blur
    let nombreInput = document.getElementById("nombre");
    let correoInput = document.getElementById("correo");
    let telefonoInput = document.getElementById("telefono");
    let asuntoInput = document.getElementById("asunto");
    let mensajeInput = document.getElementById("mensaje");

    let btnEnviar = document.getElementById("btnEnviar");

    //Cada campo debe mostrar su propio mensaje de error debajo del 
    // input cuando no sea válido
    let errorNombre = document.getElementById("errorNombre");
    let errorCorreo = document.getElementById("errorCorreo");
    let errorTelefono = document.getElementById("errorTelefono");
    let errorAsunto = document.getElementById("errorAsunto");
    let errorMensaje = document.getElementById("errorMensaje");

    let mensajeExito = document.getElementById("mensajeExito");

    
    //Regex segun requerimietno Correo electrónico: 
    // formato válido usando expresión regular (Regex) 
    //y para requisito Nombre completo: mínimo 5 caracteres, 
    // solo letras y espacios y Teléfono: solo números, 
    // mínimo 8 dígitos por si no los lee bien.
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    let regexTelefono = /^[0-9]+$/;

    function validarFormulario() {

        let nombre = nombreInput.value;
        let correo = correoInput.value;
        let telefono = telefonoInput.value;
        let asunto = asuntoInput.value;
        let mensaje = mensajeInput.value;

        // // Validacion de campo de nombre segun segun el 
        // requerimiento de usar el evento input o blur
        if (nombre.length < 5) {
            nombreInput.style.borderColor = "red";
            errorNombre.innerText = "Minimo 5 caracteres";
            errorNombre.style.color = "red";
        }
    //Regex segun requerimietno Correo electrónico: 
    // formato válido usando expresión regular (Regex) 
    //y para requisito Nombre completo: mínimo 5 caracteres, 
    // solo letras y espacios y Teléfono: solo números, 
    // mínimo 8 dígitos por si no los lee bien.
        else if (!regexNombre.test(nombre)) {
            nombreInput.style.borderColor = "red";
            errorNombre.innerText = "Solo letras y espacios";
            errorNombre.style.color = "red";
        }
        else {
            nombreInput.style.borderColor = "black";
            errorNombre.innerText = "";
        }

        // // Validacion de campo de correo segun segun el 
        // requerimiento de usar el evento input o blur
        if (correo == "") {
            correoInput.style.borderColor = "red";
            errorCorreo.innerText = "Campo requerido";
            errorCorreo.style.color = "red";
        }
    //Regex segun requerimietno Correo electrónico: 
    // formato válido usando expresión regular (Regex) 
    //y para requisito Nombre completo: mínimo 5 caracteres, 
    // solo letras y espacios y Teléfono: solo números, 
    // mínimo 8 dígitos por si no los lee bien.
        else if (!regexCorreo.test(correo)) {
            correoInput.style.borderColor = "red";
            errorCorreo.innerText = "Correo invalido";
            errorCorreo.style.color = "red";
        }
        else {
            correoInput.style.borderColor = "black";
            errorCorreo.innerText = "";
        }

        
        // // Validacion de campo de telefono segun segun el 
        // requerimiento de usar el evento input o blur
        if (telefono.length < 8) {
            telefonoInput.style.borderColor = "red";
            errorTelefono.innerText = "Minimo 8 digitos";
            errorTelefono.style.color = "red";
        }
    //Regex segun requerimietno Correo electrónico: 
    // formato válido usando expresión regular (Regex) 
    //y para requisito Nombre completo: mínimo 5 caracteres, 
    // solo letras y espacios y Teléfono: solo números, 
    // mínimo 8 dígitos por si no los lee bien.
        else if (!regexTelefono.test(telefono)) {
            telefonoInput.style.borderColor = "red";
            errorTelefono.innerText = "Solo numeros";
            errorTelefono.style.color = "red";
        }
        else {
            telefonoInput.style.borderColor = "black";
            errorTelefono.innerText = "";
        }

        //Validacion de campo de aunto segun segun el 
        // requerimiento de usar el evento input o blur
        if (asunto.length < 3) {
            asuntoInput.style.borderColor = "red";
            errorAsunto.innerText = "Minimo 3 caracteres";
            errorAsunto.style.color = "red";
        }
        else {
            asuntoInput.style.borderColor = "black";
            errorAsunto.innerText = "";
        }

       
        // // Validacion de campo de mensaje segun segun el 
        // requerimiento de usar el evento input o blur
        if (mensaje.length < 20) {
            mensajeInput.style.borderColor = "red";
            errorMensaje.innerText = "Minimo 20 caracteres";
            errorMensaje.style.color = "red";
        }
        else {
            mensajeInput.style.borderColor = "black";
            errorMensaje.innerText = "";
        }

        
        if (
            nombre.length >= 5 &&
            regexNombre.test(nombre) &&
            correo != "" &&
            regexCorreo.test(correo) &&
            telefono.length >= 8 &&
            regexTelefono.test(telefono) &&
            asunto.length >= 3 &&
            mensaje.length >= 20
        ) {
             // diabled para poder completar el requerimiento •	El botón de envío debe estar 
        // deshabilitado hasta que todos los campos sean válidos
            btnEnviar.disabled = false;
        }
        else {
             // diabled para poder completar el requerimiento •	El botón de envío debe estar 
        // deshabilitado hasta que todos los campos sean válidos
            btnEnviar.disabled = true;
        }
    }

    // Se encarga de validar el formulario hecho
    nombreInput.addEventListener("input", validarFormulario);
    correoInput.addEventListener("input", validarFormulario);
    telefonoInput.addEventListener("input", validarFormulario);
    asuntoInput.addEventListener("input", validarFormulario);
    mensajeInput.addEventListener("input", validarFormulario);

    // Se encarga de enviar el formulario hecho
    btnEnviar.addEventListener("click", function () {

    //Cada campo debe mostrar su propio mensaje de error debajo del 
    // input cuando no sea válido
        mensajeExito.innerText = "¡Formulario enviado con exito!";
        mensajeExito.style.color = "green";

        nombreInput.value = "";
        correoInput.value = "";
        telefonoInput.value = "";
        asuntoInput.value = "";
        mensajeInput.value = "";

        nombreInput.style.borderColor = "black";
        correoInput.style.borderColor = "black";
        telefonoInput.style.borderColor = "black";
        asuntoInput.style.borderColor = "black";
        mensajeInput.style.borderColor = "black";

    //Cada campo debe mostrar su propio mensaje de error debajo del 
    // input cuando no sea válido
        errorNombre.innerText = "";
        errorCorreo.innerText = "";
        errorTelefono.innerText = "";
        errorAsunto.innerText = "";
        errorMensaje.innerText = "";

        btnEnviar.disabled = true;

        setTimeout(function () {
            mensajeExito.innerText = "";
        }, 2000);

    });

});