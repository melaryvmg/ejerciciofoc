const colors = require('colors');
const { Universidad } = require("./clases/universidad");




//instancia de un objeto
let universidad = new Universidad();

console.log("Estudiantes en la universidad: ", universidad.totalEstudiantes());
//agregar unestudiante
let datos_agregar = {
    id: 1,
    nombre: "samuel",
    apellido: "mosquera",
    sexo: "masculino"
}
universidad.registrarEstudiante(datos_agregar)
//consultar un estudiante
console.log("Consultar un estudiante: ", universidad.consultarEstudiante(0));
//consultar estudiantes
console.log("Lista de estudiantes: ", universidad.consultarEstudiantes());
//actualizar estudiantes
let datos = {
    id: 0,
    nombre: "son",
    apellido: "goku",
    sexo: "masculino"
}
console.log("Lista de estudiantes actualizada: ", universidad.actualizarEstudiante(datos));
//eliminar un estudiante
console.log("Lista de estudiantes actualizada con eliminacion:");
let datos_eliminar = {
    id: 1
}
console.log(universidad.eliminarEstudiante(datos_eliminar))


console.log("Cursos en la universidad: ", universidad.total_cursos());
//agregar un curso
let agregar_curso = {
    id: 1,
    titulo: "Calculo 2",
    horas: 20,

}
universidad.registrarCurso(agregar_curso)
//consultar un curso
console.log("Consultar un curso: ", universidad.consultarCurso(0));
//consultar cursos
console.log("Lista de cursos: ", universidad.consultarCursos());
//actualizar curso
let datos_curso = {
    id: 0,
    titulo: "Ingles",
    horas: 15,
}
console.log("Lista de cursos actualizada: ", universidad.actualizarCurso(datos_curso));
//eliminar un estudiante
console.log("Lista de cursos actualizada con eliminacion:");
let datos_curso_eliminar = {
    id: 1
}
console.log(universidad.eliminarCurso(datos_curso_eliminar))



