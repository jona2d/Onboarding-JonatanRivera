let myName = "Jonatan"

let myLastName = "Rivera";

console.log(myName);

let myAge = 31;

let myPet = "zafiro"

let petAge = 2;

let nombreCompleto = myName + " " + myLastName;

console.log("hola" + " " +  nombreCompleto);

let PresentationText = myName + " " + myLastName + " " + myAge + " " + myPet + " " + " " + nombreCompleto + " " +petAge;
console.log(PresentationText);


let sumAges = myAge + petAge;
let restAges = myAge - petAge;
let productAges = myAge * petAge;
let divisionAges = myAge / petAge;
let remainderAges = myAge % petAge;
let powerAges = myAge ** petAge;


console.log(sumAges);
console.log(restAges);
console.log(productAges);
console.log(divisionAges);
console.log(remainderAges);
console.log(powerAges);


//ACA CREE EL OBJETO "ALUMNO"
let alumno = {
    nombre: "Jonatan",
    apellido: "Rivera",
    edad: 31,
    mascota: "zafiro",
    promedio: 8.5,
    estatura: 1.79,
}

//aca primero mostre el objeto completo y despues mediante el nombre del objeto y el " . " accedi
// a sus propiedades

console.table(alumno);


console.log(alumno.edad);
console.log(alumno.promedio);
console.log(alumno.mascota);
console.log(alumno.nombre);
console.log(alumno.estatura);
console.log(alumno.apellido);

//cree o instacio el objeto "pet"
let pet = {
    name: "zafiro",
    age: 2,
    color: "negro",
    race: "gato",
    sexo: "macho",
}

//mostre el objeto "PET " Mediante el metodo table

console.table(pet);

//accediendo a sus propiedades
console.log(pet.name);
console.log(pet.age);
console.log(pet.color);
console.log(pet.race);
console.log(pet.sexo);

//CREO un ARREGLO llamado FRUTA
let fruta = ["manzana", "naranja", "pera", "uva", "sandia"];
//mostre el arreglo fruta por consola
console.log(fruta);

//accedo a cada posicion del arreglo y lo muestro
console.log(fruta[0]);
console.log(fruta[1]);
console.log(fruta[2]);
console.log(fruta[3]);
console.log(fruta[4]);

//SOLICITO AL USUARIO QUE INGRESE SU EDAD MEDIANTE EL NAVEGADOR con el metodo PROMPT
iamAdult = (Number(prompt("ingrese su edad")) >= 18);
console.log(iamAdult + " " + "soy un adulto");

if(iamAdult){
    console.log("eres mayor de edad");
}else{
    console.log("eres menor de edad");
}

//creo el arreglo
let arreglo = [1,2,3,4,5];

//muestro cada uno de los indices del arreglo y su contenido de cada indice
console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);
console.log(arreglo[3]);
console.log(arreglo[4]);

let familia = ["hijo", "hermano", "abuelo", "abuela", "padre", "madre", "tio", "tia"];

console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);
console.log(familia[5]);
console.log(familia[6]);
console.log(familia[7]);

