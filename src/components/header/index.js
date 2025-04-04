import React from 'react'
import GDriveLogo from '../../media/googledrive.png'

const index = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={GDriveLogo} alt=""/>
        <span>Drive</span>
        </div>
        <div className='header__searchContainer'>

        </div>
        <div className='header_icons'>

        </div>
    </div>
  )
}

export default index
