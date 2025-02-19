# **📌 API Message Broker**

Este projeto é uma **API** que implementa um sistema de fila assíncrona utilizando **BullMQ e Redis**, permitindo o processamento eficiente de tarefas em segundo plano. A aplicação está desenvolvida em **Node.js** com **TypeScript** e usa **ts-node** para execução do código **TypeScript**. Esse projeto consiste em uma atividade avaliativa da disciplina de **Sistemas Destribuídos".

## **📋 Pré-requisitos**

Antes de rodar o projeto, certifique-se de ter os seguintes requisitos instalados:

- Node.js (versão 18 ou superior)

- Redis

- Gerenciador de pacotes (npm ou yarn)

- Docker 

- Arquivo .env configurado corretamente


## **✅ Funcionalidades**
- Criação e gerenciamento de filas utilizando BullMQ.

- Processamento assíncrono de tarefas com Redis.

- Dashboard de monitoramento usando Bull Board.

- API estruturada com Node.js e TypeScript.

## **⚙️ Configuração do ambiente**

Crie um arquivo .env na raiz do projeto com as seguintes configurações:
```bash
# Definição do banco de dados
DATABASE_URL="postgresql://docker:docker@localhost:5456/mydb?schema=public"
REDIS_URL="redis://localhost:6380"
PORT=5000
```
Caso utilize uma porta diferente para o Redis, ajuste o valor de REDIS_URL e no Docker-compose. (O exemplo usado nesse desenvolvimento está alocado nas estruturas do sistema)

## **📦 Instalação**

1. *Primeiro:* Clone o repositório:
```bash
git clone https://github.com/7-Dodi/Api-Message-Broker.git
cd Api-Message-Broker
```

2. *Segundo:* Instale as dependências:
```bash
npm install ou yarn
```

3. *Terceiro:* Execute o servidor:
```bash
npm run dev
```

## **▶️ Executando o projeto**
1. *Primeiro:* Certifique de rodar o docker-compose:
```bash
docker-compose up -d
```

2. *Segundo:* Inicie a aplicação:
```bash
npm run dev ou yarn dev
```

3. *Terceiro:* Inice o Worker:
O ideal antes de iniciar o worker, seria criar uma tarefa a ser executada
```bash
npx ts-node src/jobs/taskWorker.ts 

#ou caso tenha o ts-node instalado (npm install -g ts-node)

ts-node src/jobs/taskWorker.ts
```

4. *Quarto (opicional):* Observe o databse:
Rode o comando abaixo e será aberto uma página na port 5555 lhe mostrando o banco de dados
```bash
npx prisma studio
```

## **🚀 Bull Board Dashboard**
Este projeto inclui uma interface gráfica para monitoramento das filas usando **Bull Board**. Para acessar o painel de controle:
1. Inicie a aplicação:
```bash
npm run dev ou yarn dev
```

2. Acessar o navegador:
```bash
http://localhost:5000/admin/queues
```
Este painel permite visualizar, pausar, excluir e monitorar as tarefas da fila em tempo real.

## **🛠️ Rotas do Servidor**

#### Retorna todos as notas (cartas/tasks):
```http
  GET http://localhost:5000/tasks/latters
```

#### Cria um nota (carta/task):

```http
  POST http://localhost:5000/tasks/latters
```

#### Ver interface gráfica:

```http
  GET http://localhost:5000/admin/queues
```

## **📌 Alunos**
#### 🧑‍💻 **Douglas da Silva Araújo**  
[![Perfil no GitHub](https://github.com/7-Dodi.png?size=100)](https://github.com/7-Dodi)  
[github.com/7-Dodi](https://github.com/7-Dodi)  

#### 🧑‍💻 **José Gabriel Ferreira Dantas**  
[![Perfil no GitHub](https://github.com/J-Gabriel-F-D.png?size=100)](https://github.com/J-Gabriel-F-D)  
[github.com/AntLacerda](https://github.com/AntLacerda)  