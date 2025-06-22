const { Estudiante } = require("./estudiante");
const { Cursos } = require("./cursos")


class Universidad {



    constructor () {
        this.estudiante = new Estudiante();
        this.curso = new Cursos();
    }


    //logica del estudiante
    registrarEstudiante = (estudiante) => {
        return this.estudiante.agregar(estudiante);
    }
    actualizarEstudiante = (estudiante) => {
        return this.estudiante.actualizar(estudiante.id, estudiante);
    }
    eliminarEstudiante = (estudiante) => {
        return this.estudiante.eliminar(estudiante.id);
    }
    consultarEstudiante = (id) => {
        return this.estudiante.consultarUno(id);
    }

    consultarEstudiantes = () => {
        return this.estudiante.consultarTodos();
    }

    //hacerla logica de cursos

    //logica de cursos
    registrarCurso = (curso) => {
        return this.curso.agregar(curso);
    }
    actualizarCurso = (curso) => {
        return this.curso.actualizar(curso.id, curso);
    }
    eliminarCurso = (curso) => {
        return this.curso.eliminar(curso.id);
    }
    consultarCurso = (id) => {
        return this.curso.consultarUno(id);
    }

    consultarCursos = () => {
        return this.curso.consultarTodos();
    }

    // hacer los reportes
    totalEstudiantes = () => {//cantidad de cursos
        return this.estudiante.total();
    }
    //funciones de flecha
    total_cursos = () => {//cantidad de cursos
        return this.curso.total();
    }



}
module.exports = {
    Universidad
}