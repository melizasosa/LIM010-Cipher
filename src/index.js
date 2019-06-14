/* Acá va tu código */
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 2c0bcabb513751fc0e95a4107e2595c77c0029ba


<<<<<<< HEAD
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
=======
>>>>>>> 2c0bcabb513751fc0e95a4107e2595c77c0029ba

//VARIABLE CONTADOR
let cont=0;


//VARIABLES PARA LOS BOTONES
const btn_ingresar=document.getElementById("button_ingresar");
const btn_salir=document.getElementById("button_salir");
const btn_cifrar=document.getElementById("button_cifrar");
const btn_desCifrar=document.getElementById("button_desCifrar");
const btn_limpiar=document.getElementById("button_limpiar");


//FUNCION PARA VALIDAR CLAVE
btn_ingresar.addEventListener ("click",(event)=>{
  event.preventDefault();
  const clave=password.value;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  console.log(clave);
>>>>>>> 2c0bcabb513751fc0e95a4107e2595c77c0029ba
  if(clave==="LABORATORIA"){
    //  window.location.href="index2.html"
      segundavista.classList.add("show");
      primeravista.classList.add("hide");
      cont=0;

    }else if(cont>=2){
<<<<<<< HEAD
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
=======
       msj_error.classList.add("hide");
       btn_ingresar.classList.add("hide")
       password.classList.add("hide")
       msj_bloqueado.innerHTML="SUPERÓ EL LIMITE PERMITIDO"

>>>>>>> 2c0bcabb513751fc0e95a4107e2595c77c0029ba
   }
   else{
       cont=cont+1;
       msj_error.innerHTML='Clave incorrecta'
       document.getElementById("password").value="";
    }
});

<<<<<<< HEAD
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
=======
>>>>>>> 2c0bcabb513751fc0e95a4107e2595c77c0029ba

//funcion SALIR
btn_salir.addEventListener('click',(event)=>{
  event.preventDefault();
    primeravista.classList.add("show");
    segundavista.classList.add("hide");
});

//funcion limpiar texto
btn_limpiar.addEventListener('click',(event)=>{
  event.preventDefault();
  textoIngresado.value="";
  numDes.value="";
  textoSalidaCifrar.value="";

  segundavista.classList.add("show");
  primeravista.classList.add("hide");
});


btn_cifrar.addEventListener("click",(event)=>{
  event.preventDefault();
  //Valores de los datos ingresados
  let string=textoIngresado.value;
  let offset=numDes.value;

  textoSalidaCifrar.value=window.cipher.encode(offset,string);

});

//FUNCION PARA DESCIFRAR
btn_desCifrar.addEventListener('click',(event)=>{
  event.preventDefault();
  //Valores de los datos ingresados
  let string=textoIngresado.value;
  let offset=numDes.value;
  textoSalidaCifrar.value=window.cipher.decode(offset,string);

});
