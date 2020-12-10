import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {deleteFriends} from "../../store/actions/eventsActions";
import {useDispatch} from "react-redux";

const useStyles = makeStyles({
    card: {
        display: "flex",
        backgroundColor: "#d291bc",
        color: "white",
        border: "3px dashed white",
        borderRadius: 15,
        width: "200px"
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        borderRadius: "40%"
    },
    text: {
        fontFamily: 'Rochester',
        textAlign: "center",
        fontSize: 19
    }
});

const FriendCard = ({id, email}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Grid item id={id}>
            <CardActionArea className={classes.main}>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5" className={classes.text}>
                                {email}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
                <div className={classes.cardButton}>
                    <button className="button-4" onClick={() => dispatch(deleteFriends(id))}>
                        Delete friend
                    </button>
                </div>
        </Grid>
    );
};

FriendCard.propTypes = {
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default FriendCard;