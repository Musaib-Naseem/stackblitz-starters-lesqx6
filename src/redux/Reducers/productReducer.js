import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  products: [
    {
      id: 1,
      title: 'dipesh',
      category: 'programmer',
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};

export default productReducer;
