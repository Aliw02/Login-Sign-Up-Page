let firstName = document.getElementById("firstName");
let secondName = document.getElementById("secondName");
let userName = document.getElementById("userName");
let eMail = document.getElementById("e-mail");
let date = document.querySelector("input[type= 'date']");
let password1 = document.getElementById("pass2");
let password2 = document.getElementById("pass3");
let signUpBtn = document.querySelector(".signUpBtn");
let alertSpan = document.getElementById("alertSpan");
let userNameIcon = document.getElementById("userNameIcon");
let userNameAlert = document.getElementById("userNameAlert");
let passIcon = document.getElementById("passIcon");
let passAlert = document.getElementById("passAlert");




let storedData = JSON.parse(window.localStorage.getItem("Data")) || [];

function createLocalStorage() {
    let newData = {
            "UserName": userName.value,
            "Email": eMail.value,
            "First Name": firstName.value, 
            "Second Name": secondName.value,
            "BirthDay": date.value,
            "Password": password1.value,
        
    }
    storedData.push(newData);
    window.localStorage.setItem("Data", JSON.stringify(storedData));
}


signUpBtn.addEventListener("click", () => {
    let userRe = /^[a-zA-Z]{1,10}$/.test(firstName.value);
    let userRe2 = /^[a-zA-Z]{1,10}$/.test(secondName.value);
    let passRe = /(\w+)?\W(\w+)?/.test(password1.value);
    let passRe2 = /(\w+)?\W(\w+)?/.test(password2.value);
    if ( userRe === true && userRe2 === true && passRe === true && passRe2 === true) {
        if (!storedData.some(element => userName.value === element.UserName)) {
            if (password1.value === password2.value) {
                createLocalStorage()
                window.location.href = "../local.html";
            }
            else {
                alertSpan.innerText = "You must enter same password in the both password fields"
                alertSpan.style.display = "block";
                passAlert.style.display = "block";
                passIcon.style.display = "none";
                transformPassIcone = false;
            }
        }
        else {
            alertSpan.innerText = "You must enter valid userName"
            alertSpan.style.display = "block";
            userNameAlert.style.display = "block";
            userNameIcon.style.display = "none";
        }
    }
}
);
// window.localStorage.clear();

