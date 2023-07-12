import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart'; 
import axios from 'axios';  



const Cart = (props) => {


    const [allProducts, setAllProducts] = useState([]);
    const {
        isEmpty,
        totatlUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        totalItems,
        emptyCart,
    } = useCart(); 

    

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
        .then((res) => {
            setAllProducts(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);



    return (
            <div className="body">
            <div className='d-flex justify-content-center'>
                <h2 className='mb-4'>Cart Items:</h2>
            </div>
            
            {isEmpty ? (
                <p>Your cart is empty.</p>
                ) : (
                
                <div className='d-flex justify-content-center'>
                <br />
                {items.map((cartItem) => {
                    const product = allProducts.find(
                    (product) => product._id === cartItem.id
                    );
                    if (product) {
                    return (
                        <div key={cartItem.id}>
                        <div className="productList">
                            <h5>{product.name}</h5>
                            <p>{product.image}</p>
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <p>Quantity: {cartItem.quantity}</p>
                            
                            {/* //Increase Quantity */ }
                            <button
                            onClick={() => updateItemQuantity(cartItem.id , cartItem.quantity +  1)}
                            >
                            Increase Quantity
                            </button>
                            
                            { /* //Decrease Quantity */ }
                            <button
                            onClick={() => updateItemQuantity(cartItem.id, cartItem.quantity - 1)}
                            >
                            Decrease Quantity
                            </button>
                            <button onClick={() => removeItem(cartItem.id)}>
                            Remove Item
                            </button>
                            </div>
                        </div>
                    );
                    }
                    return null; // Skip rendering if the product is not found
                })}

                {/* Totals */}
                <div>
                    <p>Total Items: {totalItems}</p>
                    <p>Cart Total: ${cartTotal.toFixed(2)}</p>
                </div>
                {/* BUTTON DIV */}
                <div>
                    <button onClick={emptyCart}>Empty Cart</button>
                </div>

                </div>
            )}
            </div>
    );
};



export default Cart;