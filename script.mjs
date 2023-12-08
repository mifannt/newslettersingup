
const inputemail = document.getElementById("log_user_input");
const btnregister = document.getElementById("btn_register");
const emailtittle = document.getElementById("email_invalid");
btnregister.addEventListener("click", validaEmail);


let email = "";

function validaEmail(){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    email = inputemail.value;
    localStorage.setItem("emailuser", email);
    
    let validar = regex.test(email);
    if (validar) {
        location.href = "./success.html"
    } else {
        emailtittle.classList.remove("login_user_input_title_invalid");
        emailtittle.classList.add("login_user_input_title_showinvalid");
        
        inputemail.classList.remove("login_user_input");
        inputemail.classList.add("login_user_input_error");
    };
};
