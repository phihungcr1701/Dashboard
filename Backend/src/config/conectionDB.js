const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME || 'PBL4', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    define: {
        // timestamps: false, sử dụng trường createAt, updateAt
        freezeTableName: true
    }
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Kết nối thành công');
    } catch (error) {
        console.error('Kết nối thất bại, ', error);
    }
}
connectDB();
module.exports = sequelize;