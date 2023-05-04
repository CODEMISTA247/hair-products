import React, { useState, useEffect } from 'react';
import axios from 'axios'; 


const HairProducts = () => {
    const [hairProducts, setHairProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/filterByCategory/hair')
        .then((res) => {
            setHairProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div>
        {hairProducts.map((product) => {
            return <div key={product._id}>{product.name}</div>;
        })}
        </div>
    )
}


export default HairProducts;