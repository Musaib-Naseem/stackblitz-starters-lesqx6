import { ActionTypes } from '../constants/actionTypes';

export const setProduct = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};

export const SelectedProducts = (product) => {

  console.log(product)
  return {
    type: 'SELECTED_PRODUCTS',
    payload: product,
  };
};

export const RemoveSelectedProducts = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    payload: product,
  };
};
