const espacios = [
    {
        id: 1,
        disponible: true,
        nombre: "Laboratorio de Computacion 206",
        tipo: "Laboratorio",
        ubicacion: "Torre A",
        piso: 2,
        capacidad: 30,
        descripcion: "Equipado con 30 PCs, proyector y aire acondicionado.",
        badgeClass: "bg-morado"
    },
    {
        id: 2,
        disponible: true,
        nombre: "Auditorio Amarillo 001",
        tipo: "Auditorio",
        ubicacion: "Torre C",
        piso: -1,
        capacidad: 120,
        descripcion: "Sistema de audio profesional, microfono inalambrico y proyector.",
        badgeClass: "bg-warning text-dark"
    },
    {
        id: 3,
        disponible: false,
        nombre: "Box 1",
        tipo: "Sala de Estudio",
        ubicacion: "Torre B",
        piso: -1,
        capacidad: 8,
        descripcion: "Pizarra acrilica, enchufes individuales y mesa de trabajo grupal.",
        badgeClass: "bg-info text-dark"
    },
    {
        id: 4,
        disponible: true,
        nombre: "Laboratorio de Computacion 306",
        tipo: "Laboratorio",
        ubicacion: "Torre A",
        piso: 3,
        capacidad: 30,
        descripcion: "Equipado con 30 PCs, proyector y aire acondicionado.",
        badgeClass: "bg-morado"
    },
    {
        id: 5,
        disponible: true,
        nombre: "Box 2",
        tipo: "Sala de Estudio",
        ubicacion: "Torre B",
        piso: -1,
        capacidad: 8,
        descripcion: "Pizarra acrilica, enchufes individuales y mesa de trabajo grupal.",
        badgeClass: "bg-info text-dark"
    },
    {
        id: 6,
        disponible: false,
        nombre: "Auditorio Verde 002",
        tipo: "Auditorio",
        ubicacion: "Torre C",
        piso: -1,
        capacidad: 120,
        descripcion: "Sistema de audio profesional, microfono inalambrico y proyector.",
        badgeClass: "bg-warning text-dark"
    },
    {
        id: 7,
        disponible: true,
        nombre: "Sal-112",
        tipo: "Sala pequeña",
        ubicacion: "Torre C",
        piso: 1,
        capacidad: 15,
        descripcion: "Equipado con proyector, y aire acondicionado",
        badgeClass: "bg-primary"
    },
    {
        id: 8,
        disponible: true,
        nombre: "Sal-525",
        tipo: "Sala Mediana",
        ubicacion: "Torre C",
        piso: 5,
        capacidad: 45,
        descripcion: "Equipado con proyector y aire acondicionado.",
        badgeClass: "bg-danger"
    },
    {
        id: 9,
        disponible: true,
        nombre: "Sal-706",
        tipo: "Sala Mediana",
        ubicacion: "Torre A",
        piso: 7,
        capacidad: 45,
        descripcion: "Equipado con proyector y aire acondicionado.",
        badgeClass: "bg-danger"
    },
];

function renderizarCatalogo(listaEspacios) {
    const contenedor = document.getElementById("contenedor-tarjetas");
    contenedor.innerHTML = "";

    listaEspacios.forEach((espacio) => {

        const textoDisponibilidad = espacio.disponible ? "Disponible" : "No Disponible";
        const claseDisponibilidad = espacio.disponible ? "bg-success" : "bg-danger";
        const btnDeshabilitado = espacio.disponible ? "" : "disabled";

        const tarjetaHTML = `
            <div class = "col">
                <div class = "card h-100 shadow-sm">
                    <div class = "card-body">
                        <span class = "badge ${espacio.badgeClass} mb-2">${espacio.tipo}</span>
                        <span class = "badge ${claseDisponibilidad} mb-2">${textoDisponibilidad}</span>
                        <h5 class = "card-title fw-bold">${espacio.nombre}</h5>
                        <p class = "card-text text-muted mb-1"><strong>Ubicación:</strong> ${espacio.ubicacion}</p>
                        <p class = "card-text text-muted mb-1"><strong>Piso:</strong> ${espacio.piso}</p>
                        <p class = "card-text text-muted mb-2"><strong>Capacidad:</strong> ${espacio.capacidad} personas</p>
                        <p class = "card-text">${espacio.descripcion}</p>
                    </div>
                    <div class = "card-footer bg-transparent border-0 pb-3">
                        <button class = "btn btn-primary w-100 btn-reservar" data-id="${espacio.id}" data-bs-toggle="modal" data-bs-target="#reg-modal" ${btnDeshabilitado}>Solicitar Reserva</button>
                    </div>
                </div>
            </div>
        `;

        contenedor.innerHTML += tarjetaHTML;
    });

    const espaciosDisponibles = listaEspacios.filter(espacio => espacio.disponible === true);
    const cantidadDisponibles = espaciosDisponibles.length;

    const espacioD = document.getElementById("contador-disponibles");
    espacioD.textContent = `Cantidad Disponible: ${cantidadDisponibles}`;

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

const Horarios = [
    { idReserva: 1, salaId: 1, fecha: "2026-06-10", hora: "08:00 - 09:00" },
    { idReserva: 2, salaId: 3, fecha: "2026-06-11", hora: "10:00 - 11:00" },
    { idReserva: 3, salaId: 2, fecha: "2026-06-12", hora: "11:00 - 12:00" }
];

// Constantes y Funciones para Filtros

var edificioSeleccionado = "";
var salaSeleccionada = "";
var textoSeleccionado = "";

const comboEdificios = document.getElementById("comboEdificios");
const comboSalas = document.getElementById("comboSalas");
const filtroTexto = document.getElementById("filtroTexto");

function checkTexto(dato) {
    if (textoSeleccionado != "") {
        return dato.descripcion.toLowerCase().includes(textoSeleccionado.toLowerCase());
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
    return (checkTexto(dato) && checkIdEdificio(dato) && checkTipoSala(dato));
}


function actualizarListado(){
    salaSeleccionada = comboSalas.value;
    edificioSeleccionado = comboEdificios.value;
    textoSeleccionado = filtroTexto.value

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

let misReservas = [];
//guardar reservas 
const formularioReserva = document.querySelector("#reg-modal form");

if (formularioReserva) {
    formularioReserva.addEventListener("submit", function(evento) {
        evento.preventDefault(); 
//verifica dato
        if (!formularioReserva.checkValidity()) {
            evento.stopPropagation();
            formularioReserva.classList.add("was-validated");
            return; 
        }

//guarda los datos de la reserva
        const nuevaReserva = {
            id: Date.now(), 
            espacio: document.getElementById("salaSeleccionada").value,
            nombre: document.getElementById("Nombre").value,
            email: document.getElementById("modal-email").value,
            fecha: document.getElementById("fechaReserva").value,
            horario: document.getElementById("horaReserva").options[document.getElementById("horaReserva").selectedIndex].text
        };

        misReservas.push(nuevaReserva);

        renderizarMisReservas();
    //notificar
        Swal.fire({
            icon: 'success',
            title: '¡Reserva creada con éxito!',
            text: 'Puedes revisar los detalles en la pestaña Mis Reservas.',
            timer: 2000,
            showConfirmButton: false
        });

        const modalElement = document.getElementById("reg-modal");
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
        }

        formularioReserva.reset();
    });
}   
//reservas echas mostrar
function renderizarMisReservas() {
    const tbody = document.getElementById("tabla-mis-reservas");

    tbody.innerHTML = "";
//en caso de no haber reservas
    if (misReservas.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted">No hay reservas registradas todavía.</td>
            </tr>
        `;
        return;
    }
//muestra las reservas
    misReservas.forEach((reserva) => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${reserva.espacio}</strong></td>
                <td>${reserva.nombre}</td>
                <td>${reserva.fecha}</td>
                <td><span class="badge bg-primary">${reserva.horario}</span></td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="cancelarReserva(${reserva.id})">Cancelar</button>
                </td>
            </tr>
        `;
    });
}

//pasar hora
document.getElementById("contenedor-tarjetas").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-reservar")) {
        const espacioId = e.target.getAttribute("data-id");
        const espacioSeleccionado = espacios.find(esp => esp.id == espacioId);

        if (espacioSeleccionado) {
            document.getElementById("salaSeleccionada").value = espacioSeleccionado.nombre;

            const selectHorario = document.getElementById("horaReserva");
            selectHorario.innerHTML = `<option value="" selected disabled>Seleccione un horario...</option>`;

            const horariosDeEstaSala = Horarios.filter(h => h.salaId == espacioSeleccionado.id);

            if (horariosDeEstaSala.length > 0) {

                horariosDeEstaSala.forEach(item => {
                    selectHorario.innerHTML += `<option value="${item.hora}">${item.hora}</option>`;
                });
            } else {
                selectHorario.innerHTML += `<option value="" disabled>No hay horarios disponibles</option>`;
            }
        }
    }
});

function cancelarReserva(idUnico) {

    misReservas = misReservas.filter(res => res.id !== idUnico);

    renderizarMisReservas();

    Swal.fire({
        icon: 'info',
        title: 'Reserva cancelada',

    });
}