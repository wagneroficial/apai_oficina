const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('carros', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    contato: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    modelo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    placa: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//Criar a tabela
//User.sync();
//Verificar se há alguma diferença na tabela, realiza a alteração
//User.sync({ alter: true })

module.exports = User;