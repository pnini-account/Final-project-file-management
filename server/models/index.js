const {Sequelize} = require('sequelize');
const {sequelize,DataTypes} = require('./sequelize');
const { applyExtraSetup } = require('./extra-setup');

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./user')
db.warning = require('./warning')
db.file = require('./file')
db.folder = require('./folder')
db.category = require('./category')

applyExtraSetup();

db.sequelize.sync({ alter: true })
.then(() => {
console.log('yes re-sync done!')
})
module.exports = db
