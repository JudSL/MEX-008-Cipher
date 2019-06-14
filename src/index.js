//Funciones para aparecer y desaparecer pantallas con id
  const hideSection = (id) => {
    document.getElementById(id).classList.add('hide');
  }
  const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');
  }
//First page
const startButton = document.getElementById('loginButton');
let policeNumber = document.getElementById('registrationPersonal');

const getRegistration = () => {
  const registration = document.getElementById('registrationBox').value;
  policeNumber.innerHTML = registration;
  // document.getElementById('login-page').classList.add('hide');
  // document.getElementById('options-page').classList.remove('hide');
  hideSection('login-page');
  showSection('options-page');
}
loginButton.addEventListener('click',getRegistration);
//Abrir la sección CIFRAR
const cipher = document.getElementById('cipherButton');
const openCipherPage = () => {
  hideSection('options-page');
  showSection('cipher-page');
}
cipher.addEventListener('click', openCipherPage);
//Guardando valores para el texto a codificar
const buttonToCipher = document.getElementById('button-to-cipher');
buttonToCipher.addEventListener('click', function (){
  let offsetBoxC = document.getElementById('box-to-cipher').value;
  let cipherText = document.getElementById('box-cipher-text').value;
  document.getElementById('box-cipher-text').innerHTML = window.cipher.encode(offsetBoxC,cipherText)
});
  //Dando funcionalidad al botón volver
  const backC = document.getElementById('button-back-c');
  const backOptionsPageC= () => {
    hideSection('cipher-page');
    showSection('options-page');
  }
  backC.addEventListener('click', backOptionsPageC);
  //Dando funcionalidad al botón Salir
  const exitC= document.getElementById('button-exit-c');
  const exitLoginPageC = () => {
    hideSection('cipher-page');
    showSection('login-page');
    }
  exitC.addEventListener('click', exitLoginPageC);
//Abrir la sección DESCIFRAR
const decipher = document.getElementById('decipherButton');
const openDecipherPage = () => {
  hideSection('options-page');
  showSection('decipher-page');
}
decipher.addEventListener('click', openDecipherPage)
//Guardando valores para el texto a decodificar
const buttonToDecipher = document.getElementById('button-to-decipher');
buttonToDecipher.addEventListener('click', function (){
  let offsetBoxD = document.getElementById('box-to-decipher').value;
  let decipherText = document.getElementById('box-decipher-text').value;
  document.getElementById('box-decipher-text').innerHTML = window.cipher.encode(offsetBoxD,decipherText)
});

//Dando funcionalidad al botón volver
const backD = document.getElementById('button-back-d');
const backOptionsPageD= () => {
  hideSection('decipher-page');
  showSection('options-page');
}
backD.addEventListener('click', backOptionsPageD);
//Dando funcionalidad al botón Salir
const exitD= document.getElementById('button-exit-d');
const exitLoginPageD = () => {
  hideSection('decipher-page');
  showSection('login-page');
  }
exitD.addEventListener('click', exitLoginPageD);
