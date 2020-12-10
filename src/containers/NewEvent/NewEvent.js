import React from "react";
import {useDispatch} from "react-redux";
import {createEvent as onEventCreated} from "../../store/actions/eventsActions";
import EventForm from "../../components/EventForm/EventForm";

const NewEvent = () => {
  const dispatch = useDispatch();


  const createEvent = eventData => {
    dispatch(onEventCreated(eventData));
  };


  return (
    <>
      <h1>New event</h1>
      <EventForm
          onSubmit={createEvent}
      />
    </>
  );
};

export default NewEvent;