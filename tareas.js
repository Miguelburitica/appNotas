const fs = require('fs');
const tareas = require("./tareas.json")

const Listar = function (){
    let contador = 0;
    tareas.forEach((elemento) => {
        console.log(++contador + ".");
        console.log(elemento);
    })
}

const LeerJson = () => JSON.parse(fs.readFileSync("./tareas.json"));

const EscribirJSON = function (array){
    let arrayJson = JSON.stringify(array, null, 4)
    fs.writeFileSync("./tareas.json", arrayJson);
}

const GuardarTarea = function (tareaObj){
    let todaInfo = LeerJson();
    todaInfo.push(tareaObj);
    EscribirJSON(todaInfo);
}

const AlertaUndefined = () => console.log("Atención - Tienes que pasar una acción");

const NoEntender = () => console.log("No entiendo qué quieres hacer.");

const LeerPorEstado = function (estado) {
    let tareasActuales = LeerJson();
    return tareasActuales.filter((item) => item.estado == estado)
}

module.exports = {Listar, EscribirJSON, GuardarTarea, AlertaUndefined, NoEntender, LeerPorEstado, LeerJson};