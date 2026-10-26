// Función para generar una cadena con la cantidad exacta de asteriscos usando un bucle 'for'
function generarAsteriscos(cantidad) {
    let cadenaAsteriscos = "";

    for (let i = 1; i <= cantidad; i++) {
        cadenaAsteriscos += "* ";
    }

    return cadenaAsteriscos;
}

// Manejo del evento de envío del formulario
document.getElementById("formAsteriscos").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturamos el número ingresado
    const cantidad = parseInt(document.getElementById("cantidadInput").value);
    const contenedorResultado = document.getElementById("resultadoAsteriscos");

    // Validamos que sea un número válido y positivo
    if (isNaN(cantidad) || cantidad <= 0) {
        contenedorResultado.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Por favor, ingresa un número entero mayor que cero.
            </div>
        `;
        return;
    }

    // Ejecutamos la función
    const resultado = generarAsteriscos(cantidad);

    // Mostramos el resultado en pantalla mediante una alerta estilizada de Bootstrap
    contenedorResultado.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
            <h4 class="alert-heading fw-bold">Resultado (${cantidad} asteriscos):</h4>
            <hr>
            <div class="fs-4 fw-bold text-break text-dark my-2 p-2 bg-white rounded border">
                ${resultado}
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
});