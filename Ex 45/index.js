function carAssembly(manufacturer, carModel) {
    var Options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Options[_i - 2] = arguments[_i];
    }
    var carBody = {
        Manufacturer: manufacturer,
        model: carModel
    };
    Options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        carBody[key.trim()] = value.trim();
    });
    return carBody;
}
var myDreamCar = carAssembly("Nissan", "GTR", "color : White Godzilla edition", "SpoilerWing :True");
console.log(myDreamCar);
