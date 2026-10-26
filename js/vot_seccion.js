// Función principal que procesa el voto usando switch
function procesarVoto(nombre, seccion) {
    let mensajeSeccion = "";

    switch (seccion) {
        case "norte":
            mensajeSeccion = "¡Gracias por votar! Tu voto ha sido registrado exitosamente para la **Zona Norte**.";
            break;
        case "sur":
            mensajeSeccion = "¡Gracias por votar! Tu voto ha sido registrado exitosamente para la **Zona Sur**.";
            break;
        case "centro":
            mensajeSeccion = "¡Gracias por votar! Tu voto ha sido registrado exitosamente para la **Zona Centro**.";
            break;
        default:
            mensajeSeccion = "Sección no válida. Por favor, selecciona una opción correcta.";
            break;
    }

    return `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <h4 class="alert-heading">¡Registro Exitoso, ${nombre}!</h4>
            <p class="mb-0">${mensajeSeccion}</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}

// Manejo del evento de envío del formulario
document.getElementById("formVotacion").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombreUsuario").value.trim();
    const seccion = document.getElementById("seccionCiudad").value;

    const htmlResultado = procesarVoto(nombre, seccion);

    document.getElementById("resultadoVoto").innerHTML = htmlResultado;

    this.reset();
});