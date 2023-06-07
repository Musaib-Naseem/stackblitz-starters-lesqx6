import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {setProduct} from '../redux/actions/productActions';


const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();

  const [allP,setP]=useState([])

  // console.log(allP)
  // const {id,title,category} = products[0];

  const baseUrl = 'https://fakestoreapi.com/products';

  const fetchApi = async () => {
    const resp = await fetch(`https://fakestoreapi.com/products`).then((res) =>
      res.json()
    );

    setP(resp);
    // console.log(resp);
     dispatch(setProduct(resp));

   
  };

 
  useEffect(() => {
    fetchApi();
  }, []);

  //  console.log("Products",products)

  // console.log(products)

  console.log(products);

  return (
    <div>
      <h1>Products Components</h1>
      {/* <p> { category } </p> */}

      {products.map((data) => {
        const { id, title, category, image,price } = data;

        return (
          <div
            id={id}
            style={{
              border: '1px solid grey',
              padding: '16px',
              marginBottom: '24px',
            }}
          >
            <img src={image} width="100px" />
            <p>{price}</p>
            <p> {title}</p>
            <p> {category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductComponents;
