const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const psw = document.querySelector("#psw");
const conPsw = document.querySelector("#con_psw");

inputArr = [firstName, lastName, email, phone, psw, conPsw];

const form = document.querySelector("#sign-up");
form.addEventListener("submit", function(event) {
    if (psw !== conPsw) {
        conPsw.value = "";
        conPsw.classList.add("invalid");
    }
});