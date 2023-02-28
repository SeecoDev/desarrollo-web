// class Persona{

//     constructor(nombre,apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }

//     quienSoy(){
//         console.log(`Hola me llamo ${this.nombre} y mi apellido es ${this.apellido}`);
//     }

// }

// const merik =  new Persona(`merik`,`lepe`);
// merik.quienSoy();



// class Animal{
//     constructor(nombre){
//         this.velocidad = 0;
//         this.nombre = nombre;
//     }

//     empezoAmoverse(velocidad){
//         this.velocidad = velocidad;
//         return `El animal ${this.nombre} se mueve con una velocidad de ${this.velocidad}`;
//     }

//     seDetuvo(){
//         this.velocidad = 0;
//         console.log(`EL ${this.nombre} se canso el puto`);
//     }

// }



//let animal = new Animal('Perro');
//console.log(animal.empezoAmoverse(10));
//console.log(animal.seDetuvo());

//  Clases  con metodo Super
// class Perro extends Animal{
    
//     ladrar(){
//         return `${this.nombre} esta ladrando, como chinga`;
//     }

//     seDetuvo(){
//         super.seDetuvo();
//         console.log(`y se esta lamiendo el wey`);
//     }

// }

// let perro = new Perro('Chokys');
// console.log(chokys.ladrar());
// perro.seDetuvo();

// console.log(chokys.seDetuvo());

// class Persona{
//     constructor(nombre,apellido) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }

//     get nombreCompleto(){
//         return `${this.nombre} ${this.apellido}`;
//     }
    
//     set nombreCompleto(nombre){
//         const partes = nombre.split(' ');
//         this.nombre = partes[0];
//         this.apellido = partes[1];
//     }
// }


// const merik = new Persona('Merik','Lepe');
// const actriz = merik.nombreCompleto;
// console.log(actriz)

// const gio = new Persona();
// gio.nombreCompleto= 'Pendejo Imbecil';
// console.log(gio)

// const estudiante = gio.nombreCompleto;
// console.log(estudiante)

//

// const objetoDePrueba = {
//     nombre: 'Merik',
    
//     get nombreDeUsuario(){
//         return this.nombre;
//     },

//     set nombreDeUsuario(nuevoNombre){
//         this.nombre = nuevoNombre;
//     }

// }

// console.log(objetoDePrueba.nombreDeUsuario);
// objetoDePrueba.nombreDeUsuario = 'Gio';
// console.log(objetoDePrueba.nombreDeUsuario);

// class User {
//     constructor(name){
//         this.name = name;
//     }

//     static staticProperty = 'Hommie';

//     static staticMethod(){
//         console.log(this.name);
//     }
// }

// const adrian = new User('Adrian Guapo');
// console.log(`${adrian.name}`);
// console.log(User.staticProperty);

// 'use strict'

// mensaje = 'este es un mensaje xd ';
// console.log(mensaje);

// a=10;
// let sumarDos = function(){
//     'use strict'
//     b= 15;
//     return a+b;
// }

// let resultado = sumarDos();
// console.log(resultado);

// Funciones 

// 'use strict'

// ** Funciones tradicionales 
// function nuevoMensaje(){
//     console.log(this === undefined);
// }

// ** Funciones ArrowFunction
//  const nuevoMensaje = () =>{
//     console.log(this === undefined);
//  }