import { Universo } from './../universo/universo.model';

export class Heroi {

    id:number;
    nome:string;
    poder:string;
    universo:Universo;
    dataCadastro:string;

    constructor(init?: Partial<Heroi>) {
        Object.assign(this, init);
    }
}
