import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = () => {

    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    const onChangeHandler = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/create", {
            product
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <label>
                Title 
                <input type="text" onChange={onChangeHandler}/>
            </label>
            <label>
                Price 
                <input type="number" onChange={onChangeHandler}/>
            </label>
            <label>
                Description 
                <input type="text" onChange={onChangeHandler}/>
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ProductForm