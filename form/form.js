//Selecting Input field

const nameValue = document.getElementById('name-value');
const lastnameValue = document.getElementById('lastname-value');
const emailValue = document.getElementById('email-value');
const pwdValue = document.getElementById('pwd-value');
const telValue = document.getElementById('tel-value');
const panValue = document.getElementById('pan-value');






const addbtn = document.getElementById('btn');



//selecting error fields

const nameError = document.getElementById('name-error');
const lastnameError = document.getElementById('lastname-error');

const emailError = document.getElementById('email-error');
const pwdError = document.getElementById('pwd-error');
const telError = document.getElementById('tel-error');
const panError = document.getElementById('pan-error');





//validation function for name field

function validateName() {
  const name = nameValue.value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is Required";
    addbtn.disabled = true;
    return false;
  }

  if (!name.match(/^[a-zA-Z]{4,15}$/)) {
    nameError.innerHTML = "Please enter a valid first name between 4 and 15 characters";
    addbtn.disabled = true;
    return false;
  }

  nameError.innerHTML = `<i class='fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}


nameValue.addEventListener('keyup', validateName);
nameValue.addEventListener('blur', validateName);


function validatelastName() {
  const lastname = lastnameValue.value;

  if (lastname.length == 0) {
    lastnameError.innerHTML = "Name is Required";
    addbtn.disabled = true;
    return false;
  }

  if (!lastname.match(/^[a-zA-Z]{5,12}$/)) {
    lastnameError.innerHTML = "Please enter a last name between 5 and 12 characters";
    addbtn.disabled = true;
    return false;
  }

  lastnameError.innerHTML = `<i class='fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}


lastnameValue.addEventListener('keyup', validatelastName);
lastnameValue.addEventListener('blur', validatelastName);










//validation function for email field

function validateEmail() {
  const email = emailValue.value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is Required";
    addbtn.disabled = true;
    return false;
  }

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.innerHTML = "Invalid Email";
    addbtn.disabled = true;
    return false;
  }


  emailError.innerHTML = `<i class='fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}


emailValue.addEventListener('keyup', validateEmail);
emailValue.addEventListener('blur', validateEmail);


function validatePwd() {
  const pwd = pwdValue.value;

  if (pwd.length <8 || pwd.length >20) {
    pwdError.innerHTML = "Please enter a valid password between 8 and 20 characters with only alphanumeric characters, @, - and _ allowed.";
    addbtn.disabled = true;
    return false;
  }

  if (!pwd.match(/^[a-zA-Z0-9@_-]+$/)) {
    pwdError.innerHTML = "Please enter a valid password between 8 and 20 characters with only alphanumeric characters, @, - and _ allowed.";
    addbtn.disabled = true;
    return false;
  }


  pwdError.innerHTML = `<i class='fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}


pwdValue.addEventListener('keyup', validatePwd);
pwdValue.addEventListener('blur', validatePwd);







function validateTel() {
  const tel = telValue.value;

  if (tel.length == 0) {
    telError.innerHTML = "enter a valid telephone number";
    addbtn.disabled = true;
    return false;
  }

  if (!tel.match("[1-9]{1}[0-9]{9}")) {
    telError.innerHTML = "Please enter a valid telephone number";
    addbtn.disabled = true;
    return false;
  }


  telError.innerHTML = `<i class='fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}


telValue.addEventListener('keyup', validateTel);
telValue.addEventListener('blur', validateTel);
   

function validatePan() {
  const pan = panValue.value;

  if (pan.length == 0) {
    panError.innerHTML = " enter a valid PAN card number ";
    addbtn.disabled = true;
    return false;
  }

  if (!pan.match(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)) {
    panError.innerHTML = "Please enter a valid PAN card number";
    addbtn.disabled = true;
    return false;
  }


  panError.innerHTML = `<i class='fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}


panValue.addEventListener('keyup', validatePan);
panValue.addEventListener('blur', validatePan);

