export class Heroi {

    id:number;
    nome:string;
    poder:string;
    universo:string;
    dataCadastro:string;

    constructor(init?: Partial<Heroi>) {
        Object.assign(this, init);
    }
}
