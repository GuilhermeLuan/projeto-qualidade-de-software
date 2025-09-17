const AppDataSource = new DataSource ({
    type: "sqLite",
    database: "listaTarefas.db",
    synchronize: true,
    logging: false,
    entities: [Tarefa]
});

export{AppDataSource};