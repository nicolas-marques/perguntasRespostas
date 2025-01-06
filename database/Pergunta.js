const sequelize = require('sequelize');
const connection = require('./database');

//Criando tabela no banco de dados com o Sequelize
const Pergunta = connection.define('pergunta', {
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: sequelize.TEXT,
        allowNull: false
    }
});
Pergunta.sync({force: false}).then(() => {});


module.exports = Pergunta