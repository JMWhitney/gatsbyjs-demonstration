import React from 'react';
import { Link } from "gatsby"

//How to create inline styles and utilize the gatsby link components to have single page links.
const Menu = () => (
  <div style={{
    background: '#f4f4f4',
    paddingTop: '10px'
  }}>
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/blog">Blog</Link></li>

    </ul>
  </div>

);
 
export default Menu;