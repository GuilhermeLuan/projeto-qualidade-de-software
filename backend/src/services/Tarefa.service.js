export class TarefaService {
    async listarTarefas(){
        // lógica para listar tarefas
        return TarefaRespository.find();
    }
}