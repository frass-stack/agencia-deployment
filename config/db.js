import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

//console.log(process.env.DB_HOST);

//configuramos sequelize, con la db, el user, pass y config local.
const db = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
})

export default db;
