import React from 'react';
import Container from "@material-ui/core/Container";
import {useSelector} from "react-redux";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes";
import "./App.css";

const App = () => {
    const user = useSelector(state => state.users.user);
    return(
        <>
            <CssBaseline />
            <AppToolbar user={user}/>
            <main>
                <Container>
                    <Routes user={user}/>
                </Container>
            </main>
        </>
    )};

export default App;
