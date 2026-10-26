// Arreglo inicial de 10 países
const paisesOriginales = [
    "México", "España", "Argentina", "Japón", "Canadá", 
    "Brasil", "Francia", "Italia", "Alemania", "Australia"
];

// Variable global modificable
let paises = [...paisesOriginales];

// Actualizar la vista del arreglo base en pantalla
function actualizarVistaBase() {
    document.getElementById("arrayBaseDisplay").textContent = `[ ${paises.join(", ")} ]`;
}

// Inicializar al cargar el documento
document.addEventListener("DOMContentLoaded", function() {
    actualizarVistaBase();

    // BLOQUE IV: Lógica del Formulario de Ingreso Desplegable
    const formIngreso = document.getElementById("formIngreso");
    if (formIngreso) {
        formIngreso.addEventListener("submit", function(event) {
            event.preventDefault();

            const usuario = document.getElementById("usuario").value.trim();
            const password = document.getElementById("password").value.trim();
            const contenedorResultado = document.getElementById("resultadoLogin");

            if (usuario !== "" && password !== "") {
                contenedorResultado.innerHTML = `
                    <div class="alert alert-success py-2 px-3 small mb-0 text-center" role="alert">
                        ¡Bienvenido, <strong>${usuario}</strong>!
                    </div>
                `;
                setTimeout(() => {
                    this.reset();
                    contenedorResultado.innerHTML = "";
                }, 3000);
            }
        });
    }
});

// Botón de restauración
document.getElementById("btnRestaurar").addEventListener("click", function() {
    paises = [...paisesOriginales];
    actualizarVistaBase();
    document.querySelectorAll("[id^='res']").forEach(div => div.innerHTML = "");
});

// 1. Length
function ejecutarLength() {
    let tamano = paises.length;
    document.getElementById("resLength").innerHTML = `Longitud del arreglo: <span class="text-primary fs-5">${tamano}</span>`;
}

// 2. Push
function ejecutarPush() {
    let copia = [...paises];
    copia.push("Chile");
    document.getElementById("resPush").innerHTML = `Resultado:<br>[ ${copia.join(", ")} ]`;
}

// 3. Pop
function ejecutarPop() {
    let copia = [...paises];
    let eliminado = copia.pop();
    document.getElementById("resPop").innerHTML = `Eliminado: <b>${eliminado}</b><br>Queda: [ ${copia.join(", ")} ]`;
}

// 4. Unshift
function ejecutarUnshift() {
    let copia = [...paises];
    copia.unshift("Colombia");
    document.getElementById("resUnshift").innerHTML = `Resultado:<br>[ ${copia.join(", ")} ]`;
}

// 5. Shift
function ejecutarShift() {
    let copia = [...paises];
    let eliminado = copia.shift();
    document.getElementById("resShift").innerHTML = `Eliminado: <b>${eliminado}</b><br>Queda: [ ${copia.join(", ")} ]`;
}

// 6. Splice
function ejecutarSplice() {
    let copia = [...paises];
    copia.splice(2, 2);
    document.getElementById("resSplice").innerHTML = `Tras splice(2,2):<br>[ ${copia.join(", ")} ]`;
}

// 7. Delete
function ejecutarDelete() {
    let copia = [...paises];
    delete copia[1];
    document.getElementById("resDelete").innerHTML = `Tras delete índice 1:<br>[ ${copia.join(", ")} ]`;
}

// 8. Reverse
function ejecutarReverse() {
    let copia = [...paises];
    copia.reverse();
    document.getElementById("resReverse").innerHTML = `Invertido:<br>[ ${copia.join(", ")} ]`;
}

// 9. Sort
function ejecutarSort() {
    let copia = [...paises];
    copia.sort();
    document.getElementById("resSort").innerHTML = `Ordenado:<br>[ ${copia.join(", ")} ]`;
}

// 10. Concat
function ejecutarConcat() {
    let nuevosPaises = ["Perú", "Uruguay"];
    let resultado = paises.concat(nuevosPaises);
    document.getElementById("resConcat").innerHTML = `Concatenado:<br>[ ${resultado.join(", ")} ]`;
}

// 11. Join
function ejecutarJoin() {
    let resultado = paises.join(" - ");
    document.getElementById("resJoin").innerHTML = `Cadena unida:<br><span class="text-secondary">${resultado}</span>`;
}