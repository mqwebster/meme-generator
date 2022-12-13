import React from 'react';
import './css/Header.css';
import logo from '/troll-face.png';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-wrap'>
        <div className='header-logo'>
          <div className='header-logo__inner'>
            <img src={logo} alt='Troll Face' className='header-logo__img' />
          </div>
          <span>Meme Generator</span>
        </div>

        <span>React Course - Project 3</span>
      </div>
    </div>
  );
}
