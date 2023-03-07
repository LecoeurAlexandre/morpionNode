import { poserUneQuestion } from "../tools/tools.js";

export class Ihm {
    constructor() {
        this.table = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
        this.coordinates = []
        this.whichPlayer = true
        this.counter = 0
    }

    async instructions() {
            for(let i=0; i<this.table.length; i++) {
                let ligne = ''
                for(let j=0; j<this.table[i].length; j++){
                    ligne += '|'+this.table[i][j]+'|'
                }
                console.log(ligne)
            }
            do {
                console.log("Bienvenue au jeu du morpion")
                if (this.whichPlayer) {
                    console.log("Au joueur A de jouer")
                } else {
                    console.log("Au joueur B de jouer")
                }
                const x = await poserUneQuestion("Veuillez renseigner l'axe horizontal")
                const y = await poserUneQuestion("Veuillez renseigner l'axe vertical")
                if (x < 3 || y < 3) {} 
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