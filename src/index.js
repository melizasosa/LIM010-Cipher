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
   }
   else{
       cont=cont+1;
       msj_error.innerHTML='Clave incorrecta'
       document.getElementById("password").value="";
    }
});


//funcion SALIR
btn_salir.addEventListener('click',()=>{

  cifrado.classList.add("hide");
  segvista.classList.add("hide");
  segundavista.classList.add("hide");
  primeravista.classList.add("show-flex");
  document.getElementById("password").value="";
});

//funcion limpiar texto
btn_limpiar.addEventListener('click',()=>{

  textoIngresado.value="";
  numDes.value="";
  textoSalidaCifrar.value="";

  segundavista.classList.add("show");
  primeravista.classList.add("hide");
});


btn_cifrar.addEventListener("click",()=>{

  //Valores de los datos ingresados
  let string=textoIngresado.value;
  let offset=numDes.value;

  textoSalidaCifrar.value=window.cipher.encode(offset,string);

});

//FUNCION PARA DESCIFRAR
btn_desCifrar.addEventListener('click',()=>{
  //Valores de los datos ingresados
  let string=textoIngresado.value;
  let offset=numDes.value;
  textoSalidaCifrar.value=window.cipher.decode(offset,string);

});
