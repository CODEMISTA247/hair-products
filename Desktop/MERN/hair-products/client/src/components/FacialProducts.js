import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from 'react-use-cart';
import './ProductList.css';

const FacialProducts = () => {
    const [facialProducts, setFacialProducts] = useState([]);
    const { addItem , cartTotal, items } = useCart();
    console.log(items);
    console.log(cartTotal);


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
        const category = 'facial';
        axios.get('http://localhost:8000/api/filterByCategory/facial')
        .then((res) => {
            setFacialProducts(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    return (
        <div className='body'>
            {facialProducts.map((product) => {
                return <div key={product._id}>
                <div className='productList'>
                
                <h5>{product.name}</h5>
                <p>{product.image}</p>
                <p>{product.category}</p>
                <p> Price: ${product.price.toFixed(2)}</p>
                {
                    product.inStock?
                    <p>This item is in stock!</p>:
                    <p>Out of Stock!</p>
                }
                <button className='btn btn-secondary btn-outline-dark' onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
                </div>
            })}
        </div>
    )
}


export default FacialProducts;