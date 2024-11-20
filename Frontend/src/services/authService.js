// import * as axiosInstance from '../utils';
import { axiosInstance } from '../utils';
import { loginStart, loginSuccess, loginFailed, registerStart, registerSuccess, registerFailed, logoutStart, logoutSuccess, logoutFailed } from '../redux/authSlice';

const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axiosInstance.post('auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFailed());
        throw error;
    }
};

const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await axiosInstance.post('auth/register', user);
        dispatch(registerSuccess(res.data));
        navigate('/login');
    } catch (error) {
        dispatch(registerFailed());
        throw error;
    }
}

const logoutUser = async (dispatch, navigate) => {
    dispatch(logoutStart());
    try {
        await axiosInstance.post('auth/logout')
        dispatch(logoutSuccess());
        navigate("/login")
    } catch (error) {
        dispatch(logoutFailed());
        throw error;
    }
}

export {
    loginUser,
    registerUser,
    logoutUser
};
