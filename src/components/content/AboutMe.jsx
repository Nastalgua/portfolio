import { useState, useCallback } from 'react';

import { Element } from 'react-scroll';
import Carousel, { Modal, ModalGateway } from "react-images";

import SelfImage from '../../assets/images/self.JPG';

import './AboutMe.css'

const images = [{ width: 3, height: 4, src: SelfImage }]

const LinkText = ({ link, text }) => {
  return (
    <a className='bio-text bio-link' href={link} target='blank' rel='noopener'>{text}</a>
  );
}

export const AboutMe = () => {
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event) => {
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

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
      <img className='self-image' src={SelfImage} alt='self' onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={0}
              views={images.map(x => ({
                ...x,
                srcset: x.src
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Element>
  )
}
