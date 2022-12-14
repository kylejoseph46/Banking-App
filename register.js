//This file allows users to create an account and login. After logging in successfully they will be redirected to the banking app.


let usernames = []
let passwords = []


let register_email = document.getElementById('register-email-address')
let register_password = document.getElementById('register-password')
let register_button = document.getElementById('register-button')
let button_div = document.getElementById('button-div')
let header = document.getElementById('header')


register_button.addEventListener('click', () => {
    if (register_button.innerHTML == "Login") {
        //Check if login information is the same as registration information.
        if(register_email.value == usernames[0] && register_password.value == passwords[0])
        {
            window.location.href = "./banking.html"
        }
        else
        {
            wrong_login = document.createElement('a')
            wrong_login.innerHTML = "Username or password does not match!"
            button_div.appendChild(wrong_login)
            return 1
        }
    }
    else {
        if (register_password.value.length < 5 || !register_password.value.includes('*')) {
            longer_pass = document.createElement('a')
            longer_pass.innerHTML = "Your password length is too short!"
            button_div.appendChild(longer_pass)
        }
        else {
            usernames.push(register_email.value)
            passwords.push(register_password.value)
            register_email.value = ""
            register_password.value = ""
            header.innerHTML = "Account Created!"
            register_button.innerHTML = "Login"
        }

    }
})

