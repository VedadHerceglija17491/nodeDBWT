const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Zadatak = sequelize.define("zadatak", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        naziv: Sequelize.STRING,
        postavka: Sequelize.STRING   
    });

    return Zadatak;
}