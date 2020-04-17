import { API, types } from "../components.actions";

const receiveTeamMembers = (teamMembers) => ({
  type: types.RECEIVE_TEAM_MEMBERS,
  teamMembers
});

export const fetchTeamMembers = () => async(dispatch) => {
  const { data } = await API.get('/volunteers')
  dispatch(receiveTeamMembers(data))
};