const espacios = [
    {
        id: 1,
        nombre: "Laboratorio de Computacion 206",
        tipo: "Laboratorio",
        ubicacion: "Torre A",
        capacidad: 30,
        descripcion: "Equipado con 30 PCs, proyector y aire acondicionado.",
        badgeClass: "bg-success"
    },
    {
        id: 2,
        nombre: "Auditorio Amarillo 001",
        tipo: "Auditorio",
        ubicacion: "Torre C",
        capacidad: 120,
        descripcion: "Sistema de audio profesional, microfono inalambrico y proyector.",
        badgeClass: "bg-warning text-dark"
    },
    {
        id: 3,
        nombre: "Box 1",
        tipo: "Sala de Estudio",
        ubicacion: "Torre B",
        capacidad: 8,
        descripcion: "Pizarra acrilica, enchufes individuales y mesa de trabajo grupal.",
        badgeClass: "bg-info text-dark"
    }
];

function renderizarCatalogo(listaEspacios) {
    const contenedor = document.getElementById("contenedor-tarjetas");
    contenedor.innerHTML = "";

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
                        <button class = "btn btn-primary w-100 btn-reservar" data-id="${espacio.id}" data-bs-toggle="modal" data-bs-target="#reg-modal">Solicitar Reserva</button>
                    </div>
                </div>
            </div>
        `;

        contenedor.innerHTML += tarjetaHTML;
    });
}

// Apartado de Filtros

// Arrays
const Edificios = [
    { id : 1, nombre : "Torre A", pisos_superiores: 7, pisos_subterraneos: 2 },
    { id : 2, nombre : "Torre B", pisos_superiores: 7, pisos_subterraneos: 2 },
    { id : 3, nombre : "Torre C", pisos_superiores: 7, pisos_subterraneos: 2 },
    { id : 4, nombre : "Torre D", pisos_superiores: 7, pisos_subterraneos: 2 },
]

const Tipos_Sala = [
    { id : 1, tipo : "Sala Pequeña", asientos : 15 },
    { id : 2, tipo : "Sala Mediana", asientos : 25 },
    { id : 3, tipo : "Auditorio", asientos : 120 },
    { id : 4, tipo : "Laboratorio", asientos : 30 },
    { id : 5, tipo : "Sala de Estudio", asientos : 8}
]

// Constantes y Funciones para Filtros

var edificioSeleccionado = "";
var salaSeleccionada = "";
var fechaSeleccionada = "";

const comboEdificios = document.getElementById("comboEdificios");
const comboSalas = document.getElementById("comboSalas");

function checkFecha(dato) {
    if (fechaSeleccionada != "") {
        return dato.fecha == fechaSeleccionada;
    }
    return true;
}

function checkTipoSala(dato) {
    if (salaSeleccionada != "") {
        return dato.tipo == salaSeleccionada;
    }
    return true;
}

function checkIdEdificio(dato) {
    if (edificioSeleccionado != "") {
        return dato.ubicacion == edificioSeleccionado;
    }
    return true;
}

function filtrar(dato) {
    return (checkFecha(dato) && checkIdEdificio(dato) && checkTipoSala(dato));
}


function actualizarListado(){
    salaSeleccionada = comboSalas.value;
    edificioSeleccionado = comboEdificios.value;

    ListadoFiltrado = espacios.filter(filtrar);

    renderizarCatalogo(ListadoFiltrado);
}

document.addEventListener("DOMContentLoaded", () => {

    //Rellena Combos de filtros

    const comboEdificios = document.getElementById("comboEdificios");
    const comboSalas = document.getElementById("comboSalas");

    Tipos_Sala.forEach(sala => {
        const opcion = document.createElement("option");
        opcion.value = sala.tipo;
        opcion.text = sala.tipo;
        comboSalas.appendChild(opcion);
    });

    Edificios.forEach(edificio => {
        const opcion = document.createElement("option");
        opcion.value = edificio.nombre;
        opcion.text = edificio.nombre;
        comboEdificios.appendChild(opcion);
    });

    renderizarCatalogo(espacios);

});

//Fin Filtros

document.getElementById("contenedor-tarjetas").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-reservar")) {
        const espacioId = e.target.getAttribute("data-id");
        const espacioSeleccionado = espacios.find(esp => esp.id == espacioId);

        console.log("Espacio seleccionado para reservar:", espacioSeleccionado);
        const inputSala = document.getElementById("salaSeleccionada");
        inputSala.value = espacioSeleccionado.nombre;
        //conectar con la funcion de reservas//
    }
});
