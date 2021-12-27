export const initialState = {
  term: null,
  user: null,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  // console.log(action);

  const savedUser = action.user
  console.log(savedUser)

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return {
        state,
      };
  }
};

export default reducer;

