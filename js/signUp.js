let firstName = document.getElementById("firstName").value;
let secondName = document.getElementById("secondName");
let eMail = document.getElementById("e-mail");
let date = document.querySelector("input[type= 'date']");
let password1 = document.getElementById("pass2");
let password2 = document.getElementById("pass3");
let signUpBtn = document.querySelector(".signUpBtn");




let storedData = JSON.parse(window.localStorage.getItem("Data")) || [];
// console.log(storedData);
// console.log(storedData[0]);
// console.log(storedData[0][userName.value])
// console.log(storedData[userName])
function createLocalStorage() {
    let userName = document.getElementById("userName").value;
    let userNameValue = userName;
    let newData = {
            "User Name": userNameValue,
            "Email": eMail.value,
            "First Name": firstName, 
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
    if ( userRe === true && userRe2 === true && password1.value === password2.value) {
        if (passRe === true && passRe2 === true) {
            createLocalStorage()
            window.location.href = "../local.html";
        }
    }
    else {
        window.alert("You must enter simialr value of password in the both inputs field :) !!");
    }
}
);
// window.localStorage.clear();

