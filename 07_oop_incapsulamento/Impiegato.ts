export default class Impiegato{
    private nome: string | undefined;
    private cognome: string | undefined;
    private eta: number | undefined;

    constructor(varNome?: string, varCognome?: string, varEta?: number){
        this.nome = varNome;
        this.cognome = varCognome;
        this.eta = varEta;
    }

    stampa(): void{
        console.log(`[Impiegato] ${this.nome} ${this.cognome} ${this.eta}`)
    }
}