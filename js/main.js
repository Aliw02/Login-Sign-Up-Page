let username = document.getElementById('username');
let password = document.getElementById('pass');
let button = document.querySelector('.link');

button.addEventListener("click", ()=> {
    let userRe = /^[a-zA-Z]{1,10}$/.test(username.value);
    let passRe = /(\w+)?\W(\w+)?/.test(password.value);
    if (userRe === true && passRe === true) {
        window.location.href = "local.html";
    }
    else {
        alert("You must input valid information...");
    }
});


let userRe1 = /^[a-zA-Z]{1,10}$/g.test("www");
console.log(userRe1);

window.onload = ()=> {
    username.value = "";
    password.value = "";
}

/* 
            box2.style.zIndex = "-1";
            box2.style.opacity = "0";
            box1.style.zIndex = "0";
            box1.style.opacity = "1";
*/