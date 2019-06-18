
window.cipher = {

  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    let textoSalidaCifrar='';
    let textChar;
    for (let i = 0; i < string.length; i++) {
      console.log(string+"String");
      let character = string[i];
      console.log(character+"CARACTER");
      console.log(string+"2STRING");
      //condicion para letras mayusculas
      if (character.match(/[a-z]/i)) {
        console.log(character);
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
          textoSalidaCifrar += String.fromCharCode(textChar);
        }
          else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            textChar = (string.charCodeAt(i) - 97 + parseInt(offset)) %26 + 97;
            textoSalidaCifrar += String.fromCharCode(textChar);
          }
        }
        else {
          textoSalidaCifrar += character;
        }
      }
    return textoSalidaCifrar;
  },

  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
     let textoSalidaCifrar='';
     let textChar;

     for (let i = 0; i < string.length; i++) {
       let character = string[i];
       if (character.match(/[a-z]/i)) {
       //condicion para descifrar letras  mayuscula
         if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
           let textChar = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
           textoSalidaCifrar += String.fromCharCode(textChar);
          }
          //condicion para descifrar para letras minusculas
         else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
           textChar = (string.charCodeAt(i) - 97 - parseInt(offset)+52) % 26 +97;
           textoSalidaCifrar += String.fromCharCode(textChar);
          }
        }
        else {
          textoSalidaCifrar += character;
        }
    }
    return textoSalidaCifrar;
  }
};
