import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormElement from "../UI/Form/FormElement";
import {TextField} from "@material-ui/core";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    }
  },
}));

const EventForm = ({onSubmit}) => {
  const classes = useStyles();
  const error = useSelector(state => state.allEvents.error);
  const [state, setState] = useState({
    title: "",
    duration: "",
    data: "",
  });

  const submitFormHandler = e => {
    e.preventDefault();
    const newEvent = {...state};
    onSubmit(newEvent);
  };

  const inputChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  const getFieldError = fieldName => {
    try {
      return error.errors[fieldName].message;
    } catch(e) {
      return undefined;
    }
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={submitFormHandler}
    >
      <FormElement
          error={getFieldError("title")}
          name="title"
          label="Event title"
          required={true}
          value={state.title}
          onChange={inputChangeHandler}
      />
      <FormElement
          error={getFieldError("duration")}
          name="duration"
          label="Event duration"
          required={true}
          value={state.duration}
          onChange={inputChangeHandler}
      />
      <TextField
          error={getFieldError("username")}
          id="date"
          type="date"
          name="data"
          className={classes.textField}
          value={state.data}
          onChange={inputChangeHandler}
      />
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <Button type="submit" color="primary">Create</Button>
      </FormControl>
    </form>
  );
};

export default EventForm;