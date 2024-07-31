import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
        Our mission is to satisfy your cravings and elevate your dining experience, ine delociois meal at a time.
        </p>
       
       <div className='explore-menu-list'>
        {menu_list.map((item,index) => {
            return (
                <div 
                // if previous state is same as item.menu_name in  that case set the state "all and if not then set menu_name to our"
                    onClick={()=>setCategory(prev => prev===item.menu_name ? "All" : item.menu_name)} 
                    key={ index } 
                    className="explore-menu-list-item"
                >
                    <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
       </div>
       <hr />
    </div>
  )
}

export default ExploreMenu