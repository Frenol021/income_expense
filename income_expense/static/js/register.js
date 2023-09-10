const nameField = document.querySelector("#nameField");
const emailField = document.querySelector("#emailField");

emailField.addEventListener("keyup", (e) => {
    console.log("77777", 7777)
    const emailVal = e.target.value;

if (emailVal.length > 0) {
    fetch("/authentication/validate-email", {
        body: JSON.stringify({ email: emailVal }),
        method: "POST",
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("data", data);
        if(data.email_error){
            emailField.classList.add("is-invalid"); 
        }
    });
}


});

nameField.addEventListener("keyup", (e) => {
    console.log("7777l7", 7777)
    const usernameVal = e.target.value;
   

    if (usernameVal.length > 0) {
        fetch("/authentication/validate-username", {
            body: JSON.stringify({ username: usernameVal }),
            method: "POST",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("data", data);
            if(data.username_error){
                nameField.classList.add("is-invalid"); 
            }
        });
    }


});


