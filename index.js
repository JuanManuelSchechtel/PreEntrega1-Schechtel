let nombre = prompt("Ingrese Nombre");
let apellido = prompt("Ingrese Apellido");
let edad = parseFloat(prompt("Ingrese su Edad"));

console.log("Hola, mi nombre es " + nombre + " mi apellido  es " + apellido + " y tengo " + edad + " años.");


if(edad >= 18){
    console.log("Eres mayor de edad.");
}else{
    console.log("Eres menor de edad.");
}


function datonom(nombre,){
    console.log("Nombre:" + nombre);
}
datonom(nombre);

function datoapell(apellido,){
    console.log("Apellido:" + apellido);
}
datoapell(apellido);


let Vehiculos = ["Azul", "Rojo", "Negro"];

for (let i = 0; i < Vehiculos.length; i++){
    console.log("F-150 Raptor:" + Vehiculos[i]);
}


let opcion = parseFloat(prompt("Ingrese la Opcion que quiera"));

switch (opcion){
    case 1:
        console.log("Has seleccionado la opción 1.");
        break;
    case 2:
        console.log("Has seleccionado la opción 2.");
        break;
    case 3:
        console.log("Has seleccionado la opción 3.");
        break;
    default:
        console.log("Opción no válida.");
        break;
}

