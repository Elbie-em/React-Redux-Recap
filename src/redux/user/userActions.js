import {FETCH_USERS_REQUEST ,FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes'
import axios from 'axios'
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = (user) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const users = repose.data
      dispatch(fetchUsersSuccess(users));
    })
    .catch(e => {
      const errorMsg = e.message
      dispatch(fetchUsersFailure(errorMsg));
    })
  }
}