import {EVENTS_FAILURE, FETCH_ALL_FRIENDS_SUCCESS, FETCH_EVENTS_SUCCESS, FETCH_FRIENDS_SUCCESS} from "../actionTypes";

const initialState = {
  allEvents: [],
  friends: [],
  allFriends: [],
  error: null
};

const eventsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_EVENTS_SUCCESS:
      return {...state, allEvents: action.allEvents};
    case FETCH_FRIENDS_SUCCESS:
      return {...state, friends: action.friends};
    case FETCH_ALL_FRIENDS_SUCCESS:
      return {...state, allFriends: action.allFriends};
    case EVENTS_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
};

export default eventsReducer;