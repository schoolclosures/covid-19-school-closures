import axios from 'axios';

export const types = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  RECEIVE_TEAM_MEMBERS: "RECEIVE_TEAM_MEMBERS",
};

export const API = axios.create({
  baseURL: `https://schoolclosures-api.herokuapp.com`,
}); 