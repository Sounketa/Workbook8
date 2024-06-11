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

  let cell5 = row.insertCell();
  cell5.innerText = user.website;

  let cell6 = row.insertCell();
  cell6.innerText = `${user.company.name}`;
}


