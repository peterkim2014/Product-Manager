import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {

    const { product, setProduct } = props;

    const [item, setItem] = useState({
        title: "",
        price: "",
        description: ""
    })

    const onChangeHandler = e => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        let title = item.title
        let price = item.price
        let description = item.description

        axios.post("http://localhost:8000/api/product/create", {
            title, price, description
        })
            .then(res => {
                console.log(res);
                setProduct([...product, res.data])
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <label>
                Title 
                <input name="title"  type="text" onChange={onChangeHandler}/>
            </label>
            <label>
                Price 
                <input name="price" type="number" onChange={onChangeHandler}/>
            </label>
            <label>
                Description 
                <input name="description" type="text" onChange={onChangeHandler}/>
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ProductForm