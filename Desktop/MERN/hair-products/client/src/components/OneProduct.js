import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
import './ProductList.css';

const OneProduct = (props) => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    return (
        <div className='productList '>
            <div className='card-body'>
                <h3 className='card-title'>{product.name}</h3>
                <ul>
                    <li>{product.category}</li>
                    <li>{product.image}</li>
                    <li>{product.price}</li>
                </ul>
                <button type="" className='btn btn-secondary btn-outline-dark'>Add To Cart</button>
            </div>
        </div>
    )
}

export default OneProduct;