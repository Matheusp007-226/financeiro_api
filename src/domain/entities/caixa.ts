import crypto from 'crypto';

type props = {
    "descricao": string,
    "dataAtualizacao"?: Date,
    "saldo": number
};

export class Caixa{

    public id: string;
    public descricao: string;
    public dataAtualizacao: Date;
    public saldo: number;

    constructor(props: props, id?: string){
        this.descricao = props.descricao;
        this.dataAtualizacao = props.dataAtualizacao || new Date();
        this.saldo = props.saldo;
        this.id = id || crypto.randomUUID();
    }

    public addSaldo(valor: number){
        
        this.saldo += valor;
        this.dataAtualizacao = new Date();
    }

    public subSaldo(valor: number){
        
        this.saldo -= valor;
        this.dataAtualizacao = new Date();
    }

    public updateDescricao(descricao: string){
        this.descricao = descricao;
    }

    public toJson(){

        return {
            id: this.id,
            descricao: this.descricao,
            dataAtualizacao: this.dataAtualizacao,
            saldo: this.saldo
        }
    }

}