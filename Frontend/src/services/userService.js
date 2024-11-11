import * as request from '../utils';

const getAllUser = async (type, inputSearch = null, activeColumn = null, isSortAsc) => {
    try {
        const users = await request.get('getInformation', {
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

export { getAllUser };