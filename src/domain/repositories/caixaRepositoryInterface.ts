import {Caixa} from '../entities/caixa';

export interface CaixaRepositoryInterface{

    insert(caixa: Caixa): Promise<void>;
    getOne(): Caixa[];
}