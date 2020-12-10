import React from "react";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import {logoutUser} from "../../store/actions/usersActions";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    dropDownBtn: {
        color: "#d291bc",
        fontWeight: 600,
        fontSize: "17px"
    }
}));

const UserMenu = ({user}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.dropDownBtn}
            >
                Hello, {user.displayName ? user.displayName : user.username}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <NavLink className="button-4" to="/events">Events</NavLink>
                <NavLink className="button-4" to="/addFriend">Add Friend</NavLink>
                <NavLink className="button-4" to="/events/new">Add event</NavLink>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;