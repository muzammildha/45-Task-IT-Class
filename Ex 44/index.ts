function makeSandwich(...ingredients:string[]){

    console.log("Making a sandwich using following items.")

    ingredients.forEach(singleIngredient => console.log("." + singleIngredient))

    console.log("Now enjoy tasty meal")

}

makeSandwich("Sandwich Bread","Chicken","Cheese","Mayo","Lettuce","Grilled beef","Sauces")
