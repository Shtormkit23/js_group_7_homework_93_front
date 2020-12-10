import React from 'react';
import FacebookLoginButton from 'react-facebook-login/dist/facebook-login-render-props';
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {fbAppId} from "../../constants";
import {facebookLogin} from "../../store/actions/usersActions";

const FacebookLogin = () => {
    const dispatch = useDispatch();

    const facebookResponse = response => {
        if (response.id) {
            dispatch(facebookLogin(response));
        }
    };

    return <FacebookLoginButton
        appId={fbAppId}
        fields="name,email,picture"
        render={renderProps => (
            <Button
                onClick={renderProps.onClick}
                variant={"outlined"}
                color={"primary"}
            >
                Enter with Facebook
            </Button>
        )}
        callback={facebookResponse}
    />
}

export default FacebookLogin;