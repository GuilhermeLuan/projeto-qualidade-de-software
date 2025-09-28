import {AppDataSource} from "./data-source.js";
import express from "express";
import tarefas from "./routes/Tarefa.router.js"
import cors from "cors";

AppDataSource.initialize()
    .then(() => {
        console.log("Inicializando o banco;)")
        const App = express();
        App.use(cors());
        App.use(express.json());
        App.use("/api", tarefas)
        App.listen(3000, () => {
            console.log("Servidor servindo!")
        });
    })
    .catch((error) => console.log("Erro ao inicializar o banco de dados :(", error))
