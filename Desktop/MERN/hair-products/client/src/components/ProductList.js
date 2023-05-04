import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './ProductList.css';
import gel from '../components/images/gelbowl.webp'



const ProductList = (props) => {
        
    const{allProducts, setAllProducts} = props
        
    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then((allProducts) => {
                console.log(allProducts);
                setAllProducts(allProducts.data)
            })
            .catch((err) => {
                console.log(err);
            })
    })

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

                        <Link to={'/productForm'} className='btn btn-secondary btn-outline-dark'>Details</Link>
                        
                        <button type="" className='btn btn-secondary btn-outline-dark'>Add To Cart</button>
                    </div>

                    

                        
                
                    
                </div>

                    
            ))
        }
        </div>
    )
    
}
    export default ProductList;