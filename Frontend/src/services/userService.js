import { axiosInstance } from '../utils';


const getAllUser = async (type = "Danh sách người dùng", inputSearch = null, activeColumn = null, isSortAsc) => {
    try {
        const users = await axiosInstance.get('getInformation', {
            params: {
                type: type,
                inputSearch: inputSearch,
                activeColumn: activeColumn,
                isSortAsc: isSortAsc
            }
        })
        return users.data;
    } catch (error) {
        console.log(error);
    }
};

const getUserInfors = async (id) => {
    try {
        const res = await axiosInstance.get("getUserInfors", {
            params: {
                id: id
            }
        })
        return res.data;
    } catch (error) {
        throw error;
    }
}
const editUser = async (infors) => {
    try {
        const res = await axiosInstance.put("editInformation", infors);
        return res.data;
    } catch (error) {
        throw error;
    }
}


export {
    getAllUser,
    editUser,
    getUserInfors
};