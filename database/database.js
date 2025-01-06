const sequelize = require('sequelize');

const connection = new sequelize('guiaperguntas', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = connection;