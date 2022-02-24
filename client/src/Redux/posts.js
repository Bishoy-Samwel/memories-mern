import * as api from '../api'

//Action Types
const FETCH_ALL = 'FETCH_ALL'
const CREATE = 'CREATE'

// Initial state 
const initialState = []

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return state;
    default:
      return state;
  }
}
export default reducer;

// Action Creators

//Thunks
export const getPosts = () => async (dispatch) => {
  const action = { type: FETCH_ALL, payload: [] }

  try {
    const { data } = await api.fetchPosts();
    action.payload = data;
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
}
