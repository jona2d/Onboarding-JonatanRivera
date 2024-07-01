function agregar(){
    console.log(100*20);
}
//llamo a la funcion agregar
agregar();

//declaro la  funcion agregar1 y le agrego 2 paremetros "NUM1" y "NUM2"
function agregar1(num1, num2){
    console.log(num1 * num2);
}

//llamo y le paso argumentos a la funcion
agregar1(100,20);

function agregar(numero1,numero2){
    resultado = 100 * 20;
    return resultado;
}

//paso de funcion nombrada a funcion anonima
let agregar2 = function(numero1,numero2){
    resultado = 100 * 20;
    return resultado;
}

//LLAMO A LA FUNCION ANONIMA MEDIANTE MI VARIABLE "AGREGAR 2" y le paso como argumentos los 2 numeros que yo quiera pasarles
console.log(agregar2(100,20));

//EJERCICIO NIVEL MEDIO
//declaro la funcion
function saludar(nombre){
    console.log("Hola " + nombre);
}
//llamo a la funcion saludar y le paso como argumento un string con mi nombre : "JONATAN"
saludar("Jonatan");


//declaro una variable tipo let llamada multiplicar2Numeros y ahi dentro guardo la funcion anonima
//donde creo una variable tipo let llamada resultado, donde ahi adentro guardo el resultado de la multiplicacion
//Entre los 2 numeros que tengo como parametros
//retorno la variable resultado que tiene almacenado el resultado de esa multipliacion
// let multiplicar2Numeros = function(numero1,numero2){
//     let resultado = numero1 * numero2;
//     return resultado;
// }
//llamo a la funcion multiplicar2Numeros , le paso como argumentos 2 numeros 
//Y LA MUESTRO POR CONSOLA
// console.log(multiplicar2Numeros(7,9));

//DECLARO LA funcion "AREA"
// function area(base,altura){
//     let area = (base * altura) / 2;
//     return area;
// }
//llamo a la funcion "area" para calcular el area de 1 triangulo
// area(12,23);

//DECLARO LA FUNCION llamada "PERIMETRO" que recibe como argumentos 3 lados y devuelve la suma de esos 3 lados
// function perimetro(lado1,lado2,lado3){
//     let sumaDeLosLados = lado1 + lado2 + lado3;
//     return sumaDeLosLados;
// }

// function precioNetoDeLaCompra(precio,cantidadProductos){
//     if(cantidadProductos>=10 && cantidadProductos<20){
//         let descuento = ((precio * cantidadProductos) * 10) / 100;
//         let totalNeto = (precio * cantidadProductos) - descuento;
//         return totalNeto;
//     }
//     if(cantidadProductos>=20){
//         let descuento = ((precio * cantidadProductos) * 20) / 100;
//         let totalNeto = (precio * cantidadProductos) - descuento;
//         return totalNeto;

//     }else{
//         let totalNeto = precio * cantidadProductos;
//         return totalNeto;
//     }
// }

// console.log(precioNetoDeLaCompra(10,9));


// function isanAdult(edad){
//     if(edad>=18){
//         return "eres mayor de edad";
//     }else{
//         return "no eres un adulto";
//     }
// }

// let esAdulto = isanAdult(20);
// alert(esAdulto);


// function impuestosApagar(ingresoAnual){
//     let impuestoss;
    
//     if(ingresoAnual > 20000){ // si es verdadero deberia terminar y retornar el valor de impuestos

//         impuestoss = (ingresoAnual * 20) / 100; 

//     } else{
//         if(ingresoAnual >10000 && ingresoAnual <=20000){
//             impuestoss = (ingresoAnual * 15) / 100;
//         }else{
//             impuestoss = (ingresoAnual * 10) / 100;
//         }

//     }
//     return  impuestoss;
// }




//preguntar a guille mañana
// let impuestosApagarrr = impuestosApagar(40000);

// alert(impuestosApagarrr);

// console.log(typeof(impuestosApagarrr));




// function diaDeLaSemana(dia){
//     let elijaDia = Number(prompt("elija un dia de la semana con un numero, del 1 al 5 es de lunes a viernes y sabado  y domingo representan 6 y 7"));
//     switch(elijaDia){
        
//         case 1:
//             alert("usted eligio: LUNES");
//             break;
//         case 2:
//             alert("usted eligio Martes:");
//             break;
//         case 3:
//             alert("usted eligio Miercoles:");
//             break;
//         case 4:
//             alert("usted eligio Jueves:");
//             break;
//         case 5:
//             alert("usted eligio Viernes:");
//             break;
//         case 6:
//             alert("usted eligio Sabado:");
//             break;
//         case 7:
//             alert("usted eligio Domingo:");
//             break;
//         default:            
//                 alert("usted eligio un dia de la semana invalido, por favor elija un numero entre el 1 y el 7:");
//                 break;            
//             }
            

//     }

// diaDeLaSemana();
// let objetoVacio = {};

// function datosPersonales(objetoDatosPersonales){
//     let nombre = prompt("ingrese su nombre");//se guarda lo que el usuario ingreso en la variable NOMBRE
//     if(!nombre){// SI el nombre esta vacio, o sea que es falsy, undefined o null, o sea que no hay valor
//         entra en la condicion y retorna el OBJETO VACIO
//         console.log("ingrese algun valor, no puede estar vacio");
        
//     }  
//     objetoDatosPersonales.nombre = nombre;

//     let apellido = prompt("ingrese su apellido");//se guarda lo que el usuario ingreso en la variable NOMBRE
//     if(!apellido){// SI el nombre esta vacio, o sea que es falsy, undefined o null, o sea que no hay valor
//         entra en la condicion y retorna el OBJETO VACIO
//         console.log("ingrese algun valor, no puede estar vacio");
        
//     }
//     objetoDatosPersonales.apellido = apellido;

//     let edad = Number(prompt("ingrese su edad"));//se guarda lo que el usuario ingreso en la variable NOMBRE
//     if(!edad){// SI el nombre esta vacio, o sea que es falsy, undefined o null, o sea que no hay valor
//         entra en la condicion y retorna el OBJETO VACIO
//         console.log("ingrese algun valor, no puede estar vacio");
        
//     }

//     objetoDatosPersonales.edad = edad;

//     SI NO ENTRA EN LA CONDICION DE ARRIBA SE AGREGA UN ATRIBUTO NOMBRE, CON EL VALOR DE LO INGRESADO
//     EN LA VARIABLE NOMBRE
//     return objetoDatosPersonales;  // SE RETORNA EL OBJETO CON EL ATRIBUTO
// }



// let usarFuncion = datosPersonales(objetoVacio);
// console.log(usarFuncion);



function saludar(nombre){
    return `hola ${nombre}`
}
function calculateAge(añoActual,añoNacimiento){
    let EDAD = añoActual - añoNacimiento;
    return EDAD;
}
function presente(){
    let nombrePromt = prompt("ingrese su nombre");
    let mostrarSaludar = saludar(nombrePromt);
    
    let age1 = Number(prompt("ingrese el año actual"));
    let age2 = Number(prompt("ingrese el año nacimiento"));    
    let MostrarAge =calculateAge(age1,age2);
    
    alert(`${mostrarSaludar} tu edad es:  ${MostrarAge}`)
}
presente();







