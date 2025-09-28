const botaoAdicionar = document.getElementById('botaoAdicionar');
const campoNovaTarefa = document.getElementById('novaTarefa');
const listaDeTarefas = document.getElementById('listaDeTarefas');

async function carregarTarefas() {
    try {
        const response = await fetch('http://localhost:3000/api/tarefas');
        if (response.ok) {
            const tarefas = await response.json();
            listaDeTarefas.innerHTML = '';
            tarefas.forEach(tarefa => {
                const item = criarNovoElementoDeTarefa(tarefa);
                // Adiciona a classe 'completed' se a tarefa já estiver completa
                if (tarefa.estaCompleta) {
                    item.querySelector('.checkbox-circle').classList.add('completed');
                }
                listaDeTarefas.appendChild(item);
            });
        } else {
            console.error('Erro ao carregar tarefas:', response.statusText);
        }
    } catch (error) {
        console.error('Erro de conexão ao carregar tarefas:', error);
    }
}

document.addEventListener('DOMContentLoaded', carregarTarefas);

function criarNovoElementoDeTarefa(tarefa) {
    const itemDaLista = document.createElement('li');
    itemDaLista.dataset.id = tarefa.id; // Armazena o ID da tarefa no elemento

  
    const circuloDoCheckbox = document.createElement('div');
    circuloDoCheckbox.classList.add('checkbox-circle');

    // Se a tarefa estiver completa, adiciona a classe 'completed'
    if (tarefa.estaCompleta) {
        circuloDoCheckbox.classList.add('completed');
    }

    // Cria o texto da tarefa
    const spanTarefa = document.createElement('span');
    spanTarefa.classList.add('task-text');
    spanTarefa.innerText = tarefa.titulo;

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
botaoAdicionar.addEventListener('click', async () => {
    const textoTarefa = campoNovaTarefa.value.trim();
    if (textoTarefa !== '') {
        try {
            // Faz a requisição para o backend
            const response = await fetch('http://localhost:3000/api/tarefas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    titulo: textoTarefa,
                    descricao: '' // ou você pode adicionar um campo para descrição
                })
            });

            if (response.ok) {
                const tarefaSalva = await response.json();
                
                // Cria o elemento visual com a tarefa salva
                const novaTarefa = criarNovoElementoDeTarefa(tarefaSalva);
                listaDeTarefas.appendChild(novaTarefa);
                campoNovaTarefa.value = '';
                
                console.log('Tarefa salva com sucesso!');
            } else {
                const errorData = await response.json();
                console.error('Erro ao salvar tarefa:', errorData.message);
                alert('Erro ao salvar a tarefa: ' + errorData.message);
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
            alert('Erro de conexão com o servidor');
        }
    }
});

// Função para mostrar o pop-up de confirmação
function mostrarPopupConfirmacao(callback) {
  // Cria o fundo escurecido (overlay)
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';

  // Cria a caixa do pop-up
  const popupBox = document.createElement('div');
  popupBox.className = 'popup-box';

  // Adiciona o texto e os botões dentro da caixa
  popupBox.innerHTML = `
    <p>Deseja realmente apagar esta tarefa?</p>
    <button id="popup-btn-sim">Sim</button>
    <button id="popup-btn-nao">Não</button>
  `;

  // Coloca a caixa dentro do overlay
  overlay.appendChild(popupBox);
  // Adiciona tudo na página
  document.body.appendChild(overlay);

  // Função para remover o pop-up da tela
  const fecharPopup = () => document.body.removeChild(overlay);

  // O que acontece ao clicar em "Sim"
  document.getElementById('popup-btn-sim').addEventListener('click', () => {
    callback(true); // Executa a função de apagar
    fecharPopup();
  });

  // O que acontece ao clicar em "Não"
  document.getElementById('popup-btn-nao').addEventListener('click', () => {
    callback(false); // Não faz nada
    fecharPopup();
  });
}


// Evento para interagir com as tarefas na lista
listaDeTarefas.addEventListener('click', async (evento) => {
  const alvo = evento.target; // O elemento exato que foi clicado

  // Verifica se o clique foi no círculo para marcar/desmarcar
  if (alvo.classList.contains('checkbox-circle')) {
    const tarefaItem = alvo.parentElement;
    const idDaTarefa = tarefaItem.dataset.id;
    const estaCompleta = !alvo.classList.contains('completed'); // O novo estado será o inverso do atual

    try {
        const response = await fetch(`http://localhost:3000/api/tarefas/${idDaTarefa}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ estaCompleta })
        });

        if (response.ok) {
            // Se a API confirmar, atualiza a aparência
            alvo.classList.toggle('completed');
            console.log('Status da tarefa atualizado com sucesso!');
        } else {
            const errorData = await response.json();
            console.error('Erro ao atualizar status da tarefa:', errorData.message);
            alert('Erro ao atualizar o status da tarefa: ' + errorData.message);
        }
    } catch (error) {
        console.error('Erro de conexão ao atualizar status:', error);
        alert('Erro de conexão com o servidor');
    }
  }
  // Verifica se o clique foi no ícone da lixeira para remover
  else if (alvo.classList.contains('trash-icon')) {
    const tarefaParaRemover = alvo.parentElement;
    const idDaTarefa = tarefaParaRemover.dataset.id; // Pega o ID da tarefa

    // Chama o pop-up em vez de remover diretamente
    mostrarPopupConfirmacao(async (confirmado) => {
      // Esta parte do código só roda DEPOIS que o usuário clica em "Sim" ou "Não"
      if (confirmado) {
        try {
            const response = await fetch(`http://localhost:3000/api/tarefas/${idDaTarefa}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // Se o usuário clicou "Sim" e a API confirmou, remove a tarefa da tela
                tarefaParaRemover.remove();
                console.log('Tarefa removida com sucesso!');
            } else {
                const errorData = await response.json();
                console.error('Erro ao remover tarefa:', errorData.message);
                alert('Erro ao remover a tarefa: ' + errorData.message);
            }
        } catch (error) {
            console.error('Erro de conexão ao remover tarefa:', error);
            alert('Erro de conexão com o servidor');
        }
      }
    });
  }
});