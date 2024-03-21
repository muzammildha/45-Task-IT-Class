var friendsNames = ['Affan', 'Jibran', 'Farhan'];
var notComing = friendsNames[0];
console.log(notComing, 'Nhi aa sakta');
friendsNames.splice(0, 1, 'Aamir');
friendsNames.forEach(function (friend) { return console.log("Assalamualaikum ".concat(friend, " would yoy like to join us for dinner?")); });
