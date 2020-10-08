const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/data.db'
});

const Applicant = db.define('applicant', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    dob: {
        type:Sequelize.STRING(20),
        allowNull: false
    },
    currAddress: {
        type:Sequelize.STRING(500),
    },
    email:{
        type:Sequelize.STRING(20),
        allowNull: false
    },
    phoneNumber:{
        type:Sequelize.STRING(15),
        allowNull: false
    },
    position:{
        type:Sequelize.STRING(20),
        allowNull: false
    }

});


module.exports = {db,Applicant}