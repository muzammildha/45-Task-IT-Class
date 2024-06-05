function carAssembly(manufacturer,carModel,...Options){
    let carBody = {
        Manufacturer:manufacturer,

        model:carModel

    };

    Options.forEach(option => {

        let [key,value] = option.split(":")

        carBody[key.trim()] = value.trim()
    })

    return carBody;
}

let myDreamCar =carAssembly ("Nissan","GTR","color : White Godzilla edition","SpoilerWing :True");

console.log(myDreamCar)