import React from "react";
import {useSelector} from "react-redux";

const ProductComponents = ()=>{

  const products = useSelector((state)=>state.allProducts.products);

  console.log(products)
  return(

    <h1>Products Components</h1>

  );

}


export default ProductComponents;