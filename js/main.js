let username = document.getElementById('username');
let password = document.getElementById('pass');
let button = document.querySelector('.link');
let alertSpan = document.getElementById("alertSpan");



button.addEventListener("click", ()=> {
    
    let storedData = JSON.parse(window.localStorage.getItem("Data")) || [];
    
    if (storedData.some(element => username.value === element["User Name"] && password.value === element["Password"])) {
        window.location.href = "../local.html";
    } else {
        alertSpan.innerText = "Username or password are invalid. Please try again :)"
        alertSpan.style.display = "block";
    }
});


window.onload = ()=> {
    username.value = "";
    password.value = "";
}

