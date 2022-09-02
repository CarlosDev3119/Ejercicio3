

export class calcularRaiz {

    constructor(
        public number: number,
        public potencia: number
    ){

        this.number = number;
        this.potencia = potencia;

    }
    
    public calcularRaiz(): number {
            
            return Math.pow(this.number, this.potencia);
    
    }
}