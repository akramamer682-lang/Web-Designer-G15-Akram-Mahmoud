var form = document.createElement("form");

var nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Enter your name";

var emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Enter your email";

var passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Enter your password";

var button = document.createElement("button");
button.type = "submit";
button.innerText = "Submit";

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(passwordInput);
form.appendChild(button);

var divContainer = document.getElementById("divContainer");

divContainer.appendChild(form);