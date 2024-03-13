// Selecting username and password input fields
let username = document.getElementById('username');
let password = document.getElementById('pass');

// Selecting login button
let button = document.querySelector('.loginBtn');

// Adding event listener for button click
button.addEventListener("click", () => {
    // Selecting alert span element
    let alertSpan = document.getElementById("alertSpan");
    
    // Retrieving stored data from local storage or initializing an empty array
    let storedData = JSON.parse(window.localStorage.getItem("Data")) || [];
    
    // Checking if the entered username and password match any stored data
    if (storedData.some(element => username.value === element["UserName"] && password.value === element["Password"])) {
        // Redirecting to the local.html page
        window.location.href = "../local.html";
    } else {
        // Displaying an error message for invalid credentials
        alertSpan.innerText = "Username or password are invalid. Please try again :)";
        alertSpan.style.display = "block";
    }
});

// Clearing input fields on page load
window.onload = ()=> {
    username.value = "";
    password.value = "";
}

