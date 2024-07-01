// ejercicio 6

// number = Number(prompt("ingrese un numero del 1 al 100"));


// if(number > 0 && number <= 100){
//     for(let i = number; i >= 0; i--){
//         console.log(i);
//     }
// }else{
//     console.log("el numero que ingreso no es valido, ingrese por favor un numero del 1 al 100");
// }

//Ejercicio 7
// let ingreseNumeroAmultiplicar = Number(prompt("ingrese un numero del 1 al 10"));

// if(ingreseNumeroAmultiplicar >0 && ingreseNumeroAmultiplicar <=10){
//     for(let i = 0;i <= 10; i++){
//         console.log(`${ingreseNumeroAmultiplicar} x ${i} es igual a: ${ingreseNumeroAmultiplicar*i}`);
//     }
// }else{
//     console.log("ingreso mal el numero, ingrese un numero del 1 al 10");
// }


//ejercicio 8

let numero;
let suma = 0;

while((numero = Number(prompt("ingrese un numero para ser sumado, presione 0 para terminar"))) != 0){
    suma = suma + numero;
    
}

console.log(suma);


//ejercicio 9
// let numero1;
// let suma1 = 0;

// do{
//     numero1 = Number(prompt("ingrese un numero para sumar:"));
//     suma1 = suma1 + numero1;

// }while(numero1 !== 0);

// console.log(`la suma acumulada es de: ${suma1}`);


//ejercicio 10
// let Persona = {
//     nombre: "jonatan",
//     apellido: "rivera",
//     origen : "asiatico",
//     estudios: "terciario",
// }

// for (const key in Persona) {
//             console.log(key);
//     }

//Ejercicio 11

//     let Persona = {
//         nombre: "jonatan",
//         apellido: "rivera",
//         origen : "asiatico",
//         estudios: "terciario",
//     }
//     for (const key in Persona) {
//         console.log(Persona[key]);
// }


// ejercicio 1 nivel medio
// let variableDelEjercicio3 = 322; //pongo asi porque nose cual es el ejercicio 3, asi que la invente yo
// let numeroSecreto = variableDelEjercicio3;
// let suma = 0;
// let contador = 0;

// do{
//     let primerNumero = Number(prompt("ingrese primer el numero a sumar"));
//     let segundoNumero = Number(prompt("ingrese segundo el numero a sumar"));
//     suma = primerNumero + segundoNumero;
//     contador++;

// }while(suma !== numeroSecreto);

// alert(`felicidades, adivinaste el numero secreto, lo intentaste ${contador} veces`);

//ejercicio 2 nivel medio


// let ingreseUnNumero = Number(prompt("ingrese un numero"));
// console.log("los multiplos de: " + ingreseUnNumero + " son: ");
// console.log("la division de: " + ingreseUnNumero + " entre cualquiera de estos numeros, es exacta: ");

// for(let i = 1; i <= ingreseUnNumero; i++){
//     if(ingreseUnNumero % i == 0){
//         console.log(i);
//     }
// }


// function bell(){
//     console.log("ding dong");
//     return "ding dong";    
// }


// //PREGUNTAR A GUILLE
// let obtenerCampana = bell();
// // obtenerCampana.join("")
// let cadenaSinEspacios = obtenerCampana.split(" ").join("");

// let numero = Number(prompt("ingrese la cantidad de veces que quiera que se repita el mensaje"));

// for(let i = 0; i < numero; i++){
//     console.log(cadenaSinEspacios);
// }

// //ejercicio 4
// const dateLimit = "1997-8-3"
// const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"];


// for (let i = 0; i < dates.length; i++){
//     if(dates[i]>=dateLimit){
//         console.log(dates[i]);
//     }
// }

//EJERCICIO 5



// Colores = ["rojo","verde","azul","violeta","marron","negro","blanco"];
// // for (const color of Colores) {
// //     console.log(color);
// // }

// function mostrarColores(){
//     for (const color of Colores) {
//         console.log(color);
//     }
// }

// mostrarColores();

// let arreglo5Numeros = [99,82,50,10,5];

// //EJERCICIO 7
// for (const iterador of arreglo5Numeros) {
//     console.log(`el numero es: ${iterador} y su doble es: ${iterador*2}`);
// }


let arregloDeObjetos = [
    {
        nombre: "jonatan",
        apellido: "rivera",
        edad : 31,
        rol : "hijo",
    },

    {
        nombre: "ariel",
        apellido: "bonfietti",
        edad : 53,
        rol : "tio",
    },

    {
        nombre: "marisa",
        apellido: "bonfietti",
        edad:49,
        rol: "mama",

    },

    {
        nombre: "ismael",
        apellido: "bonfietti",
        edad: 80,
        rol: "abuelo",
    }
]


// let primerObjeto = arregloDeObjetos[0];
// let segundoObjeto = arregloDeObjetos[1];
// let tercerObjeto = arregloDeObjetos[2];
// let cuartoObjeto = arregloDeObjetos[3];

//EJERCICIO 8
// function mostrarObjetos(){
//     for (const key in arregloDeObjetos) {
//         console.log(`hola soy ${arregloDeObjetos[key].nombre},(${arregloDeObjetos[key].rol}) y tengo ${arregloDeObjetos[key].edad}`);
//     }
    
// }

// mostrarObjetos();


//EJERCICIO 1 NIVEL DIFICIL
// let sumaPares = 0;
// let sumaImpares = 0;

// while(true){

//     let numero = Number(prompt("ingrese un numero"));
//     if(numero == 0){
//         break;
//     }

//     if(numero %2 == 0){
//         sumaPares = sumaPares + numero;
//     }else{
//         sumaImpares = sumaImpares + numero;
//     }
// }

// console.log("termino el bucle");

// console.log(`la suma de los numeros pares da: ${sumaPares}`);
// console.log(`la suma de los numeros pares da: ${sumaImpares}`);




//ejercicio 2 nivel dificil

let arregloNumeros = [10,35,4,5,67,7,800,91,1];
let mayor = 0;

for(let i = 0;i < arregloNumeros.length; i++){
    if(arregloNumeros[i]>mayor){
        mayor = arregloNumeros[i]
        console.log("el numero que esta siendo analizado es:" + arregloNumeros[i]);
    }

}

console.log("el mayor es:" + mayor);






