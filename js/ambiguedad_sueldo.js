// Función para calcular el sueldo y el aumento en base a los años de servicio
function calcularSueldoAntiguedad(anios) {
    const sueldoBase = 40000;
    let porcentajeAumento = 0;
    let criterioAplicado = "";

    // Criterios de evaluación según los años de servicio
    if (anios > 10) {
        porcentajeAumento = 10;
        criterioAplicado = "Más de 10 años en la empresa (+10%)";
    } else if (anios > 5 && anios <= 10) {
        porcentajeAumento = 7;
        criterioAplicado = "Menos de 10 años pero más de 5 (+7%)";
    } else if (anios > 3 && anios <= 5) {
        porcentajeAumento = 5;
        criterioAplicado = "Menos de 5 años pero más de 3 (+5%)";
    } else {
        porcentajeAumento = 3;
        criterioAplicado = "Menos de 3 años (+3%)";
    }

    const incremento = sueldoBase * (porcentajeAumento / 100);
    const sueldoFinal = sueldoBase + incremento;

    return {
        base: sueldoBase,
        anios: anios,
        porcentaje: porcentajeAumento,
        criterio: criterioAplicado,
        incremento: incremento,
        total: sueldoFinal
    };
}

// Manejo del evento de envío del formulario
document.getElementById("formSueldo").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturamos los años de servicio ingresados
    const anios = parseFloat(document.getElementById("aniosServicio").value);
    const contenedorResultado = document.getElementById("resultadoSueldo");

    // Validamos que sea un número válido
    if (isNaN(anios) || anios < 0) {
        contenedorResultado.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Por favor, ingresa un número de años válido (mayor o igual a 0).
            </div>
        `;
        return;
    }

    // Ejecutamos la función de cálculo
    const resultado = calcularSueldoAntiguedad(anios);

    // Mostramos el desglose en pantalla mediante una alerta estilizada de Bootstrap
    contenedorResultado.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
            <h4 class="alert-heading fw-bold">Resultado del Cálculo</h4>
            <hr>
            <p class="mb-1"><strong>Sueldo Base:</strong> €${resultado.base.toLocaleString()}</p>
            <p class="mb-1"><strong>Antigüedad:</strong> ${resultado.anios} año(s)</p>
            <p class="mb-1"><strong>Criterio:</strong> ${resultado.criterio}</p>
            <p class="mb-1"><strong>Aumento aplicado:</strong> +€${resultado.incremento.toLocaleString()} (${resultado.porcentaje}%)</p>
            <p class="mb-2 fw-bold text-success fs-5">Sueldo Anual Final: €${resultado.total.toLocaleString()}</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
});