const express = require('express');
const cors = require('cors');
const publicConfig = require('./config/publicConfig');
const sequelize = require('./config/conectionDB');
require('dotenv').config();
const authRoute = require('./routes/authRoute');
const informationRoute = require('./routes/informationRoute');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 8080;

publicConfig(app);
app.use(cors({
    origin: 'http://localhost:3000', // Domain của client
    credentials: true // Cho phép gửi cookies
}));
app.use(cookieParser());
app.use(express.json());
async () => await sequelize.sync();
app.use('/api/auth', authRoute);
app.use('/api/', informationRoute);

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});