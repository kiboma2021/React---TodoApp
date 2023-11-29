import React from 'react'
import Logo from '../assets/logo.png'
import './header.css'
export default function Header() {
  return (
    <div className='header'>
        <h3>To do App</h3>
        <img className='logo' src={Logo} alt="Logo" />
    </div>
  )
}
