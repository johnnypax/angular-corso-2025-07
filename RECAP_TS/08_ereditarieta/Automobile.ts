export default class Automobile{
    protected marca: string;
    protected modello: string;

    constructor(marca: string, modello: string){
        this.marca = marca;
        this.modello = modello;
    }

    public stampaDetaglio(): void {
        console.log(`Automobile: ${this.marca} ${this.modello}`);
    }
}