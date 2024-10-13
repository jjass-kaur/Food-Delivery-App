import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <img src={assets.header_img} alt="" />
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Choose from a diverse menu featuring a mouth-watering array of dishes, crafted with the finest ingredients and culinary mastery. Our mission is to satisfy your cravings and elevate your dining experience with every delicious bite.</p>
        <button className='view-menu'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
