


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
        ubicacion: "Biblioteca - Piso -1",
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
                        <button class = "btn btn-primary w-100 btn-reservar" data-id="${espacio.id}" data-bs-toggle="modal" data-bs-target="#reg-modal">Solicitar Reserva</button>
                    </div>
                </div>
            </div>
        `;

        contenedor.innerHTML +=tarjetaHTML;
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