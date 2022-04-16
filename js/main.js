//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let img = document.querySelector("img")
let name = document.querySelector("h2")
let instructions = document.querySelector("h3")
let btn = document. querySelector("button")
let input = document.querySelector("input")

btn.addEventListener("click", () => {
    let randomDrink = input.value.split().join()
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${randomDrink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0])
        name.innerText = data.drinks[0].strDrink
        img.src = data.drinks[0].strDrinkThumb
        instructions.innerText= data.drinks[0].strInstructions
    })
    .catch(err => {console.log(`error${err}`)})
})
