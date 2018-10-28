import axios from "axios";
import { FETCH_USER, FETCH_1D_DATA } from "./types";

export const fetchUser = () => ({
  type: FETCH_USER,
  payload: axios.get("/api/current_user")
});


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



export const fetchWeekMonthRequest = () => ({
  type: "fetchWeekMonth/REQUEST"
});

export const fetchWeekMonthSuccess = data => ({
  type: "fetchWeekMonth/SUCCESS",
  data
});

export const fetchWeekMonthFailure = error => ({
  type: "fetchWeekMonth/FAILURE",
  error
});

// dispatch(fetch1wmData(1))
export const fetch1wmData = (activityLength) => dispatch => {
  dispatch(fetchWeekMonthRequest());

  return axios
    .get(`/api/activity/${activityLength}`)
    .then(({ data }) => dispatch(fetchWeekMonthSuccess(data)))
    .catch(err => dispatch(fetchWeekMonthFailure(err.response.data)));
};

