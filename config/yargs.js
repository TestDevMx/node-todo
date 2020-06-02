const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};


const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca completada o pendiente una tarea'
};

const  argv = require('yargs')
                .command('crear', 'Crear un elemento por hacer', {descripcion})
                .command('actualizar', 'Actualiza el estado completado de una tarea', {
                    descripcion,
                    completado
                })
                .command('borrar', 'Comando para borrar una tarea', {descripcion})
                .help()
                .argv;

module.exports = {
    argv
}