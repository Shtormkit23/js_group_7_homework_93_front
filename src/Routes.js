import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import NewEvent from "./containers/NewEvent/NewEvent";
import Events from "./containers/Events/Events";
import AddFriendForm from "./components/AddFriendForm/AddFriendForm";

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
    return isAllowed ?
        <Route {...props} /> :
        <Redirect to={redirectTo} />;
};

const Routes = ({user}) => {
    return (
        <Switch>
            <ProtectedRoute
                path="/events"
                exact
                component={Events}
                isAllowed={user}
                redirectTo="/login"
            />
            <ProtectedRoute
                path="/events/new"
                exact
                component={NewEvent}
                isAllowed={user}
                redirectTo="/login"
            />
            <ProtectedRoute
                path="/register"
                exact
                component={Register}
                isAllowed={!user}
                redirectTo="/"
            />
            <ProtectedRoute
                path="/login"
                exact
                component={Login}
                isAllowed={!user}
                redirectTo="/"
            />
            <ProtectedRoute
                path="/addFriend"
                exact
                component={AddFriendForm}
                isAllowed={user}
                redirectTo="/login"
            />
        </Switch>
    );
};

export default Routes;