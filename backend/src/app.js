import { AppDataSource } from "./data-source.js";
import express from "express";
import tarefas from "./routes/Tarefa.router.js";
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

AppDataSource.initialize()
    .then(() => {
        console.log("Inicializando o banco ;)");

        const App = express();
        const PORT = 3000;

        App.use(express.json());

        const caminhoFrontend = path.join(__dirname, '..', '..', 'frontend');

        if (!fs.existsSync(path.join(caminhoFrontend, 'index.html'))) {
            console.warn('[AVISO] index.html não encontrado em:', path.join(caminhoFrontend, 'index.html'));
        } else {
            console.log('[OK] Servindo arquivos estáticos de:', caminhoFrontend);
        }
        App.use(express.static(caminhoFrontend));

        App.get('/', (req, res) => {
            res.sendFile(path.join(caminhoFrontend, 'index.html'));
        });

        App.use("/api", tarefas);

        App.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}! Acesse http://localhost:3000`);
        });
    })
    .catch((error) => console.log("Erro ao inicializar o banco de dados :(", error));