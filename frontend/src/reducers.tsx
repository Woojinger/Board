const initialState = {
  page: "HOME"
};

/**
 * page state
 */
export const pageReducer = (state = initialState, action: any) => {
  console.log(state)
  switch (action.type) {
    case "HOME":
      return Object.assign({}, state, {
        page: "HOME"
      });
    case "ABOUT":
      return Object.assign({}, state, {
        page: "ABOUT"
      });
    case "PORTFOLIO":
      return Object.assign({}, state, {
        page: "PORTFOLIO"
      });

    default:
      return state;
  }
};