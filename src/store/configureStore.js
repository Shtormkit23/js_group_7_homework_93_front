import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {createBrowserHistory} from "history";
import eventsReducer from "./reducers/eventsReducer";
import usersReducer from "./reducers/usersReducer";
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./sagas";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    allEvents: eventsReducer,
    users: usersReducer,
    router: connectRouter(history)
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
    thunkMiddleware,
    routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer,persistedState, enhancers);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    saveToLocalStorage({
        users: {
            user: store.getState().users.user
        }
    });
});

export default store;