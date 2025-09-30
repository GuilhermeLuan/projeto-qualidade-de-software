import {Tarefa} from "./entities/Tarefa.entity.js";
import {DataSource} from "typeorm";

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "listaTarefas.db",
    synchronize: true,
    logging: false,
    entities: [Tarefa]
});

export {AppDataSource};