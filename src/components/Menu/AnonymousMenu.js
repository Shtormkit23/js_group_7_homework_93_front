import React from "react";
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const AnonymousMenu = () => {
    return (
        <>
            <Button component={NavLink} to="register" color="inherit" style={{fontWeight: 600, fontSize: "20px"}}>Sign Up</Button>
            <Button component={NavLink} to="/login" color="inherit" style={{fontWeight: 600, fontSize: "20px"}}>Sign In</Button>
        </>
    );
};

export default AnonymousMenu;