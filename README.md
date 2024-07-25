# Lista de Tarefas

Este é um projeto de Lista de Tarefas criado usando React. A aplicação permite adicionar, remover, completar e filtrar tarefas. O projeto também inclui um recurso de busca para filtrar tarefas por texto.

## Deploy

O site está disponível em: [Cosmic React To-Do List](https://cosmic-react-to-do-list.netlify.app/)

## Funcionalidades

- Adicionar novas tarefas com texto e categoria.
- Completar tarefas marcando-as como concluídas.
- Remover tarefas da lista.
- Filtrar tarefas por status (Todas, Concluídas, Pendentes).
- Ordenar tarefas em ordem alfabética (A-Z, Z-A).
- Buscar tarefas por texto.

## Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- CSS
- Vite (para bundling e desenvolvimento local)

## Instalação

Para executar este projeto localmente, siga as etapas abaixo:

1. Clone o repositório:

   `git clone https://github.com/a-natureza/to-do-list-react.git`

2. Navegue até o diretório do projeto:

`cd seu-repositorio`

3. Instale as dependências:

`npm install`

4. Execute o projeto:

`npm run dev`

5. Abra seu navegador e acesse:

`http://localhost:5173`

## Estrutura do Projeto
- ``App.jsx``
O componente principal da aplicação. Ele gerencia o estado das tarefas e coordena a exibição dos componentes filhos.

- ``Filter.jsx``
Componente responsável por filtrar as tarefas com base no status e na ordem alfabética.

- ``Search.jsx``
Componente responsável pela busca de tarefas pelo texto.

- ``Todo.jsx``
Componente que representa uma tarefa individual na lista de tarefas.

- ``TodoForm.jsx``
Componente que contém o formulário para adicionar novas tarefas. Inclui validação para garantir que o texto e a categoria sejam preenchidos antes de adicionar uma nova tarefa.

- ``App.css``
Arquivo de estilos CSS para a aplicação.


### Como Contribuir
Se você deseja contribuir com este projeto, siga os passos abaixo:

- Faça um fork do repositório.
- Crie uma branch para sua feature ou correção de bug (``git checkout -b feature/nova-feature``).
- Faça commit das suas alterações (``git commit -am 'Adiciona nova feature'``).
- Faça push para a branch (``git push origin feature/nova-feature``).
- Crie um novo Pull Request.