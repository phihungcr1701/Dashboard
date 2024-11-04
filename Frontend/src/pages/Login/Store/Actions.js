import {SET_LOGIN_INTERFACE, CHECK_LOGIN} from "./Constrants";
import axios from "axios";

export const setLoginInterface = () => ({
    type: SET_LOGIN_INTERFACE,
    data: {
        accountItems: {
            type: ["text", "password"],
            id: ["email", "password"],
            name: ["Email address", "Password"]
        },
        informationItems: {
            type: [],
            id: [],
            name: []
        },
        title: "LOGIN"
    }
})

export const checkLogin = async (data) => {
    const { email, password } = data;
    try {
        const response = await axios.get('http://localhost:8080/api/getAccount');
        const check = response.data.data.some(item => item.email === email && item.password === password);
        return ({
            type: CHECK_LOGIN,
            check
        });
    } catch (error) {
        console.error(error);
        return ({
            type: CHECK_LOGIN,
            check: false
        });
    }
};