import { poserUneQuestion } from "../tools/tools.js";

export class Ihm {
    constructor() {
        this.coordinates = []
        this.whichPlayer = true
        this.counter = 0
    }

    async instructions() {
            do {
                console.log("Bienvenue au jeu du morpion")
                if (this.whichPlayer) {
                    console.log("Au joueur A de jouer")
                } else {
                    console.log("Au joueur B de jouer")
                }
                const x = await poserUneQuestion("Veuillez renseigner l'axe horizontal")
                const y = await poserUneQuestion("Veuillez renseigner l'axe vertical")
                this.coordinates.push({
                    x: x,
                    y: y
                })
                console.table(this.coordinates)
                this.counter += 1
                this.whichPlayer = !this.whichPlayer
            } while (this.counter != 9)
        
    }
}