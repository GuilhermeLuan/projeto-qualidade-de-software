import { AppDataSource } from "../data-source.js";
import {Tarefa} from "../entities/Tarefa.entity.js";

export const TarefaRepository = AppDataSource.getRepository(Tarefa);