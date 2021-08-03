import { Element } from 'react-scroll';

import SelfImage from '../../assets/images/self.png';

import './AboutMe.css'

const LinkText = ({ link, text }) => {
  return (
    <a className='bio-text bio-link' href={link} target='blank' rel='noopener'>{text}</a>
  );
}

export const AboutMe = () => {
  return (

    <Element name='about-me' className='about-me'>
      <p className='bio-text'>
        {'Hey there! I’m a student at the '}
        <LinkText link='https://www.bxscience.edu/' text='Bronx High School of Science' />
        {' in New York City. I’m a software engineer, creating different types of applications for different purposes. \n'}
        <br />
        <br />
        {'In my free time, I love '}
        <LinkText link='https://www.bxscience.edu/' text='developing applications' />
        {', '}
        <LinkText link='https://www.bxscience.edu/' text='modding games' />
        {', '}
        <LinkText link='https://www.bxscience.edu/' text='creating voxel art' />
        {', and '}
        <LinkText link='https://www.bxscience.edu/' text='taking photos' />
        {'.'}
        <br />
        <br />
        {'Check out all of these things on my website!'}
      </p>
      <img className='self-image' src={SelfImage} alt='self' />
    </Element>
  )
}
