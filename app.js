// 1. Puesta en común de los tipos de datos que vamos a necesitar
// para guardar nuestras tareas

// 2. Se arma un array 

// 3. Se hace evidente que los datos tienen que estar afuera
// Creamos un archivo JSON

// console.log(tareasJson)
// console.log(typeof tareasJson)

// Salto de Fé
// Módulos nativos
// const fs = require('fs');
// let tareasJson = fs.readFileSync('tareas.json', 'utf-8');
// let tareas = JSON.parse(tareasJson);

// Micro desafío 1
// transformar el código anterior en una función
// function leerJson() {
//    return JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));;
// }

// 4. Se lleva el código a un modulo

const { fstat } = require('fs');
let funcionesTareas = require('./tareas.js');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        funcionesTareas.Listar();
        break;

    // Micro desafío 1
    // Atajar el caso en que no se envíe un parámetro
    case undefined:
        archivoTareas.AlertaUndefined();
        break;

    case "crear":
        titulox = process.argv[3];
        tareaAdd = {
            titulo : titulox,
            estado : "pendiente"
        };
        archivoTareas.GuardarTarea(tareaAdd);
        break;

    // Micro desafío 2
    default:
        archivoTareas.NoEntender();
        console.log('Las acciones disponibles son: listar');
        break;
}
