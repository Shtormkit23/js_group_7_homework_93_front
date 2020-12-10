import {takeEvery} from 'redux-saga/effects'
import {facebookLoginSaga, loginUserSaga, logoutUserSaga, registerUserSaga} from "./users";
import {
    ADD_FRIEND,
    CREATE_EVENT,
    DELETE_EVENT, DELETE_FRIEND,
    FACEBOOK_LOGIN, FETCH_ALL_FRIENDS,
    FETCH_EVENTS, FETCH_FRIENDS,
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER
} from "../actionTypes";
import {
    addFriendSaga,
    createEventSaga,
    deleteEventSaga, deleteFriendSaga,
    fetchAllFriendsSaga,
    fetchEventsSaga,
    fetchFriendsSaga
} from "./events";

export function* rootSaga() {
    yield takeEvery(REGISTER_USER, registerUserSaga);
    yield takeEvery(LOGIN_USER, loginUserSaga);
    yield takeEvery(LOGOUT_USER, logoutUserSaga);
    yield takeEvery(FACEBOOK_LOGIN, facebookLoginSaga);
    yield takeEvery(FETCH_EVENTS, fetchEventsSaga);
    yield takeEvery(CREATE_EVENT, createEventSaga);
    yield takeEvery(DELETE_EVENT, deleteEventSaga);
    yield takeEvery(FETCH_FRIENDS, fetchFriendsSaga);
    yield takeEvery(FETCH_ALL_FRIENDS, fetchAllFriendsSaga);
    yield takeEvery(ADD_FRIEND, addFriendSaga);
    yield takeEvery(DELETE_FRIEND, deleteFriendSaga);
}