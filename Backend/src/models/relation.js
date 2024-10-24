const Account = require('./accountModel')
const Information = require('./informationModel')

Account.hasOne(Information, {
    foreignKey: 'accountId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Information.belongsTo(Account, {
    foreignKey: 'accountId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
