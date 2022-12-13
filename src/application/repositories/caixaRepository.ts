import {CaixaRepositoryInterface} from '../../domain/repositories/caixaRepositoryInterface';
import {Caixa} from '../../domain/entities/caixa';

export class CaixaRepository implements CaixaRepositoryInterface{

    private dadosCaixa: Caixa[] = [];

    async insert(caixa: Caixa): Promise<void>{
        
        this.dadosCaixa.push(caixa);
    }

    getOne(): Caixa[] {
        
        return this.dadosCaixa;
    }
}