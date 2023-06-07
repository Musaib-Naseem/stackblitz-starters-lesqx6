// import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SET_PRODUCTS":
      return { ...state, products: actions.payload };

    default:
      return state;
  }
};

export default productReducer;
