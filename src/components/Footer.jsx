import React from 'react'

export default function Footer() {
    const currentYear= new Date().getFullYear();
  return (
    <footer className='footer mt-20  text-center text-md'>
        <img className='w-96 mb-20 mx-auto' src="logo.png" alt="footer-logo"/>
        <hr></hr>
        <p className='footer-text'>Copyright ©{currentYear} Interview Valley, All Rights Reserverd</p>
    </footer>
  )
}
