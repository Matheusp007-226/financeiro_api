import {CaixaRepository} from '../repositories/caixaRepository';

export class GetCaixaUseCase{

    constructor(private caixaRepository: CaixaRepository){}

    execute(){
        return this.caixaRepository.getOne();
    }

}