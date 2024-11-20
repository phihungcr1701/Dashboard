import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import store from '../redux/store';
import authSlice from '../redux/authSlice';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/',
    withCredentials: true
});

const refreshToken = async () => {
    try {
        const response = await axiosInstance.post("auth/refresh", {});
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

axiosInstance.interceptors.request.use(
    async (config) => {
        const date = new Date();
        const state = store.getState();
        const user = state.auth.login?.currentUser;

        if (config.url === 'auth/refresh') {
            return config;
        }

        if (!user || !user.data?.accessToken) {
            return config;
        }
        const decodeToken = jwtDecode(user?.data.accessToken);

        if (decodeToken.exp < date.getTime() / 1000) {
            const refresh = await refreshToken();
            const refreshUser = {
                ...user,
                data: {
                    ...user.data,
                    accessToken: refresh.accessToken
                }
            };
            store.dispatch(authSlice.actions.loginSuccess(refreshUser));
            config.headers["token"] = `Bearer ${refreshUser.data.accessToken}`;
        } else {
            config.headers["token"] = `Bearer ${user.data.accessToken}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)


export {
    axiosInstance
};