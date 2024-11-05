# Gerenciador de Transações Financeiras

Este projeto é uma aplicação web para gerenciar transações financeiras, permitindo o cadastro, listagem, edição e exclusão de receitas e despesas.

## Funcionalidades

- **Cadastro de Transações**: Um único formulário para registrar tanto receitas quanto despesas.
- **Listagem de Transações**: Visualização de todas as transações com possibilidade de filtro.
- **Edição de Transações**: Modificação de dados de transações existentes.
- **Exclusão de Transações**: Remoção de transações indesejadas.
- **Categorias**: Classificação de transações com tipos como Aluguel, Pagamento, Prolabore, etc.

## Tecnologias Utilizadas

- **Backend**: Laravel
- **Frontend**: Angular
- **Banco de Dados**: MySQL

## Pré-requisitos

- PHP >= 8.0
- Composer
- Node.js e npm
- MySQL

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/dxArtur/desafio-uitec.git
   cd desafio-uitec

## Recomendo o uso do Laragon

Laragon é um ambiente de desenvolvimento leve e rápido para aplicações PHP. Ele facilita a configuração de projetos Laravel, WordPress e outros frameworks, oferecendo um fluxo de trabalho eficiente.

## Vantagens do Laragon

- **Instalação Rápida**: Laragon é fácil de instalar e configurar, permitindo que você comece rapidamente.
- **Ambiente Portátil**: Você pode usar Laragon em pen drives, facilitando o desenvolvimento em diferentes máquinas.
- **Integrado com Composer**: Laragon já vem com o Composer instalado, facilitando a gestão de dependências.
- **Suporte a Nginx e Apache**: Você pode escolher entre Nginx ou Apache como servidor web.

## Setup do projeto

1. **Baixe o Laragon**:
   - Acesse o [site oficial do Laragon](https://laragon.org/download/) e baixe a versão mais recente.

2. **Instale o Laragon**:
   - Extraia o arquivo ZIP em uma pasta de sua escolha.
   - Execute o arquivo `laragon-wamp` para iniciar o Laragon.

3. **Após instalar e abrir**:
   - Clique em root.
   - copie e cole o arquivo deste repositório.
   - volte para o laragon, abra o terminal e digite:
     ```bash
      composer install
   - Clique no botão "Start All" no Laragon para iniciar os serviços de Apache ou Nginx e MySQL.
   - clique com o botão direito em qualquer lugar dentro da janela do laragon
   - Vá na opção www, e clique em backend.
   - Clique em preferências e marque a opção de criar automaticamente hosts virtuais.
   - talvez durante o processo seja preciso parar e startar o servidor em seguida.
   - no terminal para criar as tabelas do banco de dados execute:
      ```bash
      php artisan migrate
   - em seguida
     ```bash
      php artisan serve

## Pronto, seu projeto backend já está rodando, facil né?

5. **Acesse Seu Projeto**:
   - Abra um navegador e vá para `http://backend.test` (o Laragon cria automaticamente domínios locais).

     [Em dúvidas da instalação veja essse vídeo](https://www.youtube.com/watch?v=XbgzvUL14mY&ab_channel=NodeStudioTreinamentos)
     [Em dúvidas sobre o banco de dados veja essse vídeo](https://www.youtube.com/watch?v=Re1dE15t9to&ab_channel=NodeStudioTreinamentos)

## Agora o frontend

   - Abra um terminal na pasta frontend do repositório baixado atraves do git clone
   - no terminal para baixar as dependencias execute:
      ```bash
      npm install
   - em seguida execute, para iniciar o servidor:
      ```bash
      ng serve

## Pronto, o frontend já está rodando em:  **`http://localhost:4200/`**
  
*Agora visite nossa documentação para testar e entender o funcionamento da nossa api, em:*
<br>
   `http://localhost:4200/documentation` ou `http://backend.test/api/documentation`
 <br>
  * para ambos o servidor backend precisa estar ligado.






