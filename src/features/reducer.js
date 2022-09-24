const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITY":
      return { ...state, More: [...action.payload] };
    case "ADD_BACKPACK":
      return { ...state, Backpack: [...action.payload] };
    case "ADD_ASIA":
      return { ...state, "South asia": [...action.payload] };
    case "ADD_HOTELS":
      return { ...state, Honeymoon: [...action.payload] };
    case "ADD_EUROPE":
      return { ...state, Europe: [...action.payload] };
    default:
      return state;
  }
};

export default Reducer;
