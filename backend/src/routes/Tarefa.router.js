import { AppDataSource } from "../data-source.js";
import { Tarefa } from "../entities/Tarefa.entity.js";
import Router from "express"

//criando as rotas
const router = Router();

router.post("/tarefas", async (req, res) => {
    const {titulo, descricao} = req.body;
    const estaCompleta = false;
    const tarefaRepository = AppDataSource.getRepository(Tarefa);
    const tarefa = tarefaRepository.create({titulo, descricao, estaCompleta});

    const tarefaSalva = await tarefaRepository.save(tarefa);
    res.status(201).json(tarefa);

    console.log("Tarefa criada com sucesso!")
});

router.delete("/tarefas/:id", async (req, res) => {
    const id = req.params.id;
    const tarefaRepository = AppDataSource.getRepository(Tarefa);
    await tarefaRepository.delete({
        id: id
    })
    res.status(204).json();
    
    console.log("Tarefa apagada com sucesso!")
})

//criando a rota para marcar e desmarcar a tarefa como completa
router.patch("/tarefas/:id", async (req, res) => {
    const id = req.params.id;
    const tarefaRepository = AppDataSource.getRepository(Tarefa);
    const estaCompleta = req.body.estaCompleta;
    await tarefaRepository.update(
        { id: id },
        { estaCompleta: estaCompleta }
    ); 
    res.status(204).json();

    console.log("Tarefa marcada/desmarcada com sucesso!")
});

router.get("/tarefas", async (req, res) => {
    const tarefaRepository = AppDataSource.getRepository(Tarefa);
    const listaTarefas = await tarefaRepository.find()
    res.status(200).json(listaTarefas)
})

export default router;