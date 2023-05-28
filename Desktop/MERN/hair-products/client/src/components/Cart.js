import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Cart = () => {

    const [allProducts, setAllProducts] = useState([]);

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

    return(
    <div className='body'>
    {console.log(allProducts)}
    {allProducts.map((product) => {
        return <div key={product._id}>
        <div className='productList'>
            <h5>{product.name}</h5>
            <p>{product.image}</p>
            <p> Price: ${product.price.toFixed(2)}</p>
        </div>
        </div>
    })}
    </div> 
    )

}

export default Cart;