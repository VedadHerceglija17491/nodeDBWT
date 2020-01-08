const Sequelize = require("sequelize");
const sequelize = new Sequelize("wt2018","root","root",{dialect:"mysql",logging:false});
const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

db.student = sequelize.import(__dirname+'/student.js');
db.godina = sequelize.import(__dirname+'/godina.js');
db.zadatak = sequelize.import(__dirname+'/zadatak.js');
db.vjezba = sequelize.import(__dirname+'/vjezba.js');


//relacije
// Veza 1-n vise knjiga se moze nalaziti u biblioteci
db.student.hasMany(db.godina,{as:'studenti',foreignKey:'studentGod'});

db.godina_vjezba = db.godina.belongsToMany(db.vjezba, {as: {singular:'vjezba', plural: 'vjezbe'}, through: 'godina_vjezba', foreignKey: 'idgodina'});
db.vjezba.belongsToMany(db.godina,{as: {singular: 'godina', plural: 'godine'},through:'godina_vjezba',foreignKey:'idvjezba'});

db.vjezba_zadatak=db.vjezba.belongsToMany(db.zadatak,{as: 'zadaci', through:'vjezba_zadatak', foreignKey:'idvjezba'});
db.zadatak.belongsToMany(db.vjezba,{as:'vjezbe',through:'vjezba_zadatak',foreignKey:'idzadatak'});


module.exports=db; 