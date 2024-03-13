// Selecting password input fields
let passw1 = document.querySelector('#pass');
let passw2 = document.querySelector('#pass2');
let passw3 = document.querySelector('#pass3');

// Selecting box elements
let box1 = document.querySelector(".one");
let box2 = document.querySelector(".two");
let p = document.querySelector("p");

// Selecting switch button and span element
let switchBtn = document.querySelector(".switch");
let span = document.querySelector(".before");


// Initializing boolean variables
let loca = true;
let locamobile = true;
let locaPass = true;

// Selecting eye icon element
let eye = document.querySelector(".fa-eye");

// Adding event listener for clicks
document.addEventListener("click", (e) => {
    // Handling switch button click
    let alertSpan = document.getElementById("alertSpan");
    if (e.target.className === "switch") {
        
        alertSpan.style.display = "none";
        if (loca) {
            // Updating styles for switch to login mode
            span.style.left = "25%";
            span.style.right = "100%";
            span.style.borderTopRightRadius = "100%";
            span.style.borderBottomRightRadius = "100%";
            span.style.borderBottomLeftRadius = "16px";
            span.style.borderTopLeftRadius = "16px";
            switchBtn.style.right = "calc(50% + 200px)";
            switchBtn.textContent = "Login";
            loca = false;
        } 
        else {
            // Updating styles for switch to sign-up mode
            span.style.left = "75%";
            span.style.right = "0";
            span.style.borderTopRightRadius = "16px";
            span.style.borderBottomRightRadius = "16px";
            span.style.borderBottomLeftRadius = "100%";
            span.style.borderTopLeftRadius = "100%";
            switchBtn.style.right = "calc(50% - 300px)";
            switchBtn.textContent = "Sign-Up";
            loca = true;
        }
    }

    // Handling mobile button click
    if (e.target.className === "mobileBtn") {
        if (locamobile) {
            // Hide box1 and display box2
            box1.style.display = "none";
            box2.style.display = "block";
            p.innerHTML = "If you want to login with your account click <span class='mobileBtn'>here</span>";
            locamobile = false;
        } else {
            // Show box1 and hide box2
            box1.style.display = "block";
            box2.style.display = "none";
            p.innerHTML = "If you do not have an account click <span class='mobileBtn'>here</span>";
            locamobile = true;
        }
    }

    // Handling eye icon click for password visibility
    if (e.target.className.includes("sign-up fa-eye") || e.target.className.includes("login fa-eye")) {
        if (e.target.className.includes("sign-up")) {
            if (locaPass) {
                // Toggle password visibility for sign-up fields
                e.target.classList.remove("fa-eye");
                e.target.classList.add("fa-eye-slash");
                passw2.type = "text";
                passw3.type = "text";
                locaPass = false;
            } else {
                // Toggle password visibility back to hidden
                e.target.classList.remove("fa-eye-slash");
                e.target.classList.add("fa-eye");
                passw2.type = "password";
                passw3.type = "password";
                locaPass = true;
            }
        } else {
            if (locaPass) {
                // Toggle password visibility for login field
                e.target.classList.remove("fa-eye");
                e.target.classList.add("fa-eye-slash");
                passw1.type = "text";
                locaPass = false;
            } else {
                // Toggle password visibility back to hidden
                e.target.classList.remove("fa-eye-slash");
                e.target.classList.add("fa-eye");
                passw1.type = "password";
                locaPass = true;
            }
    }
}
});

