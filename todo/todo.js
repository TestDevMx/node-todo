const fs = require('fs');


let listadoTODO = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoTODO);

    fs.writeFile('./db/data.json', data, (err) => {
        if(err){
            throw new Error('Error al guardar en la base de datos', err);
        }

    });
}

const cargaDB = () => {
    try {
        listadoTODO = require('../db/data.json');
    } catch (error) {
        listadoTODO = [];
    }

    return listadoTODO;
}

const crear = (descripcion) => {

    cargaDB();

    let todo = {
        descripcion,
        completado: false
    };

    listadoTODO.push(todo);
    guardarDB();

    return todo;

};


const getListado = () => cargaDB();


const actualizar = (descripcion, completado) => {
    cargaDB();

    let index = listadoTODO.findIndex( tarea => tarea.descripcion === descripcion );

    console.log(descripcion);

    if (index >= 0){
        listadoTODO[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}


const borrar = (descripcion) => {
    cargaDB();

    let nuevoTODO = listadoTODO.filter( tarea => {
        return tarea.descripcion !== descripcion;
    });

    

    if (nuevoTODO.length === listadoTODO.length){
        return false;
    }else{
        listadoTODO = nuevoTODO;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}