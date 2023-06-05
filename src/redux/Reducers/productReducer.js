
import {ActionTypes} from "../constants/actionTypes.js";

const initialState={

products:[
  {

    id:1,
    title:"dipesh",
    category:"programmer"

  }
]

}

export const productReducer=(state=initialState,{type,payload})=>{


switch(type){

case ActionTypes.setProducts:

return state;


default:

return state;


}



}