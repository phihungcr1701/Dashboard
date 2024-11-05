import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8080/api/'
});

const get = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res;
};

export { get };