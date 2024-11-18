const Account = require('./accountModel');
const Information = require('./informationModel');
const Notification = require('./notificationModel');

// Thiết lập mối quan hệ Account - Information
Account.hasOne(Information, {
    foreignKey: 'accountId',  // Sử dụng một khóa ngoại duy nhất
    onDelete: 'CASCADE',      
    onUpdate: 'CASCADE'       
});
Information.belongsTo(Account, { foreignKey: 'accountId' });

// Thiết lập mối quan hệ Account - Notification
Account.hasMany(Notification, {
    foreignKey: 'accountId',  // Sử dụng cùng tên khóa ngoại để tránh trùng lặp
    onDelete: 'RESTRICT',      
    onUpdate: 'RESTRICT'       
});
Notification.belongsTo(Account, { foreignKey: 'accountId' });
