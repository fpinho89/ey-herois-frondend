export class Universo {
    id: number;
    nome: string;

    constructor(init?: Partial<Universo>) {
        Object.assign(this, init);
    }
}
