import { Poder } from './../poder/poder.model';
import { Universo } from './../universo/universo.model';

export class Heroi {

    id:number;
    nome:string;
    poderes:Poder[];
    universo:Universo;
    dataCadastro:string;

    constructor(init?: Partial<Heroi>) {
        Object.assign(this, init);
    }
}
