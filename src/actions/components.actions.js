import axios from 'axios';

export const types = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  RECEIVE_TEAM_MEMBERS: "RECEIVE_TEAM_MEMBERS",
  SET_CURRENT_TOPIC_ID: "SET_CURRENT_TOPIC_ID",
  SUBSCRIBE_TO_NEWSLETTER: "SUBSCRIBE_TO_NEWSLETTER",
  SUBSCRIBE_SUCCESS: "SUBSCRIBE_SUCCESS",
  SUBSCRIBE_FAILURE: "SUBSCRIBE_FAILURE",
  RESET_SUBSCRIBE: "RESET_SUBSCRIBE",
};

export const API = axios.create({
  baseURL: `https://schoolclosures-api.herokuapp.com`,
//   baseURL: `http://localhost:3000`,
});