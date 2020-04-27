import axios from 'axios';

export const types = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  RECEIVE_TEAM_MEMBERS: "RECEIVE_TEAM_MEMBERS",
  SET_CURRENT_TOPIC_ID: "SET_CURRENT_TOPIC_ID",
};

export const API = axios.create({
  baseURL: `https://schoolclosures-api.herokuapp.com`,
}); 