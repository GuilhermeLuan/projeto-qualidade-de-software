# Projeto Qualidade de Software | To-Do List

## ✏️ Descrição do projeto
Trata-se de um sistema de gerenciamento de tarefas por meio de uma To-Do list. A aplicação permite adicionar, marcar como concluído, excluir tarefas e visualizar a lista de forma intuitiva e prática. 

## 🛠️ Tecnologias utilizadas
Este projeto foi implementado usando as seguintes tecnologias: 

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FF4711?style=for-the-badge&logo=typeorm&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

## 🎯 Funcionalidades implementadas

### Funcionalidades Backend: 
O backend, desenvolvido em **Node.js** com **TypeScript**, é responsável pela persistência e manipulação dos dados:

- **Servidor RESTful com Express.js:** Utiliza Express para criar uma API com rotas e endpoints claros (ex: GET, POST, PUT, DELETE) para gerenciar as tarefas.
- **Gerenciamento de Status:** Controla o status de conclusão de cada tarefa (pendente/concluída).
- **Persistência de Dados com TypeORM:** O TypeORM  é implementado para mapear os dados e interagir com o banco de dados SQLite, garantindo a estrutura e a segurança das operações.

### Funcionalidades Interface: 
A interface de usuário, focada na interação do usuário:

- **Adicionar Tarefa:** permite o usuário adicionar uma atividade a sua lista de tarefas de forma simples e rápida.
- **Marcar como Concluído:** permite o usuário marcar com um check ✅ as tarefas concluídas.
**Remoção de Tarefa:** permite o usuário remover tarefas da sua lista, caso deseje.
- **Exibição da Lista:** exibe todas as tarefa adicionadas pelo usuário à lista de tarefas, as concluídas e as que ainda não foram concluídas.
- **UX/UI:** a interface foi pensada seguindo padrões de UX/UI para tornar a experiência do usuário fácil, intuitiva e prazerosa.

## ✅ Características de qualidade aplicadas
Para garantir a qualidade da aplicação, focamos nas seguintes características de qualidades estabelecidas na ISO/IEC 25010:

### 1.Funcionalidade 
Por meio do sistema de gerenciamento de tarefas o usuário  consegue de forma consistente Adicionar, Marcar como concluídas, Remover uma tarefa, bem como Visualizar sua lista de tarefas. Dessa forma, a aplicação atende aos requisitos de:

**Adequação reconhecível:** aplicação é apropriada para atender as necessidades de gerenciamento de tarefas, pois o usuário consegue: 
- digitar no campo a tarefa que tem a fazer;
- adicionar a tarefa por meio do botão adicionar grande em destaque; 
- visualizar suas tarefas já concluídas e as que ainda não foram concluídas;
- marcar a bolinha da tarefa que foi concluída, mudando a cor da bolinha para azul e riscando as palavras da atividade;
- excluir uma atividade da lista, pressionando o ícone da lixeira;

**Capacidade de aprendizado:** o sistema é fácil e simples  de aprender como o utiliza, pois tem apenas uma campo para digitação da tarefa, possui um botão grande em destaque para adionar a tarefa, um campo em forma de cículo vazio para a pessoa selecioná-lo quando concluir a atividade e um ícone de lixeira para indicar onde o usuário deve excluir a tarefa. Dessa forma, usando ícones e cores que o usuário já está habituado é fácil aprender a usar o produto. 

**Operabilidade:** o produto possui atributos UX/UI que facilitam seu uso e controle, como o uso de ícones que indicam alguma ação para o suário, cores para destacar, fontes grandes e tipografia simples.
**Proteção de erro do usuário:** com uma interface simples e bem intuitiva a aplicação é capaz proteger o usuário de erros de uso na aplicação.

**Estética da interface de usuário:** usando os princípios de UX/UI foi construída uma interface agradável, simples e intuitiva.

**Acessibilidade:** o produto pode ser utilizado por várias pessoas com características e capacidades diversas, como por exemplo pessoas com daltonismo, pois a aplicação usa cores seguras para daltônicos, além de de tipografia e fontes grandes.

### 2.Confiabilidade (tratamento de erros, validações).
A aplicação foi desenvolvida para ser confiável, garantindo que funcione de forma consistente e segura por meio do **tratamento de erros e validações**. Isso foi alcançado da seguinte forma:

- Maturidade: O sistema opera de forma estável, sem falhas em seu fluxo principal. No backend, a lógica implementada com Node.js e TypeScript garante que as operações de criar, ler e deletar tarefas sejam processadas de forma atômica e previsível, evitando a corrupção de dados no banco SQLite.

- Tolerância a Falhas: A arquitetura do backend, construída com Express.js, isola cada funcionalidade em rotas de API distintas (ex: POST /tasks, DELETE /tasks/:id). Isso significa que uma falha inesperada ao tentar deletar uma tarefa específica não impede que o sistema continue funcionando para listar ou adicionar novas tarefas.

- Recuperabilidade: O frontend lida com possíveis falhas de comunicação com o backend. As chamadas de API são estruturadas para que, em caso de erro de conexão, a aplicação não trave. Em vez disso, a operação falha de maneira controlada, permitindo ao usuário, por exemplo, recarregar a página para tentar novamente.

- Validação de Entrada: Para prevenir a inserção de dados inválidos, a interface possui uma validação clara: o botão "Adicionar" fica desabilitado enquanto o campo de texto da tarefa está vazio. Isso força o usuário a inserir um conteúdo válido e protege o banco de dados contra entradas inúteis.

### 3.Usabilidade (facilidade de uso, acessibilidade).
A usabilidade foca na **facilidade de uso e acessibilidade**, garantindo uma experiência do usuário positiva. No projeto, isso é visível em:

- Capacidade de Aprendizado: A interface é imediatamente compreensível. Isso é demonstrado pela presença de um único campo de texto e um botão de ação principal ("Adicionar"). O usuário não precisa de um tutorial para entender como realizar a principal função do sistema.

- Operabilidade: O controle da aplicação é simples e direto. O fluxo de uso é claro (digitar -> clicar -> ver resultado) e os elementos interativos utilizam ícones universalmente reconhecidos:

**O ícone de lixeira** indica claramente a ação de excluir.

**O círculo de marcação** (checkbox) ao lado da tarefa é um padrão conhecido para indicar a conclusão de um item.

- Proteção contra Erros do Usuário: Além da validação de entrada, o design minimalista protege o usuário de cometer erros. Com poucas opções na tela e ações bem definidas, reduzimos as chances de cliques acidentais ou operações indesejadas.

- Estética da Interface: Foi criado um design limpo e organizado. O uso de espaçamento adequado, uma paleta de cores consistente e fontes de boa legibilidade resulta em uma interface que não é apenas funcional, mas também visualmente agradável.

- Acessibilidade: O projeto considera a diversidade de usuários. A escolha de cores com bom contraste e fontes com tamanho legível foi intencional para garantir que pessoas com dificuldades de visão ou daltonismo possam utilizar a aplicação sem barreiras.

### 4.Eficiência (desempenho adequado).
Para garantir um **desempenho adequado**, a aplicação foi projetada para ser rápida e responsiva, utilizando os recursos de forma otimizada. Isso se manifesta em:

- Comportamento em Relação ao Tempo: A resposta da aplicação às ações do usuário, como adicionar ou marcar uma tarefa como concluída, é praticamente instantânea. Isso é obtido pela combinação de:

**Frontend Leve:** O uso de HTML, CSS e JavaScript puros, sem frameworks pesados, garante que a interface carregue e responda rapidamente no navegador.

**Backend Ágil:** O Node.js é conhecido por seu modelo de I/O não bloqueante, o que permite ao servidor processar as requisições de forma muito rápida e eficiente.

- Utilização de Recursos: A aplicação foi desenvolvida para consumir o mínimo de recursos necessários.

**No backend**, o uso do banco de dados SQLite é ideal para esta aplicação, pois ele é extremamente leve e rápido para operações de escrita e leitura de dados locais, sem a sobrecarga de um servidor de banco de dados separado.

**A biblioteca TypeORM** ajuda a criar consultas otimizadas ao banco de dados, evitando o consumo desnecessário de memória e processamento no servidor.

**5.Manutenibilidade (código limpo, modular).**

## 🚀 Instruções de instalação


## 👩‍💻🧑‍💻 Integrantes e funções
- **Guilherme Basilio:** Frontend e Design
- **Guilherme Luan:** Backend e Líder do grupo
- **Kesia Viana:** Frontend
- **Larissa Kailane:** Backend
- **Luciana Liebl:** Frontend
- **Luís Felipe Medrado:** Backend