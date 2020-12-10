import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {fetchEvents} from "../../store/actions/eventsActions";
import EventCard from "../../components/EventCard/EventCard";
import Friends from "../Friends/Friends";

const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.allEvents.allEvents);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <Grid container direction="column" spacing={2}>
        <Friends/>
      <Grid item container direction="row" spacing={2} style={{marginTop: "20px"}}>
        {events.map(event => {
          return <EventCard
            key={event._id}
            id={event._id}
            title={event.title}
            duration={event.duration}
            data={event.data}
            eventUser={event.user}
          />
        })}
      </Grid>
    </Grid>
  );
};

export default Events;