import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/Logo_Icon_Astrophile3.jpg'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu, setMenu] = useState("home")
  return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='website logo' width={70} height={70}/>
                <p>Astrophile</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/">Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("services")}}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/services">Services</Link>{menu==="services"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("products")}}><Link style={{textDecoration: 'none', color: 'inherit'}}  to="/products">Products</Link>{menu==="products"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="cart icon" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
            
        </div>
  )
}
