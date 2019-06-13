/* Acá va tu código */
//VARIABLES
const primeravista=document.getElementById("primeravista");
const segundavista=document.getElementById("segundavista");
const msj_error=document.getElementById("msj_error");
const password=document.getElementById("password");
const msj_bloqueado=document.getElementById("sms_bloqueo");
let textoIngresado=document.getElementById("texto_ingresado");
const numDes=document.getElementById("number");
const textoSalidaCifrar=document.getElementById("text_out");

//VARIABLES PARA EL CIFRADO

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
  if(clave==="L"){
    //  window.location.href="index2.html"
      segundavista.classList.add("show");
      primeravista.classList.add("hide");
      cont=0;

    }else if(cont>=2){
       msj_error.classList.add("hide");
       btn_ingresar.classList.add("hide")
       password.classList.add("hide")
       msj_bloqueado.innerHTML="SUPERÓ EL LIMITE PERMITIDO"
   }
   else{
       cont=cont+1;
       msj_error.innerHTML='Clave incorrecta'
       document.getElementById("password").value="";
    }
});


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

})
