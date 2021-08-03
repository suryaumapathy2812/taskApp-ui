$("#header").load("../../components/_header/header.html");

function register() {
    event.preventDefault();
    // Step 1: Get Form Values
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const dob = document.querySelector("#dob").value;
    // const role = document.querySelectorAll("#role").value;
    console.log(name + "-" + email + "-" + password + "-" + dob);

    // Step 2: Validate
    if (password.length < 8) {
        alert("Password must be greater than 8 characters");
    } else {
        // Step 3: Prepare Data for Backend
        const userObj = {
            firstName: name,
            email: email,
            password: password,
            dateOfBirth: dob,
        };
        console.log(userObj);

        // Step 4: Call Backend end and go to appropriate page
        //fetch(backendUrl).then(res=>res.json()).then(res=>{ ... })

        //Success flow
        alert("Registration Successful");
        window.location.href = "login.html";
    }
}