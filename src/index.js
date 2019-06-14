/* Acá va tu código */
<<<<<<< HEAD

//Variables
const password=document.getElementById('password');
const sms=document.getElementById("sms_error");
const inicio=document.getElementById("Login");
const msj_bloqueado=document.getElementById("bloqueo");
const msj_error=document.getElementById("error");
//const btn_ingresar=document.getElementById("ingresar");
const textoIngresadoCifrar=document.getElementById("texto_input");
const numDes=document.getElementById("numdDesplazar");

=======
//VARIABLES
const primeravista=document.getElementById("primeravista");
const segundavista=document.getElementById("segundavista");
const msj_error=document.getElementById("msj_error");
const password=document.getElementById("password");
const msj_bloqueado=document.getElementById("sms_bloqueo");
let textoIngresado=document.getElementById("texto_ingresado");
const numDes=document.getElementById("number");
const textoSalidaCifrar=document.getElementById("text_out");
const cifrado=document.getElementById("cifrado");
const segvista=document.getElementById("segvista");
const textoClave=document.getElementById("texto_clave");

//VARIABLES PARA EL CIFRADO

//VARIABLE CONTADOR
>>>>>>> 7d1b4ee... -nuevos cambios
let cont=0;



//variables de los botones
const enlace=document.getElementById("ingresar");
const limpiar=document.getElementById('ingresar');
const btn_salir=document.getElementById("btn_out");
const boton_principal=document.getElementById("principal")

const vistaD=document.getElementById("vistaDos");

//Funcion para la validacion de la clave
enlace.addEventListener ('click',()=>{
  const clave=password.value;
<<<<<<< HEAD

  if(clave==="LABORATORIA"){
      window.location.href="index2.html"
      cont=0;

    }else if(cont>=2){
     msj_bloqueado.innerHTML='Intento varias veces'
     sms_error.classList.add("hide")
     btn_ingresar.classList.add("hide")
     console.log(cont);
=======
  if(clave==="LABORATORIA"){
    //  window.location.href="index2.html"
      segundavista.classList.add("show");
      primeravista.classList.add("hide");
      cont=0;

    }else if(cont>=2){
       msj_error.classList.add("hide");
       btn_ingresar.classList.add("hide")
       password.classList.add("hide")
       textoClave.classList.add("hide")
       msj_bloqueado.innerHTML=":( LO SENTIMOS,NO SE PUEDO INICIAR SESIÓN"
>>>>>>> 7d1b4ee... -nuevos cambios
   }
   else{
    cont=cont+1;
     msj_error.innerHTML='Clave incorrecta'
    // msj_bloqueado.innerHTML='Intento varias veces'
     //sms_error.classList.add("hide")
    //smj_bloqueado.classList.add('show')
    console.log(cont);
  }
});

<<<<<<< HEAD
//funcion de limpiar
limpiar.addEventListener('click',()=>{
      document.getElementById("password").value="";
      //sms_error.classList.add("hide")
     //sms.style.display="none";
=======

//funcion SALIR
btn_salir.addEventListener('click',(event)=>{
  event.preventDefault();
  cifrado.classList.add("hide");
  segvista.classList.add("hide");
  segundavista.classList.add("hide");
  primeravista.classList.add("show");
  login-container.classList.add("show");
>>>>>>> 7d1b4ee... -nuevos cambios
});

//funcion SALIR
/*btn_salir.addEventListener('click',()=>{
  //console.log("hola");
    alert("estamos dentro de la Funcion")

    inicio.classList.add("show")
    boton_principal.classList.add("show")
    window.location.href="index.html"
})*/

//funcion salir sesion
function salir1(){
  console.log("hola");
  window.location.href="index.html"
}

//funcion limpiar texto
function btn_clean(){
  document.getElementById("texto_input").value="";
}

//funcion cifrar
function btn_cifrar(){
  let textoCifrar=textoIngresadoCifrar.value;
  let numDesplazamiento=numDes.value;
  document.getElementById("text_out").innerHTML=window.cipher.encode(text_out,string);
}

btn_cifrar.addEventListener('click',()=>{

})
