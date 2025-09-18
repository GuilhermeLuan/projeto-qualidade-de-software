import { AppDataSource } from "../data-source.js";
import { Tarefa } from "../entities/Tarefa.entity.js";
import Router from "express"

//criando as rotas
const router = Router();

router.post("/tarefas", (req, res) => {
    const {titulo, descricao} = req.body;
    const estaCompleta = false;
    const tarefaRepository = AppDataSource.getRepository(Tarefa);
    const tarefa = tarefaRepository.create({titulo, descricao, estaCompleta});
    // Salvar/enviar o ID da tarefa pra poder deletar depois
    tarefaRepository.save(tarefa);
    res.status(201).json(tarefa);

    console.log("Tarefa criada com sucesso!")
});

router.delete("/tarefas/:id", (req, res) => {
    const id = req.params.id;
    const tarefaRepository = AppDataSource.getRepository(Tarefa);
    tarefaRepository.delete({
        id: id
    })
    res.status(204).json();
    
    console.log("Tarefa apagada com sucesso!")
})

export default router;