import React from 'react'
import Logo from '../assets/logo.png'
import './header.css'
export default function Header(props) {
  return (
    <div className='header'>
        <h3 className='title'>{props.title}</h3>
        <img className='logo' src={Logo} alt="Logo" />
    </div>
  )
}
