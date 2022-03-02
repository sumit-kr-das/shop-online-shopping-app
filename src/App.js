import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/products' element={ <Product />} />
        </Routes>
      </Router>
    </>
  )
}

export default App