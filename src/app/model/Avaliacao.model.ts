import { Cliente } from './cliente.model';
export class Avaliacao{

    constructor(
        public dataAV: Date,
        public clienteAv: Cliente 
    ){}
}