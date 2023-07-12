import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from 'react-use-cart';
import './ProductList.css';

const HairProducts = () => {
    const [hairProducts, setHairProducts] = useState([]); 
    const { addItem, cartTotal, items } = useCart();
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
        axios.get('http://localhost:8000/api/filterByCategory/hair')
        .then((res) => {
            setHairProducts(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        
/*         <div>
        {console.log(hairProducts)}
        <p>Please Work</p>
        </div> */
        <div className='body'>
        {console.log(hairProducts)}
        {hairProducts.map((product) => {
            return <div key={product._id}>
            <div className='productList'>
                
                <h5>{product.name}</h5>
                <p>{product.image}</p>
                <p> Price: ${product.price.toFixed(2)}</p>
                {
                    product.inStock?
                    <p>This item is in stock!</p>:
                    <p>Out of Stock!</p>
                }
                <button type="" className='btn btn-secondary btn-outline-dark' onClick={() => addToCart(product)}>Add To Cart</button> 
            </div>
            </div>
        })}
        </div>
    )
}


export default HairProducts; 