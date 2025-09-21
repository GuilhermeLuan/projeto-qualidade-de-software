import {TarefaRepository} from "../repositories/Tarefa.repository.js";

export class TarefaService {

    async criarTarefa(titulo, descricao) {
        const estaCompleta = false;
        const tarefa = TarefaRepository.create({titulo, descricao, estaCompleta});
        return await TarefaRepository.save(tarefa);
    }

    async listarTarefas() {
        // lógica para listar tarefas
        return await TarefaRepository.find();
    }

    async deletarTarefa(id) {
        // lógica para deletar tarefa
        await this.verificarTarefa(id);
        return await TarefaRepository.delete({id});
    }

    //método para verificar se a tarefa existe
    async verificarTarefa(id) {
        // lógica para verificar tarefa
        const tarefa = await TarefaRepository.findOneBy({id})
        if (!tarefa) {
            throw new Error("Tarefa inexistente.");
        }
        return tarefa;
    }

    async atualizarStatusTarefa(id, estaCompleta) {
        // lógica para atualizar o status da tarefa
        await this.verificarTarefa(id);
        return await TarefaRepository.update({id: id}, {estaCompleta: estaCompleta});
    }
}