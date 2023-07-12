import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useCart } from 'react-use-cart';  
import { useNavigate, useParams, Link } from 'react-router-dom'
import './ProductList.css';

const OneProduct = (props) => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    // adding cart features  -  q
    const { addItem , cartTotal, items } = useCart(); 
    console.log(items); // Check if the cart items are being updated correctly
    console.log(cartTotal);  // Check if the cart total is being calculated correctly 


    const addToCart = (product) => {
        const cartItem = { 
            id: product._id,
            name: product.name,
            price: product.price,
            quantity: 1,
        };
        addItem(cartItem);
        console.log('Item added to the cart')
    } 



    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    return (
        <div className='productList '>
            <div className='card-body'>
                <h3 className='card-title'>{product.name}</h3>
                <ul>
                    <li>{product.category}</li>
                    <li>{product.image}</li>
                    <li>{product.price}</li>
                </ul>
                <button type="" className='btn btn-secondary btn-outline-dark' onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default OneProduct;