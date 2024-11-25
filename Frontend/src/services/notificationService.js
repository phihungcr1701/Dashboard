// import * as axiosInstance from '../utils';
import { axiosInstance } from '../utils';

const getAllNotification = async () => {
    try {
        const users = await axiosInstance.get('notification/getNotification');
        return users.data;
    } catch (error) {
        console.log(error);
    }
};

const addNotification = async (title, content, accountId) => {
    try {
        const users = await axiosInstance.post('notification/addNotification', {
            title: title,
            content: content,
            accountId: accountId,
        });
        return users.data;
    } catch (error) {
        console.log(error);
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
        console.log(error);
    }
}

const delNotification = async (id) => {
    try {
        const users = await axiosInstance.delete('notification/delNotification', {
            data: { id: id }
        });
        return users.data;
    } catch (error) {
        console.log(error);
    }
}

export { getAllNotification, addNotification, editNotification, delNotification };