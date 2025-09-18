const botaoAdicionar = document.getElementById('botaoAdicionar');
const campoNovaTarefa = document.getElementById('novaTarefa');
const listaDeTarefas = document.getElementById('listaDeTarefas');

// Função para criar um novo item de tarefa na lista
function criarNovoElementoDeTarefa(textoTarefa) {
    const itemDaLista = document.createElement('li');

    // Cria o círculo de checkbox
    const circuloDoCheckbox = document.createElement('div');
    circuloDoCheckbox.classList.add('checkbox-circle');

        // Cria o texto da tarefa
    const spanTarefa = document.createElement('span');
    spanTarefa.classList.add('task-text');
    spanTarefa.innerText = textoTarefa;

    // Cria o ícone da lixeira
    const iconeLixeira = document.createElement('div');
    iconeLixeira.classList.add('trash-icon');
    iconeLixeira.innerHTML = '&#x1F5D1;'; // Código para o ícone da lixeira

    // Adiciona os elementos à lista
    itemDaLista.appendChild(circuloDoCheckbox);
    itemDaLista.appendChild(spanTarefa);
    itemDaLista.appendChild(iconeLixeira);

    return itemDaLista;
}

