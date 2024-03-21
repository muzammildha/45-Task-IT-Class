let friendsNames = ['Affan','Jibran','Farhan'];

let notComing = friendsNames [0];

console.log(notComing,'Nhi aa sakta');

friendsNames.splice(0,1, 'Aamir');

friendsNames.forEach(friend => console.log(`Assalamualaikum ${friend} would yoy like to join us for dinner?`));