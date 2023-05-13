import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {

    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                console.log(res)
                setProduct(res.data)})
            .catch(err => console.log(err))
    },[])

  return (
    <div>
        <h1>Item Details</h1>
        <p>Title : {product.title}</p>
        <p>Price : {product.price}</p>
        <p>Description : {product.description}</p>
    </div>
  )
}

export default ProductDetail