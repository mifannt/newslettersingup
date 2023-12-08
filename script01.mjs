let emailspan = localStorage.getItem("emailuser"); 

const span_email = document.getElementById("useremail_acount");
span_email.innerHTML = emailspan;

const btncancel = document.getElementById("btn_cancel");
btncancel.addEventListener("click", cancelFn);

function cancelFn(){
    location.href = "./index.html"
    return;
}
