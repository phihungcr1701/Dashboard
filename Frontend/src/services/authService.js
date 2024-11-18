import * as request from '../utils';
import { loginStart, loginSuccess, loginFailed, registerStart, registerSuccess, registerFailed } from '../redux/authSlice';

const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await request.post('auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFailed());
    }
};

const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await request.post('auth/register', user);
        dispatch(registerSuccess(res.data));
        navigate('/login');
    } catch (error) {
        dispatch(registerFailed());
    }
}

export {
    loginUser,
    registerUser
};
