import React from 'react'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className='center'>
        <img src={logo} alt="" 
        style={{width:'45%'}}/>
    </header>
  )
}

export default Header