//First page
const startButton = document.getElementById('loginButton');
let policeNumber = document.getElementById('registrationPersonal');

const getRegistration = () => {
  const registration = document.getElementById('registrationBox').value;
  policeNumber.innerHTML = registration;
  document.getElementById('login-page').classList.add('hide');
  document.getElementById('options-page').classList.remove('hide');
}

loginButton.addEventListener('click',getRegistration);

const cipher = document.getElementById('cipherButton')
const decipher = document.getElementById('decipherButton')


const hideSection = () => {
  document.getElementById(id).classList.add('hide');
}

const showSection = (id) => {
  document.getElementById(id).classList.remove('hide');
}
