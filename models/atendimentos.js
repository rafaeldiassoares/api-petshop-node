const moment = require('moment');
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    //Método de cadastro de dados
    adiciona(atendimento, res) { 
        //Formatando datas com o moment       
        const dataCriacao = moment().format('YYYY-MM-DD hh:mm:ss');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        
        //Validações
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao); //validar se é igual ou maior que a data de criação
        const clienteEhValido = atendimento.cliente.length >= 5; //Nome maior ou igual a 5 caracteres

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ];

        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length;

        if(existemErros) {
            res.status(400).json(erros);
        } else {
            //criando objeto com dados e datas tratadas
            const atendimentoDatado = {...atendimento, dataCriacao, data};
            const sql = 'INSERT INTO Atendimentos SET ?';
    
            //executando query sql
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro) {
                    //Caso erro retornar erro
                    res.status(400).json(erro);
                } else {                
                    res.status(201).json(atendimento);
                }
            });
        }
    }

    lista(res) {
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        });
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0];
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(atendimento);
            }
        });
    }

    altera(id, valores, res) {
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');        
        }

        const sql = 'UPDATE Atendimentos SET ? WHERE id=?';

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({...valores, id});
            }
        });
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Atendimentos WHERE id=?';

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({id});
            }
        });
    }
}

module.exports = new Atendimento;