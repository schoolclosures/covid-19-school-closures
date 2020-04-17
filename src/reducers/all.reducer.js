import { types } from "../actions/components.actions";

export const sharedReducer = (state={}, action) => {
  switch (action.type) {
    case types.OPEN_MODAL: {
      return Object.assign({}, state, { modalIsOpen: true })
    }

    case types.CLOSE_MODAL: {
      return Object.assign({}, state, { modalIsOpen: false })
    }

    default: {
      return state;
    }
  } 
};

export const volunteersReducer = (state={}, action) => {
  switch (action.type) {
    case types.RECEIVE_TEAM_MEMBERS: {
      return Object.assign({}, state, { teamMembers: action.teamMembers })
    }

    default:
      return state;
  }
};