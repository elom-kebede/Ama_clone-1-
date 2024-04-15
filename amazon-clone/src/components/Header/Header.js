import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <nav className='header'>
      {/* logo on the left */}
      <Link to="/">
          <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />

      </Link>
      
      {/* searh box */}
      <div className="header_search">
      <input type="text" className="header_searchInput" />
       <SearchIcon className='header_searchIcon'/>

      </div>
       

      {/* 3 links */}
      <div className="headerNav">
        <Link to="/login"  className='header_link'>
          <div className="header_option">
            <span className='header_optionLineOne'>Hello ela</span>
            <span className='header_optionLineTwo'>Sign In</span>
          </div>
        </Link>
        <Link to="/"  className='header_link'>
          <div className="header_option">
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <Link to="/"  className='header_link'>
          <div className="header_option">
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span>
          </div>
        </Link>
      </div>
     
      {/* basket icon with number */}
      <Link to="/checkout" className='header_link'>
        <div className="header_optionBasket">
            <ShoppingBasketIcon/>
            <span className='header_optionLineOn header_basketCount'>0</span>
        </div>
      </Link>

    </nav>
  )
}

export default Header
