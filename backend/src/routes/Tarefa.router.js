import { AppDataSource } from "../data-source.js";
import { Tarefa } from "../entities/Tarefa.entity.js";

//criando as rotas
const router = Router();

router.post("/tarefas", (req, res) => {
    const {titulo, descricao} = req.body;
    const tarefaRepository = AppDataSource.getRepository(Tarefa);
    const tarefa = tarefaRepository.create({titulo, descricao});
    tarefaRepository.save(tarefa);
    res.status(201).json(tarefa);
});