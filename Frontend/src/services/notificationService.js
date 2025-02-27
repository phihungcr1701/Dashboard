import { axiosInstance } from '../utils';

const getAllNotification = async () => {
    try {
        const users = await axiosInstance.get('notification/getNotification');
        return users.data;
    } catch (error) {
        throw error;
    }
};

const addNotification = async (title, content, accountId) => {
    try {
        const res = await axiosInstance.post('notification/addNotification', {
            title: title,
            content: content,
            accountId: accountId,
        });
        return res.data;
    } catch (error) {
        throw error;
    }
}

const editNotification = async (id, title, content) => {
    try {
        const users = await axiosInstance.put('notification/editNotification', {
            id: id,
            title: title,
            content: content,
        });
        return users.data;
    } catch (error) {
        throw error;
    }
}

const delNotification = async (id) => {
    try {
        const users = await axiosInstance.delete('notification/delNotification', {
            data: { id: id }
        });
        return users.data;
    } catch (error) {
        throw error;
    }
}

export {
    getAllNotification,
    addNotification,
    editNotification,
    delNotification
};