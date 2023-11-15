class Ball {
    constructor(public color: string, public circumference: number, public material: string){}

    changeColor(newColor: string): void{
        this.color = newColor
    }
    
    showColor(): void{
        console.log(this.color)
    }
}

const ball = new Ball("Azul", 1.35, "Couro")

ball.changeColor("Vermelho")
ball.showColor()

// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor