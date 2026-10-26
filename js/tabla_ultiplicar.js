// Función para generar las tablas de multiplicar del 1 al 10 usando bucles anidados
function generarTablasMultiplicar() {
    let htmlAcumulado = "";

    // Bucle exterior: Controla la tabla actual (del 1 al 10)
    for (let i = 1; i <= 10; i++) {
        htmlAcumulado += `
            <div class="col-md-4 col-sm-6">
                <div class="card shadow-sm border-0 h-100 rounded-4">
                    <div class="card-body">
                        <h5 class="card-title text-center text-primary fw-bold mb-3 border-bottom pb-2">Tabla del ${i}</h5>
                        <ul class="list-group list-group-flush small">
        `;

        for (let j = 1; j <= 10; j++) {
            let resultado = i * j;
            htmlAcumulado += `
                <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                    <span>${i} × ${j}</span>
                    <span class="fw-bold text-dark">${resultado}</span>
                </li>
            `;
        }

        htmlAcumulado += `
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    return htmlAcumulado;
}

// Manejo del evento de clic en el botón para mostrar las tablas en pantalla
document.getElementById("btnGenerar").addEventListener("click", function() {
    const contenedor = document.getElementById("contenedorTablas");
    
    // Ejecutamos la función e insertamos el contenido en el DOM
    contenedor.innerHTML = generarTablasMultiplicar();
});