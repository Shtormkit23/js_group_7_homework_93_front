import {
  CREATE_EVENT_SUCCESS,
  ADD_FRIEND_SUCCESS,
  EVENTS_FAILURE,
  FETCH_EVENTS_SUCCESS,
  FETCH_FRIENDS_SUCCESS,
  FETCH_ALL_FRIENDS_SUCCESS,
  FETCH_EVENTS,
  CREATE_EVENT,
  DELETE_EVENT,
  FETCH_FRIENDS,
  FETCH_ALL_FRIENDS, ADD_FRIEND, DELETE_FRIEND
} from "../actionTypes";

export const fetchEventsSuccess = allEvents => {
  return {type: FETCH_EVENTS_SUCCESS, allEvents};
};

export const eventsFailure = error => {
  return {type: EVENTS_FAILURE, error};
};

export const fetchEvents = () => {
  return {type: FETCH_EVENTS};
};

export const createEventSuccess = () => {
  return {type: CREATE_EVENT_SUCCESS};
};

export const createEvent = eventData => {
  return {type: CREATE_EVENT, eventData};
};

export const deleteEvent = (id) => {
  return {type: DELETE_EVENT, id};
};

export const fetchFriendsSuccess = friends => {
  return {type: FETCH_FRIENDS_SUCCESS, friends};
};

export const fetchAllFriendsSuccess = allFriends => {
  return {type: FETCH_ALL_FRIENDS_SUCCESS, allFriends};
};

export const fetchFriends = () => {
  return {type: FETCH_FRIENDS};
};

export const fetchAllFriends = () => {
  return {type:FETCH_ALL_FRIENDS}
};

export const addFriendsSuccess = () => {
  return {type: ADD_FRIEND_SUCCESS};
};

export const addFriend = eventData => {
  return {type: ADD_FRIEND, eventData}
};

export const deleteFriends = (id) => {
  return {type: DELETE_FRIEND, id}
};

