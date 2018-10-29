import axios from "axios";
import { FETCH_USER, FETCH_1D_DATA } from "./types";

export const fetchUser = () => ({
  type: FETCH_USER,
  payload: axios.get("/api/current_user")
});

// 1DAY 
export const fetch1DataRequest = () => ({
  type: "fetch1Data/REQUEST"
});

export const fetch1DataSuccess = data => ({
  type: "fetch1Data/SUCCESS",
  data
});

export const fetch1DataError = error => ({
  type: "fetch1Data/FAILURE",
  error
});

export const fetch1dData = () => dispatch => {
  dispatch(fetch1DataRequest());

  return axios
    .get("/api/activity/1d")
    .then(({ data }) => dispatch(fetch1DataSuccess(data)))
    .catch(err => dispatch(fetch1DataError(err.response.data)));
};


// 1WEEK
export const fetchWeekRequest = () => ({
  type: "fetchWeek/REQUEST"
});

export const fetchWeekSuccess = data => ({
  type: "fetchWeek/SUCCESS",
  data
});

export const fetchWeekFailure = error => ({
  type: "fetchWeek/FAILURE",
  error
});

export const fetch1wData = () => dispatch => {
  dispatch(fetchWeekRequest());

  return axios
    .get("/api/activity/1w")
    .then(({ data }) => dispatch(fetchWeekSuccess(data)))
    .catch(err => dispatch(fetchWeekFailure(err.response.data)));
};

// 1MONTH
export const fetchMonthRequest = () => ({
  type: "fetchMonth/REQUEST"
});

export const fetchMonthSuccess = data => ({
  type: "fetchMonth/SUCCESS",
  data
});

export const fetchMonthFailure = error => ({
  type: "fetchMonth/FAILURE",
  error
});

export const fetch1mData = () => dispatch => {
  dispatch(fetchMonthRequest());

  return axios
    .get("/api/activity/1m")
    .then(({ data }) => dispatch(fetchMonthSuccess(data)))
    .catch(err => dispatch(fetchMonthFailure(err.response.data)));
};

// User Search Query
export const fetchUsersRequest = () => ({
  type: "fetchUsers/REQUEST"
});

export const fetchUsersSuccess = data => ({
  type: "fetchUsers/SUCCESS",
  data
});

export const fetchUsersFailure = error => ({
  type: "fetchUsers/FAILURE",
  error
});

export const fetchUsers = (query) => dispatch => {
  dispatch(fetchUsersRequest());

  return axios
    .get("/api/users", { params: { displayName: query }})
    .then(({ data }) => dispatch(fetchUsersSuccess(data)))
    .catch(err => dispatch(fetchUsersFailure(err.response.data)));
};
