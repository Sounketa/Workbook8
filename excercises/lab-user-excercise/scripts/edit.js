"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.querySelector("#updateButton");

    saveButton.addEventListener("click", function(event) {
        event.preventDefault();
        editUserData();
    });

    // Call loadUserData to populate form fields
    loadUserData();
});

function loadUserData() {
    // Fetch existing user data using provided id parameter
    fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Failed to fetch user data");
        }
    })
    .then(userData => {
        // Populate form fields with fetched user data
        document.querySelector("#name").value = userData.name;
        document.querySelector("#username").value = userData.username;
        document.querySelector("#email").value = userData.email;
        document.querySelector("#phone").value = userData.phone;
    })
    .catch(error => {
        console.error("Error loading user data:", error);
    });
}

function editUserData() {
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

    fetch("http://localhost:3000/user", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            console.log("User update successful");
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