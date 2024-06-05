var magicianNames = ["Aaron Crow", "Baba Junaid Bangali", "Samugri"];
function showMagicians() {
    return magicianNames.forEach(function (name) { return console.log(name); });
}
var magiciansToPerform = showMagicians();
console.log(magiciansToPerform);
