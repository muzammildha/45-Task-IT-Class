let friendsNames = ['Affan','Jibran','Farhan'];

let notComing = friendsNames [0];

console.log(notComing,'Nhi aa sakta');

friendsNames.splice(0,1, 'SaadUllah');
 
console.log("Good News! I have arranged the dinner at the Kababjees Dodarya Restaurant.Some more people will be joining us");

friendsNames.unshift("Ali Raza");

friendsNames.push("Mahad");

let newMiddlePerson: number =Math.floor(friendsNames.length / 2);

friendsNames.splice(newMiddlePerson,0, "Hanza");

console.log ('Updeted List')

friendsNames.forEach(finalList => console.log(`Assalamualaikum ${finalList} join us tommorow`))