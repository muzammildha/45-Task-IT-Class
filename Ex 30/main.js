var userNames = ["Uzair", "Waseem", "Samad", "Daniyal", "Admin"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Welcome ".concat(oneUser, " Would you like to get todays invoices"));
    }
    else
        (console.log("".concat(oneUser, " Thankyou for logging in")));
});
