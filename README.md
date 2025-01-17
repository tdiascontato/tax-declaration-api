# Tax Declaration API

## Descrição

A Tax Declaration API é um sistema desenvolvido para gerenciar usuários e declarações fiscais. Utiliza o framework [NestJS](https://nestjs.com/) para organização de módulos e é projetada para ser executada em um ambiente Docker.

---

## Endpoints

### Usuários (`/users`)

#### POST `/users/register`
Registra um novo usuário.

- **Body:**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Respostas:**
  - **201 Created:** Usuário criado com sucesso.
  - **400 Bad Request:** Email já está em uso ou dados inválidos.

#### GET `/users/:id`
Obtém informações de um usuário pelo seu ID.

- **Parâmetros:**
  - `id`: ID do usuário.
- **Respostas:**
  - **200 OK:** Detalhes do usuário.
  - **404 Not Found:** Usuário não encontrado.

#### GET `/users`
Retorna todos os usuários cadastrados.

- **Respostas:**
  - **200 OK:** Lista de usuários.

---

### Declarações (`/declarations`)

#### POST `/declarations`
Cria uma nova declaração fiscal.

- **Body:**
  ```json
  {
    "userId": "number",
    "year": "number",
    "amount": "number"
  }
  ```
- **Respostas:**
  - **201 Created:** Declaração criada com sucesso.
  - **400 Bad Request:** Dados inválidos.

#### GET `/declarations/user/:userId`
Lista todas as declarações fiscais de um usuário.

- **Parâmetros:**
  - `userId`: ID do usuário.
- **Respostas:**
  - **200 OK:** Lista de declarações.
  - **404 Not Found:** Nenhuma declaração encontrada para o usuário.

#### GET `/declarations/:id`
Obtém informações de uma declaração fiscal pelo ID.

- **Parâmetros:**
  - `id`: ID da declaração.
- **Respostas:**
  - **200 OK:** Detalhes da declaração.
  - **404 Not Found:** Declaração não encontrada.

#### GET `/declarations`
Retorna todas as declarações fiscais cadastradas.

- **Respostas:**
  - **200 OK:** Lista de declarações.

---

### Página Principal (`/`)

#### GET `/`
Retorna uma mensagem de boas-vindas.

- **Respostas:**
  - **200 OK:** Texto "Hello World!"

---

## Arquitetura do Projeto

O projeto segue a arquitetura modular do NestJS, dividindo funcionalidades em módulos independentes:

- **UsersModule:** Gerencia usuários e autenticação.
- **DeclarationsModule:** Gerencia declarações fiscais.
- **AppModule:** Configuração principal da aplicação.

Cada módulo é composto por:
- **Controller:** Define as rotas e interações HTTP.
- **Service:** Contém a lógica de negócio.
- **DTOs:** Define os formatos de dados de entrada e saída.
- **Entidades:** Representações das tabelas no banco de dados.

---

## Execução com Docker

1. Certifique-se de ter o Docker instalado em sua máquina.
2. Clone o repositório:
   ```bash
   git clone https://github.com/tdiascontato/tax-declaration-api
   cd tax-declaration-api
   ```
3. Construa e inicie os contêineres:
   ```bash
   docker-compose up --build
   ```
4. A API estará acessível em: `http://localhost:3000`

### Comandos úteis

- **Parar os contêineres:**
  ```bash
  docker-compose down
  ```
- **Reiniciar os contêineres:**
  ```bash
  docker-compose restart
  ```

---

## Tecnologias Utilizadas

- **NestJS:** Framework backend modular.
- **Docker:** Contêinerização da aplicação.
- **PostgreSQL:** Banco de dados relacional.
- **TypeORM:** ORM para integração com o banco de dados.

