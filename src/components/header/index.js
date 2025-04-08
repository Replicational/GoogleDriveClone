import React from 'react'
import '../../styles/Header.css'

import GDriveLogo from '../../media/googledrive.png'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

const index = () => {
  return (
    <div className='header'>
      <div className='header_logo'>
        <img src={GDriveLogo} alt=""/>
        <span>Drive</span>
        </div>
        <div className='header_searchContainer'>
          <div className='header_searchBar'>
            <SearchIcon />
            <input type='text' placeholder='Search in Drive' />
            <ExpandMoreIcon />
          </div>
        </div>
        <div className='header_icons'>
          <span>
            <HelpOutlineIcon />
            <SettingsIcon />
          </span>

          <AppsIcon />
          <img src='' alt='User Photo' />
        </div>
    </div>
  )
}

export default index
