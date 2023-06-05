
import {ActionTypes} from "../constants/actionTypes";

export const setProduct=(products)=>{

  return{

    type:ActionTypes.SET_PRODUCTS,
    payload:products

  }


}



export const SelectProducts=(product)=>{

return{

  type:ActionTypes.SELECTED_PRODUCTS,
  payload:product


}


}



export const RemoveSelectedProducts=(product)=>{

return{

type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
payload:product


}


}
