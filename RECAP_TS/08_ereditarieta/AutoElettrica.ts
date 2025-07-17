import Automobile from "./Automobile";

export default class AutoElettrica extends Automobile{
    private autonomia: number;

    constructor(varMarca: string, varModello: string, varAutonomia: number){
        super(varMarca, varModello)
        this.autonomia = varAutonomia
    }
}