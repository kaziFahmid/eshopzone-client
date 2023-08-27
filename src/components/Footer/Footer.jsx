import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer p-10  bg-neutral text-neutral-content mt-40">
    <div>
      <span className="footer-title">Services</span> 
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </div> 
    <div>
      <span className="footer-title">Company</span> 
      <Link to='/' className="link link-hover">Home</Link>
      <Link to='/contactus' className="link link-hover">Contact</Link>
      <Link to='/login' className="link link-hover">Login</Link>
      <Link  to='/signup'className="link link-hover">Signup</Link>
    </div> 
    <div>
      <span className="footer-title">Legal</span> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </div>
  </footer>
  )
}

export default Footer
