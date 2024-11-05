import * as request from '../utils';

const getAllUser = async () => {
    try {
        const users = await request.get('getInfor')
        return users.data;
    } catch (error) {
        console.log(error);
    }
};

export { getAllUser };