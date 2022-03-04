import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/products' element={ <ProductPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App