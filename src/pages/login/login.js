$("#header").load("../../components/_header/header.html");

function login() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const userObj = {
        username: email,
        password: password,
    };
    console.log(userObj);
    alert("Successfully LoggedIn");
    window.location.href = "listtask.html";
}