const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
let firstname, lastname, email, password, password2;
let validationStatus = { firstname: false, lastname: false, email: false, password: false, password2: false};

// Method to handle the change in the form
const handleChange = (val, name) => {
  if(name === "firstname"){
    firstname = val;
    const condition = /\d/.test(val) || val.length <= 7;
    validateInput(name, condition );
  }
  else if(name === "lastname"){
    lastname = val;
    const condition = /\d/.test(val) || val.length <= 7;
    validateInput(name, condition );
  }
  else if(name === "email"){
    email = val;
    let mailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    const condition = !email.match(mailformat);
    validateInput(name, condition );
  }
  else if(name === "password"){
    password = val;
    const condition = password.length <= 7;
    validateInput(name, condition );
  }
  else if(name === "password2"){
    password2 = val;
    const condition = password2 !== password;
    validateInput(name, condition);
  }
}

// Method to validate each input
const validateInput = (name, condition) => {
  if(condition){
    document.getElementById(`${name}-error`).style.display = "block";  
    validationStatus[name] = false;
  }
  else{
    document.getElementById(`${name}-error`).style.display = "none";
    validationStatus[name] = true;
  }
  handleDisabled(validationStatus);
}

// Method to handle disabling of element
const handleDisabled = data => {
  const arr = Object.values(data);
  if(signupBtn){
    arr.includes(false) ? signupBtn.setAttribute("disabled", true) : signupBtn.removeAttribute("disabled");
  }
  else if(loginBtn){
    validationStatus.email === true && validationStatus.password === true ? loginBtn.removeAttribute("disabled") : loginBtn.setAttribute("disabled", true);
  }
}
