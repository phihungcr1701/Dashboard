const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const cors = require('cors');
const publicConfig = require('./config/publicConfig');
const sequelize = require('./config/conectionDB');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const authRoute = require('./routes/authRoute');
const informationRoute = require('./routes/informationRoute');
const notificationRoute = require('./routes/notificationRoute')

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true
    }
});

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
app.use('/api/notification', (req, res, next) => {
    req.io = io;
    next();
}, notificationRoute);

io.on('connection', (socket) => {
    console.log("client đã kết nối với id là: ", socket.id);
    socket.on('disconnect', () => {
        console.log("client đã ngắt kết nối với id là: ", socket.id);
    })
})

server.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});