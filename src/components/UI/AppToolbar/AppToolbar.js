import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";
import AnonymousMenu from "../../Menu/AnonymousMenu";
import UserMenu from "../../Menu/UserMenu";

const useStyles = makeStyles(theme => ({
    mainLink: {
        color: "inherit",
        textDecoration: "none",
        "&:hover": {
            color: "inherit"
        },
        fontFamily: "Rochester",
        fontSize: "45px"
},
    staticToolbar: {
        marginBottom: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    container: {
        display: "flex"
    },
    toolbar: {
        backgroundColor: "#f0d9e8",
        color: "#d291bc",
        fontWeight: 600,
    }
}));


const AppToolbar = ({user}) => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.toolbar}>
                <Toolbar>
                    <Container className={classes.container}>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/events" className={classes.mainLink}>Events</Link>
                        </Typography>
                        {user ?
                            <UserMenu user={user}/>
                            : <AnonymousMenu/>
                        }
                    </Container>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.staticToolbar}/>
        </>
    );
};

export default AppToolbar;