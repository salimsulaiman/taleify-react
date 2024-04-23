import { FETCH_DATA, GET_STORY, GET_STORY_BY_ID, GET_STORY_BY_ID_LITERATION } from "../action/storyAction";

const initialState = {
  data: [],
  dataDetail: [],
  dataLiteration: [],
  isLoading: false,
  isLoadingDetail: false,
  isLoadingLiteration: false,
};

function storyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        isLoading: true,
      };
    case GET_STORY:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_STORY_BY_ID:
      return {
        ...state,
        dataDetail: action.payload,
        isLoadingDetail: false,
      };
    case GET_STORY_BY_ID_LITERATION:
      return {
        ...state,
        dataLiteration: action.payload,
        isLoadingLiteration: false,
      };
    default:
      return state;
  }
}

export default storyReducer;
