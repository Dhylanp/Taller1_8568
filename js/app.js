// Datos de Ejemplo UNAB

Edificios = [
    { id_Edificio: 1, nombre: "Torre A", pisos_superiores: 7, pisos_subterraneos: 2 },
    { id_Edificio: 2, nombre: "Torre B", pisos_superiores: 7, pisos_subterraneos: 2 },
    { id_Edificio: 3, nombre: "Torre C", pisos_superiores: 7, pisos_subterraneos: 2 },
    { id_Edificio: 4, nombre: "Torre D", pisos_superiores: 7, pisos_subterraneos: 2 },
]

Tipos_Sala = [
    { id_TipoSala: 1, tipo: "Sala Pequeña", asientos: 15 },
    { id_TipoSala: 2, tipo: "Sala Mediana", asientos: 25 },
    { id_TipoSala: 3, tipo: "Box", asientos: 8 },
    { id_TipoSala: 3, tipo: "Auditorio", asientos: 120 },
    { id_TipoSala: 3, tipo: "Laboratorio", asientos: 30 }
]

Listado = [
    { id: 1, id_Edificio: 1, id_TipoSala: 2, fecha: "01-09-2026", hora: "8:30" },
    { id: 2, id_Edificio: 1, id_TipoSala: 2, fecha: "01-09-2026", hora: "9:25" },
    { id: 3, id_Edificio: 1, id_TipoSala: 1, fecha: "01-09-2026", hora: "9:25" },
    { id: 4, id_Edificio: 2, id_TipoSala: 2, fecha: "01-09-2026", hora: "10:20" },
    { id: 5, id_Edificio: 3, id_TipoSala: 1, fecha: "01-09-2026", hora: "11:15" },
    { id: 6, id_Edificio: 4, id_TipoSala: 5, fecha: "01-09-2026", hora: "12:10" },
    { id: 7, id_Edificio: 2, id_TipoSala: 1, fecha: "01-09-2026", hora: "13:05" },
    { id: 8, id_Edificio: 1, id_TipoSala: 2, fecha: "02-09-2026", hora: "14:00" },
]

// Constantes y Funciones para Filtros

const id_Edificio = 1;
const id_TipoSala = 2;
const fecha = "01-09-2026";

function checkFecha(dato) {
    if (fecha != "") {
        return dato.fecha == fecha;
    }
    return true;
}

function checkTipoSala(dato) {
    if (id_TipoSala != "") {
        return dato.id_TipoSala == id_TipoSala;
    }
    return true;
}

function checkIdEdificio(dato) {
    if (id_Edificio != "") {
        return dato.id_Edificio == id_Edificio;
    }
    return true;
}

function filtrar(dato) {
    return (checkFecha(dato) && checkIdEdificio(dato) && checkTipoSala(dato));
}

ListadoFiltrado = Listado.filter(filtrar)

console.log(ListadoFiltrado)

//Rellena Combos de filtros

const comboEdificios = document.getElementById("comboEdificios");
const comboSalas = document.getElementById("comboSalas");

Tipos_Sala.forEach(sala => {
    const opcion = document.createElement("option");
    opcion.value = sala.id_TipoSala;
    opcion.text = sala.tipo;
    comboSalas.appendChild(opcion);
});

Edificios.forEach(edificio => {
    const opcion = document.createElement("option");
    opcion.value = edificio.id_Edificio;
    opcion.text = edificio.nombre;
    comboEdificios.appendChild(opcion);
});

const espacios = [
    {
        id: 1,
        nombre: "Laboratorio de Computacion 206",
        tipo: "Laboratorio",
        ubicacion: "Torre A - Piso 2",
        capacidad: 30,
        descripcion: "Equipado con 30 PCs, proyector y aire acondicionado.",
        badgeClass: "bg-success"
    },
    {
        id: 2,
        nombre: "Auditorio Amarillo 001",
        tipo: "Auditorio",
        ubicacion: "Torre C - Piso -1",
        capacidad: 120,
        descripcion: "Sistema de audio profesional, microfono inalambrico y proyector.",
        badgeClass: "bg-warning text-dark"
    },
    {
        id: 3,
        nombre: "Box 1",
        tipo: "Sala de Estudio",
        ubicacion: "Torre B - Piso -1",
        capacidad: 8,
        descripcion: "Pizarra acrilica, enchufes individuales y mesa de trabajo grupal.",
        badgeClass: "bg-info text-dark"
    }
];

function renderizarCatalogo(listaEspacios) {
    const contenedor = document.getElementById("contenedor-tarjetas");
    contenedor.innerHTML = " ";

    listaEspacios.forEach((espacio) => {
        const tarjetaHTML = `
            <div class = "col">
                <div class = "card h-100 shadow-sm">
                    <div class = "card-body">
                        <span class = "badge ${espacio.badgeClass} mb-2">${espacio.tipo}</span>
                        <h5 class = "card-title fw-bold">${espacio.nombre}</h5>
                        <p class = "card-text text-muted mb-1"><strong>Ubicación:</strong> ${espacio.ubicacion}</p>
                        <p class = "card-text text-muted mb-2"><strong>Capacidad:</strong> ${espacio.capacidad} personas</p>
                        <p class = "card-text">${espacio.descripcion}</p>
                    </div>
                    <div class = "card-footer bg-transparent border-0 pb-3">
                        <button class = "btn btn-primary w-100 btn-reservar" data-id="${espacio.id}">Solicitar Reserva</button>
                    </div>
                </div>
            </div>
        `;

        contenedor.innerHTML += tarjetaHTML;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarCatalogo(espacios);

});

document.getElementById("contenedor-tarjetas").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-reservar")) {
        const espacioId = e.target.getAttribute("data-id");
        const espacioSeleccionado = espacios.find(esp => esp.id == espacioId);

        console.log("Espacio seleccionado para reservar:", espacioSeleccionado);
        //conectar con la funcion de reservas//
    }
});
