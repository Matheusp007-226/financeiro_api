import { Caixa } from './src/domain/entities/caixa';
import {CaixaRepository} from './src/application/repositories/caixaRepository';
import {CreateCaixaUseCase} from './src/application/caixaUseCases/createCaixaUseCase';
import {GetCaixaUseCase} from './src/application/caixaUseCases/getCaixaUseCase';
import express, {Express, Request, Response} from 'express';
import { json } from 'stream/consumers';


const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// const caixa1 = new Caixa('Caixa - conta corrente', new Date(), 200);
// const caixa2 = new Caixa('Bradesco - conta corrente', new Date(), 300);

const caixaRepository = new CaixaRepository();

app.post('/caixa', (req: Request, res: Response) => {
    const createCaixa = new CreateCaixaUseCase(caixaRepository);
    res.status(201).json(createCaixa.execute(req.body));
});

app.get('/caixa', (req: Request, res: Response) => {
    const getCaixa = new GetCaixaUseCase(caixaRepository);
    res.status(200).json(getCaixa.execute());
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

