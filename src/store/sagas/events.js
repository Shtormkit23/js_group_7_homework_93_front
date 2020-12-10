import axios from "../../axiosApi";
import {push} from "connected-react-router";
import {put} from "redux-saga/effects";
import {
    addFriendsSuccess,
    createEventSuccess,
    eventsFailure, fetchAllFriendsSuccess,
    fetchEvents,
    fetchEventsSuccess, fetchFriends,
    fetchFriendsSuccess
} from "../actions/eventsActions";

export function* fetchEventsSaga() {
    try {
        const response = yield axios.get("/events")
        yield put(fetchEventsSuccess(response.data));
    } catch (e) {
        yield put(eventsFailure(e.response.data));
    }
}

export function* createEventSaga({eventData}) {
    try {
        yield axios.post("/events", eventData)
        yield put(createEventSuccess());
        yield put(push('/events'));
    } catch (e) {
        yield put(eventsFailure(e.response.data));
    }
}

export function* deleteEventSaga({id}) {
    try {
        yield axios.delete(`/events/${id}`);
        yield put(fetchEvents());
    } catch (e) {
        if (e.response && e.response.data) {
            yield put(eventsFailure(e.response.data));
        } else {
            yield put(eventsFailure({global: "No internet"}));
        }
    }
}

export function* fetchFriendsSaga() {
    try {
        const response = yield axios.get("/friends")
        yield put(fetchFriendsSuccess(response.data));
    } catch (e) {
        if (e.response && e.response.data) {
            yield put(eventsFailure(e.response.data));
        } else {
            yield put(eventsFailure({global: "No internet"}));
        }
    }
}

export function* fetchAllFriendsSaga() {
    try {
        const response = yield axios.get("/friends/all")
        yield put(fetchAllFriendsSuccess(response.data));
    } catch (e) {
        if (e.response && e.response.data) {
            yield put(eventsFailure(e.response.data));
        } else {
            yield put(eventsFailure({global: "No internet"}));
        }
    }
}

export function* addFriendSaga({eventData}) {
    try {
        yield axios.post("/friends", eventData);
        yield put(addFriendsSuccess());
        yield put(push('/events'));
    } catch (e) {
        yield put(eventsFailure(e.response.data));
    }
}

export function* deleteFriendSaga({id}) {
    try {
        yield axios.delete(`/friends/${id}`);
        yield put(fetchFriends());
    } catch (e) {
        if (e.response && e.response.data) {
            yield put(eventsFailure(e.response.data));
        } else {
            yield put(eventsFailure({global: "No internet"}));
        }
    }
}


