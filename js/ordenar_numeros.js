function ordenarMayorAMenor(a, b, c) {
    let arr = [a, b, c];
    arr.sort(function(x, y) {
        return y - x;
    });
    return arr;
}

document.getElementById("formOrdenar").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturamos y convertimos los valores a números decimales/enteros
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const n3 = parseFloat(document.getElementById("num3").value);
    const contenedorResultado = document.getElementById("resultadoOrden");

    const numerosOrdenados = ordenarMayorAMenor(n1, n2, n3);

    contenedorResultado.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
            <h4 class="alert-heading fw-bold">¡Resultado Obtenido!</h4>
            <p class="mb-1">Los números ingresados ordenados de mayor a menor son:</p>
            <div class="fs-4 fw-bold text-dark my-2">
                ${numerosOrdenados[0]} &gt; ${numerosOrdenados[1]} &gt; ${numerosOrdenados[2]}
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
});