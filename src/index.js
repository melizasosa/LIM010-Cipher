/* Acá va tu código */

//Variables
const password=document.getElementById('password');
const sms=document.getElementById("sms_error");
const inicio=document.getElementById("Login");
const msj_bloqueado=document.getElementById("bloqueo");
const msj_error=document.getElementById("error");
//const btn_ingresar=document.getElementById("ingresar");
const textoIngresadoCifrar=document.getElementById("texto_input");
const numDes=document.getElementById("number");
const textoSalidaCifrar=document.getElementById("text_out");

let cont=0;



//variables de los botones
const enlace=document.getElementById("ingresar");
const limpiar=document.getElementById('ingresar');
const btn_salir=document.getElementById("btn_out");
const boton_principal=document.getElementById("principal")

const vistaD=document.getElementById("vistaDos");

//Funcion para la validacion de la clave
/*enlace.addEventListener ('click',()=>{
  const clave=password.value;

  if(clave==="LABORATORIA"){
      window.location.href="index2.html"
      cont=0;

    }else if(cont>=2){
     msj_bloqueado.innerHTML='Intento varias veces'
     sms_error.classList.add("hide")
     btn_ingresar.classList.add("hide")
     console.log(cont);
   }
   else{
    cont=cont+1;
     msj_error.innerHTML='Clave incorrecta'
    // msj_bloqueado.innerHTML='Intento varias veces'
     //sms_error.classList.add("hide")
    //smj_bloqueado.classList.add('show')
    console.log(cont);
  }
});*/

function clave(){
  const clave=password.value;

  if(clave==="LABORATORIA"){
      window.location.href="index2.html"
      cont=0;

    }else if(cont>=2){
     msj_bloqueado.innerHTML='Intento varias veces'
     sms_error.classList.add("hide")
     btn_ingresar.classList.add("hide")
     console.log(cont);
   }
   else{
    cont=cont+1;
     msj_error.innerHTML='Clave incorrecta'
    // msj_bloqueado.innerHTML='Intento varias veces'
     //sms_error.classList.add("hide")
    //smj_bloqueado.classList.add('show')
    console.log(cont);
  }
}

//funcion de limpiar
/*limpiar.addEventListener('click',()=>{
      document.getElementById("password").value="";
      //sms_error.classList.add("hide")
     //sms.style.display="none";
});*/

function limpiarClave(){
  document.getElementById("password").value="";
}



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
  /*let string;
  let text_out;
  let textoCifrar=textoIngresadoCifrar.value;
  let numDesplazamiento=numDes.value;


  console.log(textoCifrar);
  console.log(numDesplazamiento);
  textoSalidaCifrar.value=textoCifrar;
  console.log(textoSalidaCifrar);
  textoCifrar.innerHTML=window.cipher.encode(offset,string);*/

  //let string;
  let textoCifrar;


  let string=textoIngresadoCifrar.value;
  let offset=numDes.value;

  textoSalidaCifrar.value=string;
  console.log(textoSalidaCifrar);
  textoSalidaCifrar.value=window.cipher.encode(offset,string);

}
