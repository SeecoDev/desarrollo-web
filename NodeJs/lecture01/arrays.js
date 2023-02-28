
const adrian = {
    nombre: 'Adrian',
    edad: 21,
    ingresos: [1000,500,1200,300]
}

const hugo = {
    nombre: 'Hugo',
    edad: 22,
    ingresos: [10000,50,120,580]
}

const foco = {
    nombre: 'Foco',
    edad: 20,
    ingresos: [6000,550,1300,500]
}

const personas = [adrian,hugo,foco];

console.log(adrian.nombre)
console.log(adrian.ingresos)

// console.log('For Adrian');
// for(let i = 0; i<adrian.ingresos.length;i++){
//     console.log(adrian.ingresos[i])
// }
// console.log('For of Adrian')
// for(let ingreso of adrian.ingresos){
//     console.log(ingreso)
// }

// console.log('For in Adrian')
// for(let ingreso in adrian.ingresos){
//     console.log(ingreso)
// }

// console.log('For Each Adrian');
// adrian.ingresos.forEach( ingreso => {
//     console.log(ingreso);
// });

console.log('Imprimir nombres');
personas.forEach(persona => {
    console.log(persona.nombre);
})


console.log('Promedio de edades:');
let promedio=0;
personas.forEach(persona => {
    promedio += persona.edad;
})
console.log(promedio/personas.length);


let edades = personas.map(persona => {
    return persona.edad
});
console.log(edades);