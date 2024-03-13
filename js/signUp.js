// Selecting input fields
let firstName = document.getElementById("firstName");
let secondName = document.getElementById("secondName");
let userName = document.getElementById("userName");
let eMail = document.getElementById("e-mail");
let date = document.querySelector("input[type='date']");
let password1 = document.getElementById("pass2");
let password2 = document.getElementById("pass3");

// Selecting sign-up button and alert elements
let signUpBtn = document.querySelector(".signUpBtn");
let alertSpan = document.getElementById("alertSpan");
let userNameIcon = document.getElementById("userNameIcon");
let userNameAlert = document.getElementById("userNameAlert");
let passIcon = document.getElementById("passIcon");
let passAlert = document.getElementById("passAlert");

// Retrieving stored data from local storage or initializing an empty array
let storedData = JSON.parse(window.localStorage.getItem("Data")) || [];

// Function to create and store new data in local storage
function createLocalStorage() {
    let newData = {
        "UserName": userName.value,
        "Email": eMail.value,
        "First Name": firstName.value,
        "Second Name": secondName.value,
        "BirthDay": date.value,
        "Password": password1.value,
    };
    storedData.push(newData);
    window.localStorage.setItem("Data", JSON.stringify(storedData));
}


// Event listener for sign-up button click
signUpBtn.addEventListener("click", () => {
    // Validating user input
    let userRe = /^[a-zA-Z]{1,10}$/.test(firstName.value);
    let userRe2 = /^[a-zA-Z]{1,10}$/.test(secondName.value);
    let passRe = /(\w+)?\W(\w+)?/.test(password1.value);
    let passRe2 = /(\w+)?\W(\w+)?/.test(password2.value);

    if (userRe === true && userRe2 === true && passRe === true && passRe2 === true) {
        if (!storedData.some(element => userName.value === element.UserName)) {
            if (password1.value === password2.value) {
                // Creating new data entry and redirecting to local.html
                createLocalStorage();
                window.location.href = "../local.html";
            } 
            else {
                // Displaying an error message for mismatched passwords
                alertSpan.innerText = "You must enter the same password in both password fields";
                alertSpan.style.display = "block";
                passAlert.style.display = "block";
                passIcon.style.display = "none";
                transformPassIcone = false;
            }
        } 
        else {
            // Displaying an error message for invalid username
            alertSpan.innerText = "You must enter a valid username";
            alertSpan.style.display = "block";
            userNameAlert.style.display = "block";
            userNameIcon.style.display = "none";
        }
    }
});

// Clearing input fields on page load
window.onload = () => {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.value = "";
    });
};
