// Función para calcular el importe neto aplicando la tasa de impuestos correspondiente
function calcularImporteNeto(bruto) {
    let porcentajeImpuesto = 0;
    let impuestoAplicado = 0;
    let neto = 0;

    // Condicional para aplicar el porcentaje según las reglas del negocio
    if (bruto > 15000) {
        porcentajeImpuesto = 16;
        impuestoAplicado = bruto * 0.16;
    } else {
        porcentajeImpuesto = 10;
        impuestoAplicado = bruto * 0.10;
    }

    neto = bruto + impuestoAplicado;

    return {
        bruto: bruto,
        porcentaje: porcentajeImpuesto,
        impuesto: impuestoAplicado,
        neto: neto
    };
}

// Manejo del evento de envío del formulario
document.getElementById("formImporte").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturamos el valor del importe bruto introducido
    const bruto = parseFloat(document.getElementById("importeBruto").value);
    const contenedorResultado = document.getElementById("resultadoImporte");

    // Validamos que sea un número válido
    if (isNaN(bruto) || bruto < 0) {
        contenedorResultado.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Por favor, ingresa un valor numérico válido mayor o igual a cero.
            </div>
        `;
        return;
    }

    // Ejecutamos la función de cálculo
    const resultado = calcularImporteNeto(bruto);

    // Mostramos el desglose en pantalla mediante una alerta estilizada de Bootstrap
    contenedorResultado.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
            <h4 class="alert-heading fw-bold">Desglose de Facturación</h4>
            <hr>
            <p class="mb-1"><strong>Importe Bruto:</strong> $${resultado.bruto.toFixed(2)}</p>
            <p class="mb-1"><strong>Impuesto aplicado (${resultado.porcentaje}%):</strong> $${resultado.impuesto.toFixed(2)}</p>
            <p class="mb-2 fw-bold text-success fs-5">Importe Neto Total: $${resultado.neto.toFixed(2)}</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
});