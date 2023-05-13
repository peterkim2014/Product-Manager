import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

  const { removeProduct, product, setProduct} = props;

  useEffect(() => {
    axios.get("http://localhost:8000/api/product")
      .then(res => {setProduct(res.data)})
      .catch(err => {console.log(err)})
  },[])

  const deletePerson = id => {
    axios.delete("http://localhost:8000/api/product/" + id)
      .then(res => {removeProduct(id)})
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>List of Items</h1>
      {
        product.map((item, index) => {
          return <p key={index}>
            Name : {item.title} <br/>
            Price : ${item.price} <br/>
            Description : {item.description} <br/>
            <Link to={`/product/${item._id}`}>View Details</Link>
            <br/>
            <Link to={`/product/edit/${item._id}`}>Edit Product</Link>
            <br/>
            <button onClick={e => {deletePerson(item._id)}}>Delete Product</button>
          </p>
        })
      }
    </div>
  )
}

export default ProductList