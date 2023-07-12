import './App.css';
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList'; 
import HairProducts from './components/HairProducts';
import FacialProducts from './components/FacialProducts';
import MakeupProducts from './components/MakeupProducts';
import Cart from './components/Cart';
import Nav from './components/Nav';
import OneProduct from './components/OneProduct';



function App() {

  const [allProducts, setAllProducts] = useState([])
  const [cartItems, setCartItems] = useState([])

  return (
    <div className="App">
    <Nav /> 
    <br /> 
    <br /> 
    <br /> 
    <Routes>

    <Route path='/productForm' element={<ProductForm allProducts={allProducts} setAllProducts={setAllProducts}/>} /> 
    <Route path='/' element= {<ProductList allProducts={allProducts} setAllProducts={setAllProducts} setCartItems={setCartItems}/> } /> 
    <Route path='/filterByCategory/hair' element={<HairProducts /> }/> 
    <Route path='/filterByCategory/facial' element={<FacialProducts /> }/> 
    <Route path='/filterByCategory/makeup' element={<MakeupProducts /> } />
    <Route path='/oneProduct/:id' element={<OneProduct /> } />
    <Route path='/cart' element={<Cart cartItems={cartItems} /> }/> 
    


    </Routes>
    
    </div>
  );
}

export default App;
