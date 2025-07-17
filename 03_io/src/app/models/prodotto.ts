export class Prodotto {

    nom?: string;
    des?: string;
    pre?: number;

    constructor(varNome?: string, varDescr?: string, varPrezzo?: number){
        this.nom = varNome;
        this.des = varDescr;
        this.pre = varPrezzo;
    }

}
