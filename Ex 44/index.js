function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Making a sandwich using following items.");
    ingredients.forEach(function (singleIngredient) { return console.log("." + singleIngredient); });
    console.log("Now enjoy tasty meal");
}
makeSandwich("Sandwich Bread", "Chicken", "Cheese", "Mayo", "Lettuce", "Grilled beef", "Sauces");
