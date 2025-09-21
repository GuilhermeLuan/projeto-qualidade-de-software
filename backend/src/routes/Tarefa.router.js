import { AppDataSource } from "../data-source.js";
import { Tarefa } from "../entities/Tarefa.entity.js";
import Router from "express"
import {TarefaRepository} from "../repositories/Tarefa.repository.js";
import {TarefaService} from "../services/Tarefa.service.js";

//criando as rotas
const router = Router();
const tarefaService = new TarefaService();

// Tratar possibilidade de upar dados vazios
router.post("/tarefas", async (req, res) => {
    try {
        const {titulo, descricao} = req.body;
        const tarefaSalva = await tarefaService.criarTarefa(titulo, descricao);

        res.status(201).json(tarefaSalva);
    } catch (error) {
        console.error("Erro ocorreu ao adicionar a tarefa.", error)
        res.status(500).json({ message: "Erro ocorreu ao adicionar a tarefa." })
    }

    console.log("Tarefa criada com sucesso!")
});

// Tratar possibilidade de tentar apagar uma tarefa com id inexistente
router.delete("/tarefas/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const tarefaRepository = AppDataSource.getRepository(Tarefa);
        const tarefaParaDel = await tarefaRepository.findOneBy({ id: id })
        if (!tarefaParaDel) {
            res.status(404).json({ message: "Tarefa inexistente." })
        }

        await tarefaRepository.delete({
            id: id
        })
        res.status(204).json();
        
        console.log("Tarefa apagada com sucesso!")
    } catch (error) {
        console.error("Erro ocorreu ao deletar a tarefa.", error)
        res.status(500).json({ message: "Erro ocorreu ao deletar a tarefa." })
    }
})

//criando a rota para marcar e desmarcar a tarefa como completa
// ver como vai ser pra adaptar isso ao front
router.patch("/tarefas/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const tarefaRepository = AppDataSource.getRepository(Tarefa);
        const estaCompleta = req.body.estaCompleta;
        await tarefaRepository.update(
            { id: id },
            { estaCompleta: estaCompleta }
        ); 
        res.status(204).json();
    } catch (error) {
        console.error("Erro ocorreu ao atualizar a tarefa.", error)
        res.status(500).json({ message: "Erro ocorreu ao atualizar a tarefa." })
    }

    console.log("Tarefa marcada/desmarcada com sucesso!")
});

// Retorno das tarefas pro front em formato JSON
// Tentar retornar uma mensagem padrão de "Vazio" em caso de nenhuma tarefa existir no banco
router.get("/tarefas", async (req, res) => {
    try {
        const listaTarefas = await tarefaService.listarTarefas();
        res.status(200).json(listaTarefas)
    } catch (error) {
        console.error("Erro ocorreu ao listar as tarefas.", error)
        res.status(500).json({ message: "Erro ocorreu ao listar as tarefas." })
    }
})

export default router;