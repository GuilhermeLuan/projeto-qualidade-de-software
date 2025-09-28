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
    //Pega o texto digitado no campo, se não estiver vazio chama a funçao criar elemento
    const textoTarefa = campoNovaTarefa.value.trim();
    if (textoTarefa !== '') {
        const novaTarefa = criarNovoElementoDeTarefa(textoTarefa); 
        listaDeTarefas.appendChild(novaTarefa); //adiciona o item na lista
        campoNovaTarefa.value = ''; // Limpa o campo de texto
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
listaDeTarefas.addEventListener('click', (evento) => {
  const alvo = evento.target; // O elemento exato que foi clicado

  // Verifica se o clique foi no círculo para marcar/desmarcar
  if (alvo.classList.contains('checkbox-circle')) {
    alvo.classList.toggle('completed');
  } 
  // Verifica se o clique foi no ícone da lixeira para remover
  else if (alvo.classList.contains('trash-icon')) {
    const tarefaParaRemover = alvo.parentElement;
    
    // Chama o pop-up em vez de remover diretamente
    mostrarPopupConfirmacao((confirmado) => {
      // Esta parte do código só roda DEPOIS que o usuário clica em "Sim" ou "Não"
      if (confirmado) {
        // Se o usuário clicou "Sim", remove a tarefa
        tarefaParaRemover.remove();
        // AQUI, no futuro, você também chamaria a função para deletar do back-end
      }
    });
  }
});