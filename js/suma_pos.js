// Variables globales para mantener el estado de la suma y el historial
let sumaTotal = 0;
let historialNumeros = [];

// Manejo del evento de envío del formulario
document.getElementById("formSuma").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputElement = document.getElementById("numeroInput");
    const numero = parseFloat(inputElement.value);
    const contenedorResultado = document.getElementById("resultadoSuma");

    // 1. Uso de 'switch' (case) para clasificar el tipo de número ingresado
    let tipoNumero = "";
    switch (true) {
        case (numero > 0):
            tipoNumero = "positivo";
            break;
        case (numero === 0):
            tipoNumero = "cero";
            break;
        default:
            tipoNumero = "negativo";
            break;
    }

    // 2. Uso de 'if-else' para definir la lógica de negocio según la clasificación
    if (tipoNumero === "positivo") {
        sumaTotal += numero;
        historialNumeros.push(numero);

        contenedorResultado.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <h4 class="alert-heading">¡Número ${numero} sumado!</h4>
                <p class="mb-1"><strong>Valores ingresados:</strong> [ ${historialNumeros.join(", ")} ]</p>
                <hr>
                <p class="mb-0 fw-bold">Suma acumulada actual: ${sumaTotal}</p>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        
        // Limpiamos el input para el siguiente número
        inputElement.value = "";
        inputElement.focus();

    } else {
        // El ciclo termina si se teclea cero o un número negativo
        let motivo = (tipoNumero === "cero") ? "Has tecleado el número cero (0)." : "Has tecleado un número negativo.";
        
        contenedorResultado.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Programa Finalizado</h4>
                <p class="mb-1">${motivo}</p>
                <hr>
                <p class="mb-0 fw-bold fs-5">Suma total final obtenida: ${sumaTotal}</p>
            </div>
        `;

        // Opcional: Desactivar temporalmente el input hasta reiniciar
        inputElement.value = "";
    }
});

// Botón para reiniciar los valores y empezar una nueva suma
document.getElementById("btnReiniciar").addEventListener("click", function() {
    sumaTotal = 0;
    historialNumeros = [];
    document.getElementById("resultadoSuma").innerHTML = `
        <div class="alert alert-info" role="alert">
            La suma se ha reiniciado. Ingresa nuevos números positivos.
        </div>
    `;
    const inputElement = document.getElementById("numeroInput");
    inputElement.value = "";
    inputElement.focus();
});