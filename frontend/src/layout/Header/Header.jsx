import React from 'react'
import { Link } from 'react-router-dom'
import  './Header.scss'
const Header = () => {
  return (
   <nav>
<div className="container">
<div className="row align-items-center justify-content-between">
<div className="logo">

  <img src="https://preview.colorlib.com/theme/busicol/img/footer_logo.png" alt="logo" />
  
  
</div>
<div className="nav-links">
    <Link style={{textDecoration:"none"}} to='/'>Home</Link>
    <Link style={{textDecoration:"none"}}  to='/about'>About</Link>
    <Link  style={{textDecoration:"none"}} to='/services'>Services</Link>
    <Link  style={{textDecoration:"none"}}  to='/blog'>Blog</Link>
    <Link  style={{textDecoration:"none"}}  to='/pages'>Pages</Link>
    <Link  style={{textDecoration:"none"}}   to='/contact'>Contact</Link>
</div>

<button><Link to='/add'   style={{textDecoration:"none"}} >Add Data</Link></button>
</div>

</div>

   </nav>
  )
}

export default Header
