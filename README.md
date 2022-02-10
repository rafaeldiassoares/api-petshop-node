
# Api Rest com NodeJS

Projeto desenvolvido durante o curso "Rest com NodeJS: API com Express e MySQL" da plataforma Alura.
Trata-se de uma simples API Rest exemplificando um sistema de agendamento de serviços em um Petshop.
Para enviar as requisições para o servidor pode-se utilizar o Insomnia ou o Postman seguindo as intruções
dos serviços REST descritos abaixo, antes devemos realizar a instalação e configuração do projeto.




## Instalação

Baixe o projeto via git utilizando o link

`https://github.com/rafaeldiassoares/api-petshop-node.git`

Para instalar e rodar o projeto execute os seguintes comandos:

```bash
  npm install 
  npm start  
```

O Projeto está configurado com nodemon então basta executar o server uma unica vez e sempre que um arquivo for alterado o servidor será reiniciado automaticamente.
O servidor está configurado para rodar na porta 3000.

Durante o desenvolvimento do projeto foi criado o arquivo [Instructions.md](https://github.com/rafaeldiassoares/api-petshop-node/blob/main/Instructions.md) onde registrei passo a passo o processo de instalação de ferramentas e recursos durante o desenvolvimento do projeto, incluindo instruções para a criação do container docker onde foi disponibilizado o banco de dados Mysql.



    
## Documentação da API

#### Retorna todos os registro:

```http
  GET /atendimentos
```

#### Retorna um registro:

```http
  GET /api/items/${id}
```

#### Cadastra um novo registro:

```http
  POST /atendimentos
```
Modelo de objeto JSON a ser persistido:

```json
  {	
	  "cliente": "Rafael Dias",
	  "pet": "Bento",
	  "servico": "Banho",
	  "status": "agendado",
	  "observacoes": "fujao",
	  "data": "25/02/2022"
  }
```

#### Altera um registro:

```http
  PATCH /atendimentos/${id}
```

Modelo de objeto JSON a ser alterado:

```json
  {
    "servico": "Banho e tosa"
  }
```

#### Deleta um registro:

```http
  DELETE /atendimentos/${id}
```

Especificar o id do item a ser deletado do banco de dados.







## Recursos utilizados

- Node: https://nodejs.org/
- Express: https://www.npmjs.com/package/express
- Nodemon: https://www.npmjs.com/package/nodemon
- Consign: https://www.npmjs.com/package/consign
- Body-parser: https://www.npmjs.com/package/body-parser
- Mysql: https://www.npmjs.com/package/mysql
- Docker: https://www.docker.com/
- Moment: https://www.npmjs.com/package/moment
