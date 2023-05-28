import React, {useState} from 'react';
import axios from 'axios' 
import {useNavigate} from 'react-router-dom'

const ProductForm = (props) => {
    const navigate = useNavigate()
    const {allProducts, setAllProducts} = props
    // Add Errors Here 
    const [product, setProduct] = useState({
        name: '',
        image: '',
        category: '',
        price: 0.00,
        inStock: false,
        /* picture: '' */
    })

    const handleInputChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        if(e.target.name === 'inStock'){
            console.log('HERE');
            setProduct({...product, inStock: !product.inStock })
        }else{
            setProduct({...product, [e.target.name]: e.target.value})
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/addProduct', product)
            .then((res) => {
                setAllProducts([...allProducts, res.data])
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }



    return (
        <div className='d-flex justify-content-center'>
            <form className='border-5 m-auto w-50 row g-2 text-light rounded-3 user-form' onSubmit={submitHandler}>
            <label className='form-label form-label b text-bg-dark text-light w-50 rounded-3'>Product Name:</label>
            <input className='form-control' type='text' value={product.name} name='name' onChange={handleInputChange}/>

{/*             <label className='form-label form-label b text-bg-dark text-light w-50 rounded-3' htmlFor='picture'>Picture URL:</label>
    <input className='form-control' type='text' id='picture' name='picture' placeholder='Enter picture URL' value={product.picture} onChange={(e) => setProduct({...product, picture: e.target.value})} required /> */}

            <label className='form-label form-label b text-bg-dark text-light w-50 rounded-3'>Product Description:</label>
            <input className='form-control' type='text' value={product.image} name='image' onChange={handleInputChange}/>

            <label className='form-label form-label b text-bg-dark text-light w-50 rounded-3'>Category:</label>
            <input className='form-control' type='text' value={product.category} name='category' onChange={handleInputChange}/>

            <label className='form-label form-label b text-bg-dark text-light w-50 rounded-3'>Price:</label>
            <input className='form-control' type='number' value={product.price} name='price' onChange={handleInputChange}/>

            <label className='form-label me-3 text-dark'>In Stock:</label>
            <input className="form-check-input" type="checkbox" name="inStock" onChange={handleInputChange} value={product.inStock}/>

            <hr/>

            <button className="">Submit Product</button>

            </form>



            


        </div>
    )
}

export default ProductForm;