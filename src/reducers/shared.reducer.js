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
