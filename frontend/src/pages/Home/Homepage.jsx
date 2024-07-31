// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Homepage.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Homepage = () => {

//  creating state variable
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} /> {/* passing  state variable as props*/}
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Homepage