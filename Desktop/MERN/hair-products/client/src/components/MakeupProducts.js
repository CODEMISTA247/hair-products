import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';

const MakeupProducts = () => {
    const [makeupProducts, setMakeupProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/filterByCategory/makeup')
        .then((res) => {
            setMakeupProducts(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className='body'>
            {console.log(makeupProducts)}
            {makeupProducts.map((product) => {
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
                <button type="" className='btn btn-secondary btn-outline-dark'>Add To Cart</button>
                </div>
                </div>
            })}
        </div>
    )
}

export default MakeupProducts;