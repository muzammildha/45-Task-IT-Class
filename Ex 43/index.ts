function show_magicians (magicians :string []){

    magicians.forEach(name => console.log(name));

}

function make_great(magicians){

    magicians.map(name =>console.log( `the Great ${name}`))
}


let magician_Names = ["Harry Horter","Baba Junaid Bangali","Asif Ali"]

let copyOfMagicians = magician_Names.slice()

let copy = make_great(copyOfMagicians)




