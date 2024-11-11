import {SET_LOGIN_INTERFACE, CHECK_LOGIN, SET_REGISTER_INTERFACE, CHECK_EMAIL, ADD_ACCOUNT} from "./Constrants";

export const setLoginInterface = () => ({
    type: SET_LOGIN_INTERFACE,
    data: {
        accountItems: {
            type: ["text", "password"],
            name: ["email", "password"],
            text: ["Địa chỉ email", "Mật khẩu"]
        },
        informationItems: {
            type: [],
            name: [],
            text: []
        },
        title: "Đăng nhập"
    }
});

export const setRegisterInterface = () => ({
    type: SET_REGISTER_INTERFACE,
    data: {
        accountItems: {
            type: ["text", "password", "password"],
            name: ["email", "password", "confirmPassword"],
            text: ["Địa chỉ email", "Mật khẩu", "Xác nhận mật khẩu"]
        },
        informationItems: {
            type: ["text", "text"],
            name: ["firstName", "lastName"],
            text: ["Họ", "Tên"]
        },
        title: "Đăng kí"
    }
});

export const checkLogin = async (data) => {
    // const { email, password } = data;
    // try {
    //     return ({
    //         type: CHECK_LOGIN,
    //         check
    //     });
    // } catch (error) {
    //     console.error(error);
    //     return ({
    //         type: CHECK_LOGIN,
    //         check: false
    //     });
    // }
};

export const checkEmail = async (data) => {
    // const { email } = data;
    // try {
    //     return ({
    //         type: CHECK_EMAIL,
    //         check
    //     });
    // } catch (error) {
    //     console.error(error);
    //     return ({
    //         type: CHECK_EMAIL,
    //         check: false
    //     });
    // }
};

export const addAccount = async (data) => {
    // const { email } = data;
    // try {
    //     return ({
    //         type: ADD_ACCOUNT,
    //         check
    //     });
    // } catch (error) {
    //     console.error(error);
    //     return ({
    //         type: ADD_ACCOUNT,
    //         check: false
    //     });
    // }
};