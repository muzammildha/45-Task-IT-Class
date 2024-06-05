var userNames = ["Bilal", "Ali", "Daniyal", "Admin", "Waseem"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is empty. You can put users");
}
else
    (userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Welcome ".concat(oneUser, " Would you like to get todays invoices"));
        }
        else
            (console.log("".concat(oneUser, " Thankyou for logging in")));
    }));
