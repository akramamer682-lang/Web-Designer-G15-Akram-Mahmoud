    let usersList = [
    { name: "Ahmed", email: "ahmed@email.com" },
    { name: "Ali", email: "ali@email.com" },
    { name: "Akram", email: "akram@email.com" }
    ];

    localStorage.setItem('users', JSON.stringify(usersList));
    let savedUsers = JSON.parse(localStorage.getItem('users'));

    savedUsers.forEach(function (user) {
    console.log("Name: " + user.name + " Email: " + user.email);
    });

    const output = document.getElementById('output');

    savedUsers.forEach(function (user) {
    const card = document.createElement('div');
    card.className = 'user-card';

    card.innerHTML = `
        <span class="name">${user.name}</span>
        <span class="email">${user.email}</span>
    `;

    output.appendChild(card);
    });