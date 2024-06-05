let cow = "cow";

let upperCaseCow = "COW";

let Five = 5

let Ten = 10

let carsInGarage = ["BMW","Mercedes","Audi","Lexus"];

console.log("Is cow is equal to Cow");

console.log(cow == "cow");

console.log("Is Cow is not Equal to Cow");

console.log(cow != "cow");

console.log("Is COW is equal to cow after converting into lowercase ");

console.log(upperCaseCow.toLowerCase()== "cow");

console.log("Is Cow is not equal to cow After converting into lowercase");

console.log(upperCaseCow.toLowerCase() != "cow")

console.log("Is Five is equal to Ten");

console.log(Five == Ten);

console.log("Is Five is not equal to Ten");

console.log(Five != Ten);

console.log("Five is greater than 0");

console.log(Ten > 0);

console.log("Ten is less than Five");

console.log(Ten<Five);

console.log("Five is greater than and equal to 2");

console.log(Five >= 2);

console.log("Ten is less than and equal to Five");

console.log(Ten<=Five);

console.log("Ten is not equal to 10 and Ten is greater than Five");

console.log(Ten != 10 && Ten > Five);

console.log("10 is greater than 20 or 10 is equal to 10");

console.log(Ten > 20 || Ten == 10);

console.log("10 is greater than 20 or 10 is not equal to 10");

console.log(Ten > 20 || Ten != 10);

console.log ("Is Audi is in my garage?")

console.log(carsInGarage.includes("Audi"))

console.log ("Is Audi is not in my garage?")

console.log(!carsInGarage.includes("Audi"))