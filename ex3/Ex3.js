var person3 = "Muzammil Ahmed";
console.log(person3.toUpperCase());
console.log(person3.toLowerCase());
console.log(person3.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
