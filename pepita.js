class Swallow {
    constructor() {
    this.energy = 0
    }
    eat(grams) {
    this.energy = this.energy + grams * 4
    }
    fly(kilometers) {
    this.energy = this.energy - kilometers * 2
    }
}

let amountOfBirdSeed = 0

let pepita = new Swallow()

function button_pressed() {
    let theEatInput = document.getElementById("eatInputID")
    pepita.eat(theEatInput.value)

    let theFlyInput = document.getElementById("flyInputID")
    pepita.fly(theFlyInput.value)

    updateTitle()
}

function updateTitle() {
    let headingTitle = document.getElementById("mainTitle")
    headingTitle.innerHTML = "Pepita's energy: " + pepita.energy

    if (pepita.energy < 0) {
        headingTitle.innerHTML = "Pepita's energy is too low - Add more food"
        headingTitle = document.getElementById("mainTitle").style.color = "red";
        } else {
        headingTitle.innerHTML = "Pepita's energy: " + pepita.energy
        headingTitle = document.getElementById("mainTitle").style.color = "black";
    }
}