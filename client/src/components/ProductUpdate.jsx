import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductUpdate = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    },[])

    const onChangeHandler = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const updateProduct = e => {
        e.preventDefault();

        let title = product.title
        let price = product.price
        let description = product.description

        axios.patch("http://localhost:8000/api/product/" + id, {
            title, price, description
        })
            .then(res => {
                console.log(res)
                navigate("/home");
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Update a Product</h1>
        <form onSubmit={updateProduct}>
            <label>
                Title 
                <input name="title" value={product.title} type="text" onChange={onChangeHandler}/>
            </label>
            <label>
                Price 
                <input name="price" value={product.price} type="number" onChange={onChangeHandler}/>
            </label>
            <label>
                Description 
                <input name="description" value={product.description} type="text" onChange={onChangeHandler}/>
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ProductUpdate