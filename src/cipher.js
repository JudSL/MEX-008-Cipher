window.cipher = {
  encode: (offset,string) =>{
    let codeModify = 0;
    let msgCipher = '';
      for (let i = 0; i < string.length; i++){
        outputAscii = string.charCodeAt(i);
          if (outputAscii >= 65 && outputAscii <= 90){
            codeModify = (outputAscii - 65 + offset) % 26 + 65;
          }
          else if (outputAscii >= 97 && outputAscii <= 122){
            codeModify = (outputAscii - 97 + offset) % 26 + 97;
          }
          else {
            codeModify = outputAscii;
          }
          msgCipher += String.fromCharCode(codeModify);
      }
      return msgCipher;
    },

    decode: (offset,string) =>{
      let codeModify = 0;
      let msgDecipher = '';
        for (let i = 0; i < string.length; i++){
          outputAscii = string.charCodeAt(i);
            if (outputAscii >= 65 && outputAscii <= 90){
              codeModify = (outputAscii - 90 - offset) % 26 +90;
            }
            else if (outputAscii >= 97 && outputAscii <= 122){
              codeModify = (outputAscii -122 - offset) % 26 +122;
            }
            else {
              codeModify = outputAscii;
            }
            msgDecipher += String.fromCharCode(codeModify);
        }
        return msgDecipher;
      },
  }
  //   let msgCipher = "";
  //   let codeModify = 0;
  //   for (let i = 0; i < string.length; i++){
  //     const ascii = string.charCodeAt(i);
  //     //Condicional de mayúsculas
  //     if (ascii >=  65 && ascii <= 90){
  //       codeModify = (ascii - 65 + offset) % 26 + 65;
  //     //Condicional de minúsculas
  //     }if (ascii >= 97 && ascii <= 122){
  //       codeModify = (ascii -97 + offset) %  26 + 97;
  //     //Condicional para identificar espacio valor Ascii = 32
  //     }if (ascii !== 32){
  //       codeModify = ascii;
  //     }
  //     msgCipher += string.fromChartCode(codeModify);
  //   }
  //
