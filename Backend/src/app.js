const express = require('express');
const cors = require('cors');
const publicConfig = require('./config/publicConfig');
const apiRoute = require('./routes/apiRoute');
const sequelize = require('./config/conectionDB');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//config file public
publicConfig(app);
app.use(cors());
app.use(express.json());
async () => await sequelize.sync();
app.use('/api', apiRoute);

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
