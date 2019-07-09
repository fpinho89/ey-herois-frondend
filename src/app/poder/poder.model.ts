export class Poder {

    id:number;
    nome:string;

    constructor(init?: Partial<Poder>) {
        Object.assign(this, init);
    }

}
