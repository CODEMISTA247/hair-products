import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './ProductList.css';
import gel from '../components/images/gelbowl.webp'
import CartProduct from '../components/CartProduct';



const ProductList = (props) => {
        
    const{allProducts, setAllProducts} = props 

    const [cartItems, setCartItems] = useState([]);
        
    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then((allProducts) => {
                console.log(allProducts);
                setAllProducts(allProducts.data)
            })
            .catch((err) => {
                console.log(err);
            })
    });
/* 
    const handleAddToCart = (item) => {
        // Check if the item is already in the cart
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            // if the item already exists in thhe cart, update it's quantity
            const updatedCartItems = cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem 
            );
            setCartItems(updatedCartItems);
        } else {
            // if the item doesn't exist in the cart, add it
            const newCartItem = { ...item, quantity: 1}; 
            setCartItems([...cartItems, newCartItem]);
        }
        console.log('Item added to cart', item)
    }
 */
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
                        
                        <button type="" className='btn btn-secondary btn-outline-dark'>Add To Cart</button>
                        {/* <CartProduct onAddToCart={handleAddToCart} /> */}
                    </div>

                    

                        
                
                    
                </div>

                    
            ))
        }
        </div>
    )
    
}
    export default ProductList;