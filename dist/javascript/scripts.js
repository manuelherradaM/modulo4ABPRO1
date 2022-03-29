$(function(){
    $("#nav-placeholder").load("nav.html")
  })


  $(function(){
    $("#footer-placeholder").load("footer.html")
  })

   

 function solicitud(){
  
    var datos= document.querySelector(".imprimirNombre");
    let nombre;
    nombre=prompt("Escriba su nombre")
    datos.innerHTML=("Nombre: " + " " + nombre)

    var datos= document.querySelector(".imprimirApellido");
    let apellido;
    apellido=prompt("Escriba su apellido")
    datos.innerHTML=("Apellido: " + " " + apellido)  
 }




function tiempo(){
  
  setTimeout(solicitud, 1000);
}


    


var inicio = 0; //se inicializa una variable en 0

function aumentar(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

var cantidad = document.getElementById('cantidad'); //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
var valor = cantidad.value = ++inicio;
// if  ( valor > 0) {
  
//   cantidad.style.backgroundColor= "blue";

  
//   }

   if (valor > 20){
  
    cantidad.style.backgroundColor= "green";
    }

    else  {
  
        cantidad.style.backgroundColor= "white";
      
        
        }
}

function disminuir(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir

var cantidad = document.getElementById('cantidad'); //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
var valor = cantidad.value = --inicio;

if (valor < 0){
  
  cantidad.style.backgroundColor= "red";
  }

  else  {

      cantidad.style.backgroundColor= "white";
    
      
      }

}





/**let namePerson; 
console.log(namePerson);
namePerson=prompt("Escriba su nombre");
console.log(namePerson);

let lastname;
lastname=prompt("Escriba su apellido")
console.log(lastname)

let nombre;
let apellido;
const contador=[1,2,4,6,"Día"]

function solicitud() {
    x=prompt("nombre o apellido");
    return x
}
nombre=solicitud()
apellido=solicitud()
console.log(`mi nombre es ${nombre}, y mi apellido es ${apellido}`)
contador.push(nombre)
console.log(contador)

//
let numero=1;

//est muestra el proceso
for (let i=0; i<10; i++) {
console.log(numero)
console.log(`i=${i}`)
numero++
}


//esto 
let dia
const semana=[]
dia=prompt("Cuátos días tiene la semana?")
for (let i=0; i<dia; i++) {
    //semana[i]=prompt("agregue un día")
    semana.push(prompt("agregue un dia")) [i]
}
console.log(semana)
semana


setTimeout(()=>{
        nombreDeLaFuncion();
    },1000);
*/