import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductsList from './pages/ProductsList'
import Productsdeatils from './pages/Productsdeatils'


const App = () => {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductsList/>} />
      <Route path='/products/:id' element={<Productsdeatils/>} />
    </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App