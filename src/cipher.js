

window.cipher = {


  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
       let textoSalidaCifrar='';
       /*
       if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
       let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
                    textoSalidaCifrar += String.fromCharCode(textChar);*/
                    console.log(string);
                    console.log(offset);
                    console.log(string.length);
                    for (let i = 0; i < string.length; i++) {
                                let character = string[i];
                                console.log(character)
                                if (character.match(/[a-z]/i)) {
                                  console.log("estramos al primer if")
                                  console.log(string.charCodeAt(i))

                                    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                                        let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
                                        textoSalidaCifrar += String.fromCharCode(textChar);
                                        console.log(textoSalidaCifrar)
                                        console.log("estramos al segundo if if")
                                    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                                        textChar = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                                        textoSalidaCifrar += String.fromCharCode(textChar);
                                        console.log(textoSalidaCifrar)
                                        console.log("estramos al segundo if if")

                                    }
                                } else {
                                    textoSalidaCifrar += character;
                                }
                            }
                            return textoSalidaCifrar;
/*
        let textoCifrar=string.charCodeAt(0);
        let textChar = (string.charCodeAt(0) - 65 + parseInt(offset)) % 26 + 65;
                     textoSalidaCifrar += String.fromCharCode(textChar);*/

         },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  }
};
