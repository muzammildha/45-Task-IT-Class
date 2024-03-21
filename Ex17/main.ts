//Friends to be Invited
let friendsNames = ['Affan','Jibran','Farhan'];

//Removing Friend
let notComing = friendsNames [0];

console.log(notComing,'Nhi aa sakta');

//Adding new Friend in place of Old one
friendsNames.splice(0,1, 'SaadUllah');
 
console.log("Good News! I have arranged the dinner at the Kababjees Dodarya Restaurant.Some more people will be joining us");

//Adding a Friend at top of list
friendsNames.unshift("Ali Raza");

//Adding Friend at bottom of the list
friendsNames.push("Mahad");

//Adding friend in middle of List
let newMiddlePerson: number =Math.floor(friendsNames.length / 2);

friendsNames.splice(newMiddlePerson,0, "Hanza");

//Updated list
console.log ('Updeted List');

friendsNames.forEach(finalList => console.log(`Assalamualaikum ${finalList} join us tommorow`));

//Bad news
console.log("Bad news!, Sorry but We are unable to arrange the table for Tomorrow");

while()