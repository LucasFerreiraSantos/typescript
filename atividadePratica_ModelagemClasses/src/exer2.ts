class Ball {
    color: string;
    circumference: number;
    material: string;

    constructor(color: string, circumference: number, material: string){
        this.color = color
        this.circumference = circumference
        this.material = material
    }

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