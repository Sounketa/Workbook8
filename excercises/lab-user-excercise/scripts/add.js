"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.querySelector("#saveButton");

    saveButton.addEventListener("click", function(event) {
        event.preventDefault();
        addUserData();
    });
});

function addUserData() {
    const name = document.querySelector("#name").value;
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
  

    const userData = {
        name,
        username,
        email,
        phone   
    };

    console.log(userData);

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            console.log("User update successfull");
            window.location.href = "index.html";
        } else {
            return response.json().then(error => {
                throw new Error(error.message);
            });
        }
    })
    .catch(error => {
        console.error("Error updating user:", error);
    });
}
