// Domingo dia 0 / Enero mes 0/ 

let fechaActual = new Date();

///////////////////////////////////////////
//fecha actual

console.log(fechaActual.toUTCString())

///////////////////////////////////////////
//getDay = dia de la semana DOMINGO == 0
let diaDeLaSemana = fechaActual.getDay();
console.log(diaDeLaSemana)

///////////////////////////////////////////
// getDate = dia del mes 1-31
let diaDelMes = fechaActual.getDate();
console.log(diaDelMes)

///////////////////////////////////////////
// getMonth = mes 0-11
let mes = fechaActual.getMonth();
console.log(mes)

///////////////////////////////////////////
// getFullYear = año 2021
let año = fechaActual.getFullYear();
console.log(año);

let meses=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre',]
let dias=['Domingo','Lunes','Martes','Miercoles','Jueves','viernes','Sabado']

console.log('Hoy es '+dias[diaDeLaSemana]+' '+ diaDelMes +' de '+meses[mes]+' del '+año)
