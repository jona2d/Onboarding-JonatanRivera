//EJERCICIO 1
//se gana el juego cuando yo saco "papel" y mi amigo "piedra" o si yo saco "piedra" y mi amigo
//tijera o si yo saco "tijera" y mi amigo "papel", y se empata cuando yo saco piedra y el piedra
// o cuando saco tijera y el tijera o cuando saco papel y el papel

// let opcionYoMismo = prompt("ingrese 'piedra' 'papel' o 'tijera'").toLowerCase();
// let opcionOponente = prompt('ingrese "piedra" "papel" o "tijera"').toLowerCase();

// console.log(opcionYoMismo);
// console.log(opcionOponente);

// if(opcionYoMismo === "piedra" && opcionOponente === "tijera"){
//     console.log("gane yo, porque piedra gana a tijera");
// }else if(opcionYoMismo === "papel" && opcionOponente === "piedra"){
//     console.log("gane yo, porque papel gana a piedra");
// }else if(opcionYoMismo === "tijera" && opcionOponente === "papel"){
//     console.log("gane yo, porque tijera gana a papel");
// }else if (opcionYoMismo == "piedra" && opcionOponente == "piedra") {
//     console.log("es empate");
// }else if(opcionYoMismo == "papel" && opcionOponente == "papel"){
//     console.log("es empate");
// }
// else if(opcionYoMismo == "tijera" && opcionOponente == "tijera"){
//     console.log("es empate");
// }

// //ejercicio 4, los anteriores los tengo hecho en papel
// let num1 = 4;
// let num2 = 5;

// if(num1 > num2) {
//     console.log(num1 + "es mayor que "+ num2);
// }else{

//     console.log(num2 + "es mayor que "+ num1);
// }

// //ejercicio 5

// if(num1 > num2) {
//     console.log(num1);
// }else if(num2 > num1) {
//     console.log(num2);

// }else{
//     console.log("son iguales");
// }

// if(num1 == num2){
//     console.log("los numeros son iguales");
// }else{
//     console.log("los numeros son diferentes");
// }

// //declaro una variable tipo let llamada fecha1 y ahi dentro guardo una fecha
// //declaro una variable tipo let llamada fecha2 y ahi dentro guardo otra fecha
// let fecha1 = "2018-9-2";
// let fecha2 = "2023-7-5";
// //HAGO COMPARACION DE LAS 2 FECHAS, si primer condicion se cumple es "VERDADERO y tira por consola"
// //FECHA1 ES MAYOR A FECHA2, DE LO CONTRARIO TIRA POR CONSOLA LA LINEA DE CODIGO DE ABAJO

// if(fecha1 > fecha2){
//     console.log("fecha1 es mayor a fecha2");
// }else{
//     console.log("fecha2 es mayor a fecha1");
// }

// fecha1 = "2020-9-2";
// fecha2 = "2017-7-5";

// if(fecha2> fecha1){
//     console.log("fecha2 es mayor a fecha1");
// }else{
//     console.log("fecha1 es mayor a fecha2");
// }

// let numero1 = 5;
// let numero2 = 7;
// let numero3 = 9;

// if(numero1 > numero2 && numero1 > numero3){
//     console.log("el " + numero1 + " es el mayor");
// }else if(numero2 > numero1 && numero2 > numero3){
//     console.log("el " + numero2 + " es el mayor");
// }else{
//     console.log("el " + numero3 + " es el mayor");
// }

// let color = prompt("ingrese uno de estos 3 colores: 'rojo', 'azul' o 'verde' ").toLocaleUpperCase();

// switch(color){
//     case "ROJO":
//         if(color == "ROJO"){
//         alert("el color de la pasion");
//         }
//         break;
//     case "AZUL":
//         if(color == "AZUL"){
//             alert("el color del mar");
//         }
//         break;
//     case "VERDE":
//         if(color == "VERDE"){
//             alert("el color de la naturaleza");
//         }
//         break;
//     default:
//         if(color != "ROJO" && color != "AZUL" && color != "VERDE"){
//             alert("el color que ingreso no es valido, ingrese por favor uno de los 3 colores que le solicitamos");
//         }
//         break;
// }

// let primerNumero = Number(prompt("ingrese el primer numero entre el 1 y el 100"));
// let segundoNumero = Number(prompt("ingrese el segundo numero entre el 1 y el 100"));

// if(primerNumero > 0 && primerNumero <= 100 && segundoNumero > 0 && segundoNumero <= 100){
//     let operacion = prompt("ingrese una operacion: 'SUMAR', 'RESTAR', 'MULTIPLICAR' o 'DIVIDIR'").toLowerCase();

//     switch(operacion){
//         case "sumar":
//             alert(" el resultado de la suma entre el primer numero y el segundo numero es: " + (primerNumero + segundoNumero));
//             break;
//         case "restar":
//             alert(" el resultado de la resta entre el primer numero y el segundo numero es: " + (primerNumero - segundoNumero));
//             break;
//         case "multiplicar":
//             alert(" el resultado de la multiplicacion entre el primer numero y el segundo numero es: " + (primerNumero * segundoNumero));
//             break;
//         case "dividir":
//             alert(" el resultado de la division entre el primer numero y el segundo numero es: " + (primerNumero / segundoNumero));
//             break;
//         default:
//             alert("la operacion que ingreso no es valida, ingrese por favor una de las 4 operaciones que le solicitamos");
//             break;
//     }
// }else{
//     alert("los numeros que ingreso no son validos, ingrese por favor un numero entre el 1 y el 100");
// }

// let persona1 = {
//     nombre: "JONATAN",
//     edad: 23,
//     altura : 1.79,
// }

// let persona2 = {
//     nombre: "Juan",
//     edad: 27,
//     altura : 1.75,
// }

// //PRIMERO comparo las alturas
// if(persona1.altura > persona2.altura){
//     //ahora comparo las edades
//     if(persona1.edad > persona2.edad){
//         console.log(persona1.nombre +  " es mas alto y mayor que " + persona2.nombre);
//     }else if(persona1.edad < persona2.edad){
//         console.log(persona1.nombre + "es mas alto pero menor que " + persona2.nombre);
//     }else{
//         console.log(persona1.nombre + "es mas alto y tiene la misma edad que " + persona2.nombre );
//     }

//     //comparo de nuevo las alturas
// } else if(persona1.altura < persona2.altura){
//     if(persona1.edad > persona2.edad){
//         console.log(persona1.nombre + "es mas bajo pero es mas viejo que " + persona2.nombre);
//     }else if(persona1.edad < persona2.edad){
//         console.log(persona1.nombre + " es mas bajo y mas joven que " + persona2).nombre;
//     }else{
//         console.log(persona1.nombre + "es mas bajo y tiene la misma edad que " + persona2.nombre);
//     }
// }

// //EJERCICIO 7 NIVEL MEDIO
// let nombre = prompt("ingrese su nombre: ");
// let edad = Number(prompt("ingrese su edad"));
// let altura = Number(prompt("ingrese su altura:"));
// let calificacionVision = Number(prompt("ingrese su calificacion de vision:"));

// if(edad >=18 && altura > 110 &&  calificacionVision >= 8){
//     console.log("usted esta apto para conducir");
// }else{
//     console.log("usted no esta apto para conducir");
// }

// //ejercicio 8
// let ingresarEdad = Number(prompt("ingrese su edad"));

// switch(ingresarEdad){
//     case (ingresarEdad >= 0 && ingresarEdad <=12):{
//         console.log("infantil");
//         break;
//     }
//     case (ingresarEdad>12 && ingresarEdad <=18):{
//         console.log("adolescente");
            // break;
//     }
//     case (ingresarEdad>18 && ingresarEdad <=45):{
//         console.log("adulto");
            // break;
//     }
//     case (ingresarEdad>45 && ingresarEdad <=100):{
//         console.log("anciano");
            // break;
//     }
//     case (ingresarEdad>100):{
//         console.log("realmente eres tan viejo??");
//         break;
//     }
//     default:{
//         console.log("la edad que ingreso no es valida");
//         break;
//     }
// }

// //ejercicio 1 y 2 NIVEL MEDIO (pasar diagramas de flujo a codigo)
// let estoyEstresado = true;

if(estoyEstresado){
    console.log("voy al gimnasio");
    console.log("me despejo y me tranquilizo");
    // console.log("me siento a estudiar ingles");
}
console.log("me siento a estudiar ingles");

let estoyCansadoDeConducir = true;

if(estoyCansadoDeConducir){
    console.log("me bajo en la estacion de servicio");
    console.log("estiro las piernas");    
}

    console.log("sigo conduciendo hasta llegar a destino");


let soyFeliz = true;

if(!soyFeliz){
    console.log("me enfoco en mi y en mi amor propio");
    console.log("hago cosas que me suban el animo y autoestima");
}

console.log("disfruto la vida");

// let miEdad = prompt("ingrese su edad para saber si puede pasar al boliche");

// if(miEdad >= 18){
//     if(miEdad>=25){
//         console.log("puede pasar al boliche +25");
//     }
// }

// let numerosDel1al3 = Number(prompt("ingrese un numero del 1 al 3"));

// if(numerosDel1al3 >=1 && numerosDel1al3 <=3){
//     switch(numerosDel1al3){
//         case 1:{
//             let cualquiernumero = Number(prompt("ingrese cualquier numero"));
//             console.log("el numero ingresado es: "+  (cualquiernumero));
//             break;
//         }
//         case 2:{
//             let cualquiernumero = Number(prompt("ingrese cualquier numero"));
//             console.log("el doble del numero ingresado es: " + (2*cualquiernumero));
//             break;
//         }
//         case 3:{
//             let cualquiernumero = Number(prompt("ingrese cualquier numero"));
//             console.log("el triple del numero ingresado es: " + (3*cualquiernumero));
//             break;
//         }
//         // default:{
//         //     console.log("el numero que ingreso no es valido, ingrese por favor un numero del 1 al 3");
//         //     break;
//         // }
//     }

// } else{
//     console.log("el numero que ingreso no es valido, ingrese por favor un numero del 1 al 3");
// }

let ingreseSuNombre;
let tipoPase;
let tieneEntrada;

ingreseSuNombre = prompt("ingrese su nombre");

if (ingreseSuNombre == "jonatan") {
    alert("bienvenido, disfrute del evento"); //si responde "JONATAN " se termina el programa
} else {
    // si responde otra cosa distinta a jonatan entonces hacer otra comparacion mediante otro CONDICIONAL (IF)
    //sino entra en este falso
    tipoPase = prompt("ingrese el tipo de pase 'vip' o 'normal'").toLowerCase();
    if (tipoPase == "vip") {
        alert("bienvenido, disfrute del evento"); //si responde que es "VIP se termina el programa"
    } else if (tipoPase == "normal") {
        alert("bienvenido, pase");
        //y sino tiene "VIP" entra en este falso
    } else {
        let quiereComprar = prompt(
            "entonces quiere  comprar entrada?? responda 'si' o 'no'"
        ).toLowerCase(); //hasta aca entiendo

        if (quiereComprar == "si") {
            let tieneDinero = prompt(
                "tiene dinero?? responda 'si' o 'no' "
            ).toLowerCase();
            if (tieneDinero == "si") {
                let cuantoTiene = Number(
                    prompt("la entrada sale $1000: ingrese dinero para pagar")
                );
                if (cuantoTiene >= 1000) {
                    alert("compra exitosa, bienvenido:");
                } else {
                    alert("le falta dinero, vuelva en otro momento:");
                }
            } else {
                alert("nos vemos en disney, que tenga buen dia:");
            }
        } else {
            alert("nos vemos en disney:");
        }
    }
}
