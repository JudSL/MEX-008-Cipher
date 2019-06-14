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
const cipher = document.getElementById('cipherButton')
const openCipherPage = () => {
  hideSection('options-page');
  showSection('cipher-page');
}
cipher.addEventListener('click', openCipherPage)
//Abrir la sección DESCIFRAR
const decipher = document.getElementById('decipherButton')
const openDecipherPage = () => {
  hideSection('options-page');
  showSection('decipher-page');
}
decipher.addEventListener('click', openDecipherPage)
