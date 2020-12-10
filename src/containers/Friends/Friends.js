import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {fetchFriends} from "../../store/actions/eventsActions";
import FriendCard from "../../components/FriendCard/FriendCard";

const Friends = () => {
    const dispatch = useDispatch();
    const friends = useSelector(state => state.allEvents.friends);

    useEffect(() => {
        dispatch(fetchFriends());
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container direction="column" className="column" spacing={2}>
                {friends && friends[0] && (friends[0].friends).map(friend => {
                    return <FriendCard
                        key={friend._id}
                        id={friend._id}
                        email={friend.email}
                    />
                })}
            </Grid>
        </Grid>
    );
};

export default Friends;