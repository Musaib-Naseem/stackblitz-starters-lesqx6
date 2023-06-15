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


export const selectedProductReducer=(state={},actions)=>{

switch(actions.type){

  case "SELECTED_PRODUCTS":

   return { ...state,...actions.payload};

   default:

   return state;


}

}

export default productReducer;
