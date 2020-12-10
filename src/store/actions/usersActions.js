import {
    FACEBOOK_LOGIN,
    LOGIN_USER,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER, REGISTER_USER,
    REGISTER_USER_FAILURE,
    REGISTER_USER_SUCCESS
} from "../actionTypes";

export const registerUserSuccess = () => {
    return {type: REGISTER_USER_SUCCESS};
};
export const registerUserFailure = error => {
    return {type: REGISTER_USER_FAILURE, error};
};

export const loginUserSuccess = user => {
    return {type: LOGIN_USER_SUCCESS, user};
};

export const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
};

export const registerUser = userData => {
    return {type: REGISTER_USER, userData};
};

export const loginUser = userData => {
    return {type: LOGIN_USER, userData}
};

export const logoutUser = () => {
    return {type: LOGOUT_USER};
};

export const facebookLogin = data => {
    return {type: FACEBOOK_LOGIN, data};
};