import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (poems = [], action) => {
  switch (action.type) {
    case DELETE:
      return poems.filter((poem) => poem._id !== action.payload)
    case LIKE:
    case UPDATE:
      return poems.map((poem) => poem._id === action.payload._id ? action.payload : poem)
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...poems, action.payload];
    default:
      return poems;
  }
};
