import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CategoryProducts = ({ category }) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                const response = await axios.get('/api/filterByCategory/${category}')
                setProducts(response.data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchProductsByCategory();
    }, [category]);

    return (
        <div>
            <h2>{category} Products:</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    )
}


export default CategoryProducts;
