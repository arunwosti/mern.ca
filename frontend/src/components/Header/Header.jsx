import React from 'react'
import './Header.css'
import Carousel from '../Carousel/Carousel'

const Header = () => {
  return (
    <div className='header'>
        <Carousel/>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
                Our mission is to satisfy your cravings and elevate your dining experience, ine delociois meal at a time.
            </p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header