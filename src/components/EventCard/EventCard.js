import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import "./EventCard.css";
import {useDispatch, useSelector} from "react-redux";
import {deleteEvent} from "../../store/actions/eventsActions";

const useStyles = makeStyles({
    main: {
        width: 600
    },
    card: {
        display: "flex",
        backgroundColor: "#d291bc",
        color: "white",
        border: "3px dashed white",
        borderRadius: 15,
        minHeight: 250
},
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 260,
        height: 220,
        borderRadius: "40%"
    },
    datetime: {
        fontSize: 30,
        fontWeight: 600,
        color: "#8B008B",
        fontFamily: 'Rochester',
        textAlign: "center"
    },
    text: {
        fontFamily: 'Rochester',
        textAlign: "center",
        fontSize: 35
    },
    cardButton: {
        paddingLeft: "40%"
    }
});

const EventCard = ({id, duration, title, data, eventUser}) => {
    const classes = useStyles();
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();

    return (
        <Grid item id={id}>
            <CardActionArea className={classes.main}>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography variant="subtitle1" color="textSecondary" className={classes.datetime}>
                                &#10059;{data}&#10059;
                            </Typography>
                            <Typography component="h2" variant="h5" className={classes.text}>
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" paragraph className={classes.text}>
                                {duration}
                            </Typography>
                            <Typography variant="subtitle1" paragraph className={classes.text}>
                                {eventUser.email}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
            {
                user && user._id === eventUser._id &&  <div className={classes.cardButton}>
                    <button className="button-4" onClick={() => dispatch(deleteEvent(id))}>
                        Delete event
                    </button>
                </div>
            }
        </Grid>
    );
};

EventCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    eventUser: PropTypes.object.isRequired
};

export default EventCard;