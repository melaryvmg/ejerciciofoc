const { cursos } = require("../bd/cursos")

class Cursos {

    constructor () {
        this.cursos = cursos
    }
    agregar = (curso = { id: 0, titulo: "", horas: 0 }) => {
        this.cursos.push(curso);//agrega bun elemento en js en elarreglo
    }

    consultarUno = (id) => {//devuelve un cursos
        return this.cursos.find((elemento) => {
            if (elemento.id == id) {
                return elemento
            }
        });
    }
    consultarTodos = () => {//lista de cursos
        return this.cursos;
    }
    actualizar = (id, curso = { id: 0, nombre: "", apellido: "", sexo: "" }) => {

        let i = this.cursos.findIndex((elemento) => {
            if (elemento.id == id) {
                return true
            }
        })
        this.cursos[i] = curso;
        return this.cursos;
    }
    eliminar = (id) => {

        let i = this.cursos.findIndex((elemento) => {
            if (elemento.id == id) {
                return true
            }
        })
        const eliminado = this.cursos.splice(i, 1);
        console.log("elemento eliminado: ", eliminado)
        return this.cursos;
    }
    //funciones de flecha
    total = () => {//cantidad de cursos
        return this.cursos.length;
    }
}

module.exports = {
    Cursos
}