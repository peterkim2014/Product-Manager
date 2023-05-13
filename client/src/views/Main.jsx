import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {

  const [product, setProduct] = useState([]);

  const removeProduct = id => {
    setProduct(product.filter(item => item._id !== id));
  }

  return (
    <div>
      <ProductForm 
        product={product}
        setProduct={setProduct}
        />
      <ProductList 
        product={product}
        setProduct={setProduct}
        removeProduct={removeProduct}
      />
    </div>
  )
}

export default Main