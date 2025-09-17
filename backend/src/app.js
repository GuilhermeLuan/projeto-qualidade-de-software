import {AppDataSource} from "./data-source.js";

AppDataSource.initialize()
    .then(() => {
        console.log("Inicializando o banco;)")
    })
    .catch((error) => console.log("Erro ao inicializar o banco de dados :(", error))