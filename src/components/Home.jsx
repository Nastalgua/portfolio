import { useState } from 'react';

import { NavLink } from './NavLink';
import { AboutMe } from './content/AboutMe';
import { Divider } from './helper/Divider';

import { Projects } from './content/Projects';
import { Fun } from './content/Fun';

import GitHubIcon from '../assets/icons/github.svg';
import LinkedInIcon from '../assets/icons/linked-in.svg';

import './Home.css';
import { Research } from './content/Research';

export const Home = () => {
  const [navLinks, setNavLinks] = useState([
    { name: 'About Me', active: true },
    { name: 'Projects', active: false },
    { name: 'Research', active: false },
    { name: 'Fun', active: false }
  ]);

  const openLink = (link) => {
    window.open(link, '_blank').focus()
  }

  const updateActive = (name) => {
    setNavLinks(navLinks.map(navLink => {
      if (navLink.name === name) {
        return { ...navLink, active: true };
      }

      return { ...navLink, active: false };
    }));
  }

  return (
    <div className='home'>
      <div className='nav'>
        <div className='sub-nav'>
          <div className='header'>
            <h2 id='intro' className='text'>Hello, I'm Matthew Chen.</h2>
            <p id='pitch' className='text'>Programmer, Student, Artist.</p>
            <nav className='nav-links'>
              {
                navLinks.map(
                  (navLink, index) => (
                    <NavLink
                      key={index}
                      index={index}
                      name={navLink.name}
                      active={navLink.active}
                      updateActive={updateActive}
                    />
                  )
                )
              }
            </nav>
          </div>
          <div className='connect'>
            <img className='icon' onClick={() => openLink('https://github.com/Nastalgua')} src={GitHubIcon} alt='github' />
            <img className='icon' onClick={() => openLink('https://www.linkedin.com/in/matthew-chen-b7221b1a8/')} src={LinkedInIcon} alt='linked-in' />
          </div>
          <a className='text built-by' href='https://github.com/Nastalgua/portfolio'>Built with ❤️.</a>
        </div>
      </div>
      <div className='content'>
        <AboutMe updateActive={updateActive} />
        <Divider index={1} />
        <Projects />
        <Divider index={2} />
        <Research />
        <Divider index={3} />
        <Fun />
        {/* <Divider index={4} />
        <Resume /> */}
        <div style={{ marginBottom: 50 }}></div>
      </div>
    </div>
  )
}
