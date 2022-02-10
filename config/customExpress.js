
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    //Configurando o express, adicionando o consign
    const app = express();

    //exemplo de como configurar para aceitar url-encoded
    app.use(bodyParser.urlencoded({ extended: true }));
    
    //Usar com JSON
    app.use(bodyParser.json());

    consign()
        .include('controllers')
        .into(app);

    return app;
}
