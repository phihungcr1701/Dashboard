import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false
        },
        register: {
            currentUser: null,
            isFetching: false,
            error: false
        },
        logout: {
            isFetching: false,
            error: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.currentUser = action.payload;
            state.login.isFetching = false;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.register.currentUser = action.payload;
            state.register.isFetching = false;
            state.register.error = false;
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
        },
        logoutStart: (state) => {
            state.logout.isFetching = true;
        },
        logoutSuccess: (state) => {
            state.login.currentUser = null;
            state.logout.isFetching = false;
            state.logout.error = false;
        },
        logoutFailed: (state) => {
            state.logout.isFetching = false;
            state.logout.error = true;
        },
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed
} = authSlice.actions;

export default authSlice;