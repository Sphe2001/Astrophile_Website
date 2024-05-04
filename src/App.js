
import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/HomePage/HomePage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { CartsPage } from './pages/CartPage/CartsPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ServicesPage } from './pages/ServicesPage/ServicesPage';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';




function App() {
  return (
     <div>
    <BrowserRouter>
        <Navbar />
        <div className="container-center">
                   <Routes>
                       <Route path="/" element={< HomePage />}/>
                       <Route path="/products" element={< ProductsPage />}/>
                       <Route path="/services" element={< ServicesPage />}/>
                       <Route path="/login" element={< LoginPage />}/>
                       <Route path="/cart" element={< CartsPage />}/>
                       <Route path="/register" element={< RegisterPage />}/>  
                   </Routes>
        </div>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
