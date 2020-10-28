const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
let firstname, lastname, email, password1, password2;
let validationStatus = { firstname: false, lastname: false, email: true, password1: false, password2: false};

function validateInput(val, name) {
  if(name === "firstname"){
    firstname = val;
    if(/\d/.test(val) || val.length <= 7){
      document.getElementById(`${name}-error`).style.display = "block";  
      validationStatus[name] = false;
      handleDisabled(validationStatus);
    }
    else{
      document.getElementById(`${name}-error`).style.display = "none";
      validationStatus[name] = true;
    }
    handleDisabled(validationStatus);
  }
  else if(name === "lastname"){
    lastname = val;
    if(/\d/.test(val) || val.length <= 7){
      document.getElementById(`${name}-error`).style.display = "block";
      validationStatus[name] = false;
    } else{
      document.getElementById(`${name}-error`).style.display = "none";
      validationStatus[name] = true
    }
    handleDisabled(validationStatus);
  }
  else if(name === "email"){
    email = val;
  }
  else if(name === "password1"){
    password1 = val;
    if(password1.length <= 7){
      document.getElementById(`${name}-error`).style.display = "block";
      validationStatus[name] = false;
    } else{
      document.getElementById(`${name}-error`).style.display = "none";
      validationStatus[name] = true
    }
    handleDisabled(validationStatus);
  }
  else if(name === "password2"){
    password2 = val;
    if(password2 !== password1){
      document.getElementById(`${name}-error`).style.display = "block";
      validationStatus[name] = false;
    } else{
      document.getElementById(`${name}-error`).style.display = "none";
      validationStatus[name] = true
    }
     handleDisabled(validationStatus)
  }
}

const handleDisabled = data => {
  const arr = Object.values(data);
  console.log(arr);
  arr.includes(false) ? signupBtn.setAttribute("disabled") : signupBtn.removeAttribute("disabled");
}
