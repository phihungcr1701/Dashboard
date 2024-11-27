const db = require('../models/index')

let getNotification = async () => {
    try {
        const notification = await db.Notification.findAll({
            attributes: [
                'id',
                'title',
                'content',
                'createdAt',
                [db.sequelize.col('Account.Information.name'), 'nameAuthor']
            ],
            include: [
                {
                    model: db.Account,
                    attributes: [],
                    include: [
                        {
                            model: db.Information,
                            attributes: ['name'],
                        },
                    ],
                },
            ],
        });

        return notification;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

let addNotification = async (io, data) => {
    try {
        let newNotification = await db.Notification.create({
            title: data.title,
            content: data.content,
            accountId: data.accountId
        })
        io.emit('newNotification', newNotification);
        return newNotification
    } catch (error) {
        throw error;
    }
}

let editNotification = async (io, data) => {
    try {
        let editNotification = await db.Notification.update(data, {
            where: { id: data.id }
        });
        let record = await db.Notification.findAll({
            where: {
                id: data.id
            }
        })
        io.emit('editNotification', record[0]);
        return editNotification;
    } catch (error) {
        throw error;
    }
}

let delNotification = async (io, data) => {
    try {
        let delNotification = await db.Notification.destroy({
            where: { id: data.id }
        });
        io.emit('delNotification', data.id)
        return delNotification;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getNotification,
    addNotification,
    editNotification,
    delNotification
}