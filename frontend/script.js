const botaoAdicionar = document.getElementById('botaoAdicionar');
const campoNovaTarefa = document.getElementById('novaTarefa');
const listaDeTarefas = document.getElementById('listaDeTarefas');


function criarNovoElementoDeTarefa(textoTarefa) {
    const itemDaLista = document.createElement('li');

  
    const circuloDoCheckbox = document.createElement('div');
    circuloDoCheckbox.classList.add('checkbox-circle');

    // Cria o texto da tarefa
    const spanTarefa = document.createElement('span');
    spanTarefa.classList.add('task-text');
    spanTarefa.innerText = textoTarefa;

    // Cria o ícone da lixeira
    const iconeLixeira = document.createElement('div');
    iconeLixeira.classList.add('trash-icon');
    iconeLixeira.innerHTML = '&#x1F5D1;'; 


    itemDaLista.appendChild(circuloDoCheckbox);
    itemDaLista.appendChild(spanTarefa);
    itemDaLista.appendChild(iconeLixeira);

    return itemDaLista;
}

// Evento para adicionar uma nova tarefa
botaoAdicionar.addEventListener('click', () => {
    const textoTarefa = campoNovaTarefa.value.trim();
    if (textoTarefa !== '') {
        const novaTarefa = criarNovoElementoDeTarefa(textoTarefa);
        listaDeTarefas.appendChild(novaTarefa);
        campoNovaTarefa.value = ''; // Limpa o campo de texto
    }
});

// Evento para marcar/desmarcar a tarefa como completa
listaDeTarefas.addEventListener('click', (evento) => {
    const alvo = evento.target;
    // Verifica se o clique foi no círculo
    if (alvo.classList.contains('checkbox-circle')) {
        alvo.classList.toggle('completed');
        alvo.nextElementSibling.classList.toggle('completed');
    }
});