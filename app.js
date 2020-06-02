
const argv =require('./config/yargs').argv;
const colors = require('colors');
const todo = require('./todo/todo');


let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = todo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let tareas = todo.getListado();
        
        for( let tarea of tareas){
            console.log('=====Por Hacer====='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${ tarea.completado }`);
            console.log('==================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = todo.actualizar(argv.d, argv.c);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = todo.borrar(argv.d);
        console.log(borrado);
        break;
    default:
        console.log(`El comando: ${ comando } no existe.`);
        break;
}