let archivoTareas = require('./tareas.js');

let accion = process.argv[2];

switch(accion) {

    case undefined:
        archivoTareas.AlertaUndefined();
        break;

    case 'listar':
        funcionesTareas.Listar();
        break;

    case "crear":
        let titulox = process.argv[3];
        let tareaAdd = {
            titulo : titulox,
            estado : "pendiente"
        };
        archivoTareas.GuardarTarea(tareaAdd);
        break;

    case "filtrar":
        let estadox = process.argv[3]; 
        let i = 0
        archivoTareas.LeerPorEstado(estadox).forEach(element => console.log("\t" , ++i ,". " , element));
        break

    default:
        archivoTareas.NoEntender();
        console.log('Las acciones disponibles son: listar, crear, filtrar');
        break;
}
