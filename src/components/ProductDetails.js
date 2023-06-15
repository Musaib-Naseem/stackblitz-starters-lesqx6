import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SelectedProducts } from '../redux/actions/productActions';

const ProductDetails = () => {
  const { productId } = useParams();
  // console.log(productId);

  const product = useSelector((state) => state.product);

  const {image,title,price,category,description} = product;

  console.log(image)
  // console.log(product)

  const dispatch = useDispatch();

  const productDet = async () => {
    const respon = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    ).then((newData) => newData.json());

    // console.log(respon);

    dispatch(SelectedProducts(respon));
  };

  useEffect(() => {
    productDet();
  }, []);

  return (

    <div>

   <img width="100px" src={image} />
   <p>{title}</p>
   <p>{price}</p>
   <p>{category}</p>

   <p>{ description}</p>


  )


    </div>


  )
};

export default ProductDetails;
