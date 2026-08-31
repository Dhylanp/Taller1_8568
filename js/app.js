// Datos de Ejemplo UNAB

Edificios = [
    {id_Edificio : 1, nombre : "Torre A", pisos_superiores : 7, pisos_subterraneos : 2},
    {id_Edificio : 2, nombre : "Torre B", pisos_superiores : 7, pisos_subterraneos : 2},
    {id_Edificio : 3, nombre : "Torre C", pisos_superiores : 7, pisos_subterraneos : 2},
    {id_Edificio : 4, nombre : "Torre D", pisos_superiores : 7, pisos_subterraneos : 2},
]

Tipos_Sala = [
    {id_TipoSala : 1, tipo : "Sala Pequeña", asientos : 15},
    {id_TipoSala : 2, tipo : "Sala Mediana", asientos : 25},
    {id_TipoSala : 3, tipo : "Box",          asientos : 6}
]

Listado = [
    {id : 1, id_Edificio : 1, id_TipoSala : 2, fecha : "01-09-2026", hora : "8:30"},
    {id : 2, id_Edificio : 1, id_TipoSala : 2, fecha : "01-09-2026", hora : "9:25"},
    {id : 3, id_Edificio : 1, id_TipoSala : 1, fecha : "01-09-2026", hora : "9:25"},
    {id : 4, id_Edificio : 2, id_TipoSala : 2, fecha : "01-09-2026", hora : "10:20"},
    {id : 5, id_Edificio : 3, id_TipoSala : 1, fecha : "01-09-2026", hora : "11:15"},
    {id : 6, id_Edificio : 4, id_TipoSala : 5, fecha : "01-09-2026", hora : "12:10"},
    {id : 7, id_Edificio : 2, id_TipoSala : 1, fecha : "01-09-2026", hora : "13:05"},
    {id : 8, id_Edificio : 1, id_TipoSala : 2, fecha : "02-09-2026", hora : "14:00"},
]

// Constantes y Funciones para Filtros

const id_Edificio = 1;
const id_TipoSala = 2; 
const fecha = "01-09-2026";

function checkFecha(dato){
    if (fecha != ""){
        return dato.fecha == fecha;
    }
    return true;
}

function checkTipoSala(dato){
    if (id_TipoSala != ""){
        return dato.id_TipoSala == id_TipoSala;
    }
    return true;
}

function checkIdEdificio(dato){
    if (id_Edificio != ""){
        return dato.id_Edificio == id_Edificio;
    }
    return true;
}

function filtrar(dato){
    return (checkFecha(dato) && checkIdEdificio(dato) && checkTipoSala(dato));
}

ListadoFiltrado = Listado.filter(filtrar)

console.log(ListadoFiltrado)