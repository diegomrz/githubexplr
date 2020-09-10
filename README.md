<h1 align="center">
  Rocket Seat - Projeto github_explorer
</h1>

<p align="center">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/last-commit/diegomrz/githubexplr">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/diegomrz/githubexplr">

  <a href="https://www.linkedin.com/in/diegomrz/">
    <img alt="Made by diegomrz" src="https://img.shields.io/badge/linkedin-diegomrz-blue">
  </a>

  <a href="https://skylab.rocketseat.com.br/">
    <img alt="Skylab RocketSeat" src="https://img.shields.io/badge/skylab-Rocketseat-blueviolet">
  </a>
  
</p>

## GoStack da RocketSeat
O GoStack é um Treinamento imersivo nas tecnologias mais modernas de desenvolvimento web e mobile oferecido pela RocketSteat.

### Sobre o App
Este app tem como objetivo tem como funcionalidade principal listar desenvolvedores e seus repositórios do github, na tela principal você pode inserir um nome de usuário para iniciar. A solução original ensinada no curso tinha um escopo diferente, sendo possível listar os repositórios e seus erros.

### Tecnologias
- TypeScript
- ReactJS

#### Persistência
LocalStorage

### Páginas
- Dashboard com lista de usuários.
- Página do usuário com sua lista de repositórios.
- Dashboard com a lista de usuários.
- Página do repositório com a lista de issues.

### Funcionalidades da aplicação
- Deve adicionar um usuário à lista a partir da inserção do <username> no campo de epsquisa e ao clicar no card, deve abrir a página com repositórios públicos.
- Deve adicionar um repositório na lista a partir da inserção do <username>/<repo> no campo de pesquisa e ao clicar no card, deve abrir a página com as issues do repositório.

### Validações da aplicação
#### Usuários
- Verifica se o campos de usuário está vazio.
- Verifica se o usuário existe no GitHub.
- Verifica se o usuário já se encontra na lista.
#### Repositórios
- Verifica se o campos de usuário está vazio.
- Verifica se o usuário existe no GitHub.

### Oportunidades de melhoria
- Remover usuários e repositórios das listas.
- Favoritar um repositório a partir da lista de usuários e adicionar à lista de repositórios se este já não estiver adicionado.
- Escolher entre acessar o repositório no git ou ir para a página do repositório na app.
- Buscar mais informações da API como branches e linguagem de programação mais utilizada no repositório.
