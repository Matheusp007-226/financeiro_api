import { Caixa } from "../../domain/entities/Caixa";
import { CaixaRepository } from "../repositories/caixaRepository";

export class CreateCaixaUseCase{

    constructor(private caixaRepository: CaixaRepository){}

    public execute(caixaEntrada: caixaInput): caixaOutput{

        const caixa = new Caixa(caixaEntrada);
        this.caixaRepository.insert(caixa);
        return caixa.toJson();
    }
}

type caixaInput = {

    descricao: string,
    dataAtualizacao?: Date,
    saldo: number

}

type caixaOutput = {

    id: string,
    descricao: string,
    dataAtualizacao?: Date,
    saldo: number

}