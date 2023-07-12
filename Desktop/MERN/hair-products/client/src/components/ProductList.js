import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useCart } from 'react-use-cart';
import './ProductList.css';
import gel from '../components/images/gelbowl.webp'




const ProductList = (props) => {
        
    const{allProducts, setAllProducts} = props 

    const { addItem , cartTotal, items  } = useCart();
    console.log(items); // Check if the cart items are being updated correctly
    console.log(cartTotal); // Check if the cart total is being calculated correctly

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
        axios.get('http://localhost:8000/api/allProducts')
            .then((res) => {
                setAllProducts(res.data);
                console.log(res.data)
/*                 console.log(allProducts);
                setAllProducts(allProducts.data) */
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);





    return (
        <div className='body'>
            
            {
                allProducts && allProducts.map((product) => (
                    <div key={product._id}>
                
                        <div className='productList'>
                        
                        <h5>  {product.name}</h5>
                        <img src={gel} alt="Not Found"/>
                        <p>{product.image}</p>
                        <p> Price: ${product.price.toFixed(2)}</p>
                        <p> {product.category}</p>
                        {
                            product.inStock?
                            <p>This item is in stock!</p>:
                            <p>Out of Stock!</p> 
                        }

                        <Link to={`/oneProduct/${product._id}`} className='btn btn-secondary btn-outline-dark'>Details</Link>
                        
                        <button className='btn btn-secondary btn-outline-dark' onClick={() => addToCart(product)}>Add To Cart</button>
{/*                         <CartProduct onAddToCart={handleAddToCart} /> */}
                    </div>

                    

                        
                
                    
                </div>

                    
            ))
        }
        </div>
    )
    
}
    export default ProductList;