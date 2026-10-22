// Simulador: Sistema de notas de un alumno

// 1) Creamos un array con las notas de una materia
const notasAlumno = [7, 8, 6, 9, 10];

// 2) Manipulación de extremos

// Agregamos una nueva nota al final del array
notasAlumno.push(8);

// Agregamos una nueva nota al principio del array
notasAlumno.unshift(5);

// Eliminamos la última nota y la guardamos en una variable*/
const notaEliminada = notasAlumno.pop();

console.log(`Se ha eliminado la nota: ${notaEliminada}`);


// 3) Búsqueda y validación

// Solicitamos al usuario una nota para buscar
const notaBuscada = Number(prompt("¿Qué nota querés buscar?"));

// Verificamos si la nota existe en el array
if (notasAlumno.includes(notaBuscada)) {

    // Buscamos la posición de la nota dentro del array
    const posicion = notasAlumno.indexOf(notaBuscada);

    alert(
        `La nota ${notaBuscada} está registrada en la posición ${posicion}`
    );

} else {

    alert(`La nota ${notaBuscada} no está registrada`);

}


// 4) Actualización por índice usando splice

// Reemplazamos la nota del índice 2 por una nueva nota
notasAlumno.splice(2, 1, 10);


// 5) Función para mostrar todas las notas

function listarNotas(lista) {

    console.log("--- Notas del alumno ---");

    // Recorremos el array utilizando for...of
    for (const nota of lista) {
        console.log(`Nota: ${nota}`);
    }

    console.log(`Cantidad de notas registradas: ${lista.length}`);

}

// Ejecutamos la función para mostrar las notas actualizadas
listarNotas(notasAlumno);

// 6) Función para calcular el promedio de las notas

function calcularPromedio(lista) {

    let suma = 0;

    // Sumamos todas las notas del array
    for (const nota of lista) {
        suma += nota;
    }

    // Calculamos el promedio
    const promedio = suma / lista.length;

    alert(`El promedio del alumno es: ${promedio.toFixed(2)}`);
}

// Ejecutamos la función
calcularPromedio(notasAlumno);