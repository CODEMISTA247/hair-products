import React, { useState } from 'react';
import axios from 'axios';



const CartProduct = ({ product }) => {
    const [quantity, setQuantity] = useState(1); // Setting the quantity of each product.

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 1) {
            setQuantity(value);
        }
    };

    const handleAddToCart = () => {
        const cartProduct = {
            ...product,
            quantity: quantity,
            total: product.price * quantity,
        };
        // add the cartItem to the cart
        // I can  store the cart items in state or use a global state management like REDUX 
        console.log('Item added to cart:', cartProduct);
    };

    return (
        <div className='cart-item'>
            <h5>{product.name}</h5>
            <p>Price: ${product.price.toFixed(2)}</p>
            <label for="">
                quantity:
                <input type="number" min="1" value={quantity} onChange={handleQuantityChange}/>
            </label>
            <p>Total: ${(product.price * quantity)}</p>
            <button className='btn btn-secondary' onClick={handleAddToCart}> </button>
        </div>
    );
}


export default CartProduct;