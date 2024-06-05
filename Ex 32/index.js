var activeUsers = ["Daniyal", "Nasir", "Waseem", "Ahsan", "Aziz"];
var newUsers = ["Arsalan", "Uzair", "Danish", "Farooq", "Laraib"];
newUsers.forEach(function (newOneUsers) {
    var ourConditions = activeUsers.some(function (OneByOneUsers) { return OneByOneUsers.toLowerCase() === newOneUsers.toLowerCase(); });
    if (ourConditions) {
        console.log("sorry ".concat(newOneUsers, " is already taken"));
    }
    else {
        console.log("".concat(newOneUsers, " This user name is available"));
    }
});
