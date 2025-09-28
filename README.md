# Projeto Qualidade de Software | To-Do List

## ✏️ Descrição do projeto
Trata-se de um sistema de gerenciamento de tarefas por meio de uma To-Do lista. A aplicação permite adicionar, marcar como concluído e  excluir tarefas de forma intuitiva. 

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
**1.Funcionalidade (atender aos requisitos).**
Por meio do sistema de gerenciamento de tarefas o usuário  consegue de forma consistente Adicionar, Marcar como concluídas, Remover uma tarefa, bem como Visualizar sua lista de tarefas. Dessa forma, a aplicação atende aos requisitos de :
- Adequação reconhecível: aplicação é apropriada para atender as necessidades de gerenciamento de tarefas.
- Capacidade de aprendizado: o sistema é fácil e simples  de aprender como o utiliza.
- Operabilidade: o produto possui atributos UX/UI que facilitam seu uso e controle.
- Proteção de erro do usuário: com uma interface simples a aplicação é capaz proteger o usuário de erros de uso na aplicação.
- Estética da interface de usuário: usando os princípios de UX/UI foi construída uma interface agradável, simples e intuitiva.
- Acessibilidade: o produto, por ser uma aplicação web,pode ser utilizado por várias pessoas com características e capacidades diversas.
**2.Confiabilidade (tratamento de erros, validações).**

**3.Usabilidade (facilidade de uso, acessibilidade).**

**4.Eficiência (desempenho adequado).**

**5.Manutenibilidade (código limpo, modular).**

## 🚀 Instruções de instalação


## 👩‍💻🧑‍💻 Integrantes e funções
- **Guilherme Basilio:** Frontend e Design
- **Guilherme Luan:** Backend e Líder do grupo
- **Kesia Viana:** Frontend
- **Larissa Kailane:** Backend
- **Luciana Liebl:** Frontend
- **Luís Felipe Medrado:** Frontend