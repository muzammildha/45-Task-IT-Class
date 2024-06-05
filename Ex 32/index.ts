let activeUsers = ["Daniyal", "Nasir","Waseem","Ahsan","Aziz"]

let newUsers = ["Arsalan","Uzair","Danish","Farooq","Laraib"]

newUsers.forEach(newOneUsers => {
    let ourConditions = activeUsers.some(OneByOneUsers => OneByOneUsers.toLowerCase()=== newOneUsers.toLowerCase())
    if (ourConditions){

        console.log(`sorry ${newOneUsers} is already taken`)

    }else {

        console.log(`${newOneUsers} This user name is available`)
    }
    
});