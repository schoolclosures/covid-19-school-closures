import { API, types } from "../components.actions";

const subscribeSuccess = () => ({
  type: types.SUBSCRIBE_SUCCESS
});

const subscribeFailure = () => ({
  type: types.SUBSCRIBE_FAILURE
});

const subscribeReset = () => ({
  type: types.RESET_SUBSCRIBE
});
  
export const subscribeToNewsletter = (emailAddress) => async(dispatch) => {
  try {
    const { data } = await API.post('/newsletter', { 
      emailAddress
    });

    dispatch(subscribeSuccess(data));
  } catch (err) {
    dispatch(subscribeFailure());
  } finally {
    setTimeout(() => dispatch(subscribeReset()), 30000);
  }
};