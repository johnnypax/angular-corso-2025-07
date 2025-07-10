export default class Impiegato{
    nome: string | undefined;
    cognome: string | undefined;
    eta: number | undefined;

    constructor(varNome?: string, varCognome?: string, varEta?: number){
        this.nome = varNome;
        this.cognome = varCognome;
        this.eta = varEta;
    }

    stampa(): void{
        console.log(`[Impiegato] ${this.nome} ${this.cognome} ${this.eta}`)
    }
}