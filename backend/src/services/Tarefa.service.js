import {TarefaRepository} from "../repositories/Tarefa.repository.js";

export class TarefaService {

    async criarTarefa(titulo, descricao){
        const estaCompleta = false;
        const tarefa = TarefaRepository.create({titulo, descricao, estaCompleta});
        return await TarefaRepository.save(tarefa);
    }

    async listarTarefas(){
        // lógica para listar tarefas
        return await TarefaRepository.find();
    }
}