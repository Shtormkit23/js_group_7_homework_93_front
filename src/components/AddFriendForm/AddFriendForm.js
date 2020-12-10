import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormElement from "../UI/Form/FormElement";
import {useDispatch, useSelector} from "react-redux";
import {addFriend, fetchAllFriends} from "../../store/actions/eventsActions";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    }
  },
}));

const AddFriendForm = () => {
  const classes = useStyles();
  const friends = useSelector(state => state.allEvents.allFriends);
  const [state, setState] = useState({
    email: ""
  });
  const user = useSelector(state => state.users.user);

  const result = friends.filter(friend => friend._id !== user._id);
  const dispatch = useDispatch();
  const addFriendFunction = eventData => {
    dispatch(addFriend(eventData));
  };

  useEffect(() => {
    dispatch(fetchAllFriends());
  }, [dispatch]);


  const submitFormHandler = e => {
    e.preventDefault();
    const newFriend = {...state};
    addFriendFunction(newFriend);
  };

  const inputChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  return (
    <form
      className={classes.root}
      autoComplete="off"
      onSubmit={submitFormHandler}
    >
      {result && result.length !== null && <FormElement
          name="email"
          label="Friend email"
          required={true}
          select={true}
          options={result}
          value={state.email}
          onChange={inputChangeHandler}
      />}
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <Button type="submit" color="primary">Add friend</Button>
      </FormControl>
    </form>
  );
};

export default AddFriendForm;