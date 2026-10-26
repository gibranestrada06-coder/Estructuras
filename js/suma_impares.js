// Función para calcular la suma de los números impares del 1 al 100
function calcularSumaImpares() {
    let suma = 0;
    let imparesListados = [];

    // Bucle 'for' para recorrer del 1 al 100
    for (let i = 1; i <= 100; i++) {
        // Validamos si el número es impar
        if (i % 2 !== 0) {
            suma += i;
            imparesListados.push(i);
        }
    }

    return {
        sumaTotal: suma,
        elementos: imparesListados
    };
}

// Manejo del evento de clic en el botón
document.getElementById("btnCalcular").addEventListener("click", function() {
    const contenedorResultado = document.getElementById("resultadoImpares");

    const resultado = calcularSumaImpares();

    contenedorResultado.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show shadow-sm text-start" role="alert">
            <h4 class="alert-heading fw-bold text-center">¡Cálculo Exitoso!</h4>
            <hr>
            <p class="mb-2"><strong>Secuencia evaluada:</strong> Números impares del 1 al 100.</p>
            <p class="mb-2"><strong>Cantidad de números impares:</strong> ${resultado.elementos.length}</p>
            <p class="mb-3 fw-bold text-success fs-5 text-center">Suma Total: ${resultado.sumaTotal}</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
});