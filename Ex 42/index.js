function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_greet(magicians) {
    magicians.map(function (name) { return console.log("the Great ".concat(name)); });
}
var magician_Names = ["Harry Horter", "Baba Junaid Bangali", "Asif Ali"];
make_greet(magician_Names);
