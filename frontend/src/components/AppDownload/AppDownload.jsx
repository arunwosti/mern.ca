import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className="app-download" id='app-download'>
        <p>For Better Experience Download <br />MERN.ca App.</p>
        <div className="app-download-platforms">
            <div className="platform-left">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
            </div>
            <div className="platform-right">
                <img src={assets.landing} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AppDownload