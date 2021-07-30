import { useState } from 'react';
import { NavLink } from './NavLink';

import './Home.css';

import GitHubIcon from '../assets/icons/github.svg';
import LinkedInIcon from '../assets/icons/linked-in.svg';

export const Home = () => {
  const [navLinks] = useState([
    { name: 'About Me', active: true },
    { name: 'Projects', active: false },
    { name: 'Resume', active: false },
    { name: 'Fun', active: false },
  ]);

  return (
    <div className='home'>
      <div className='nav'>
        <div className='header'>
          <h2 id='intro' className='text'>Hello, I'm Matthew Chen.</h2>
          <p id='pitch' className='text'>Programmer, Student, Artist.</p>
          <nav className='nav-links'>
            {
              navLinks.map(
                (navLink, index) => (<NavLink key={index} index={index} name={navLink.name} active={navLink.active} />)
              )
            }
          </nav>
        </div>
        <div className='connect'>
          <img className='icon' src={GitHubIcon} alt='github' />
          <img className='icon' src={LinkedInIcon} alt='linked-in' />
        </div>
      </div>
    </div>
  )
}
