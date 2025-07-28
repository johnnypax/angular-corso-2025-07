import { Evento } from "./evento";

export class Risposta {
    status?: string;
    data?: string | Evento | Evento[];
}
