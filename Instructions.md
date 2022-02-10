* Pet Shop - NodeJs API

- iniciar projeto: `node init` : preencher todos os dados sobre o projeto
- instalar o express: `npm install express`
- criar index.js e iniciar o server, rodar `node index.js`
- Criar script para iniciar o server
    - em scripts: `"start": "nodemon index.js"`
    - Servidor reiniciar automaticamente quando salvar: 
        - NODEMON: `npm install --save-dev nodemon`

- Instalar o consign: `npm install consign` (organizar as rotas no app)
- Instalar o BodyParser: `npm install body-parser`
- Instalar o Mysql no NODE: `npm install mysql`


- Criando container docker com mysql:
    Exemplo de arquivo docker-compose.yml

    ```
        version: '3'

        services:
            db:
                container_name: base-mysql
                image: mysql:5.7.31
                command: --default-authentication-plugin=mysql_native_password
                restart: always
                environment:
                    MYSQL_ROOT_PASSWORD: root
                volumes:
                    - ./.docker/mysql/dbdata:/var/lib/mysql
                ports: 
            - '3306:3306'
    ```

    - Rodar com `docker-compose up -d --build`
        - Listar containers: `docker container ls`
        - inspecionar um container `docker inspect {id}`

- Conectar com o banco de dados

- Moment para trabalhar com datas
    ``npm install moment


            