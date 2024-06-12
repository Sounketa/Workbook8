"use strict"

const usersTableBody = document.querySelector("#usersTableBody");

fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
    loadUsersTable(users);
  });

function loadUsersTable(users) {
  usersTableBody.innerHTML = "";
  for (const user of users) {
    buildTableRow(user);
  }
}

function buildTableRow(user) {
  let row = usersTableBody.insertRow();

  let cell1 = row.insertCell();
  cell1.innerText = user.name;

  let cell2 = row.insertCell();
  cell2.innerText = user.username;

  let cell3 = row.insertCell();
  cell3.innerText = user.email;

  let cell4 = row.insertCell();
  cell4.innerText = user.phone;

  
  // Adding Edit Link
  let cell7 = row.insertCell();
  let editLink = document.createElement("a");
  editLink.href = `edit.html?id=${user.id}`;
  editLink.innerText = "Edit";
  cell7.appendChild(editLink);

  // Adding Delete Link
  let cell8 = row.insertCell();
  let deleteLink = document.createElement("a");
  deleteLink.href = `delete.html?id=${user.id}`;
  deleteLink.innerText = "Delete";
  cell8.appendChild(deleteLink);
}


