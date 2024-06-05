function show_magicians (magicians :string []){

    magicians.forEach(name => console.log(name));

}

function make_greet(magicians){

    magicians.map(name =>console.log( `the Great ${name}`))
}


let magician_Names = ["Harry Horter","Baba Junaid Bangali","Asif Ali"]

make_greet(magician_Names)



