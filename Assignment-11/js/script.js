// var courses = ["html", "css", "javascript", "react"];

// var searchCourse = prompt("enter course name to search");

// var result = courses.find((course) => course === searchCourse);

// if (result) {
//     alert("found");
// } else {
//     courses.push(searchCourse);
//     console.log(courses);
// }


var users = [];

function addUser(user) {
    users.push(user);
}

function editUserBalanceById(id, newBalance) {
    var user = users.find((u) => u.id === id);

    if (user) {
        user.balance = newBalance;
    } else {
        alert("User not found");
    }
}

function transferBalance(fromID, toID, balance) {
    var fromUser = users.find((u) => u.id === fromID);
    var toUser = users.find((u) => u.id === toID);

    if (!fromUser || !toUser) {
        alert("User not found");
        return;
    }

    if (fromUser.balance < balance) {
        alert("Insufficient balance");
        return;
    }

    fromUser.balance -= balance;
    toUser.balance += balance;
}

function deleteUserById(id) {
    var index = users.findIndex((u) => u.id === id);

    if (index !== -1) {
        users.splice(index, 1);
    } else {
        alert("User not found");
    }
}



var id1 = Number(prompt("Enter User 1 ID:"));
var name1 = prompt("Enter User 1 Name:");
var balance1 = Number(prompt("Enter User 1 Balance:"));

addUser({
    id: id1,
    name: name1,
    balance: balance1
});




var id2 = Number(prompt("Enter User 2 ID:"));
var name2 = prompt("Enter User 2 Name:");
var balance2 = Number(prompt("Enter User 2 Balance:"));

addUser({
    id: id2,
    name: name2,
    balance: balance2
});



var editId = Number(prompt("Enter ID to edit balance:"));
var newBalance = Number(prompt("Enter new balance:"));

editUserBalanceById(editId, newBalance);




var fromID = Number(prompt("Enter fromID:"));
var toID = Number(prompt("Enter toID:"));
var transferAmount = Number(prompt("Enter transfer amount:"));

transferBalance(fromID, toID, transferAmount);



var deleteId = Number(prompt("Enter ID to delete:"));

deleteUserById(deleteId);

console.table(users)