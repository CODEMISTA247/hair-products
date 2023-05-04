import './App.css';
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList'; 
import HairProducts from './components/HairProducts';
import Nav from './components/Nav';

function App() {

  const [allProducts, setAllProducts] = useState([])
  return (
    <div className="App">
    <Nav /> 
    <Routes>

    <Route path='/productForm' element={<ProductForm allProducts={allProducts} setAllProducts={setAllProducts}/>} /> 
    <Route path='/' element= {<ProductList allProducts={allProducts} setAllProducts={setAllProducts}/> } /> 

    
    <Route path='/hair-products' element={<HairProducts allProducts={allProducts}/>}/> 

    </Routes> 
    </div>
  );
}

export default App;
