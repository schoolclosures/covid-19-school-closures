import { types } from "../components.actions";

export const setCurrentTopicId = topicId => ({
  type: types.SET_CURRENT_TOPIC_ID,
  topicId,
});