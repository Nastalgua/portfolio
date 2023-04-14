import { useState, useCallback } from 'react';

import { Element } from 'react-scroll';
import Carousel, { Modal, ModalGateway } from "react-images";

import SelfImage from '../../assets/images/self.png';

import './AboutMe.css'

const images = [{ width: 3, height: 4, src: SelfImage }]

const LinkText = ({ link, text }) => {
  return (
    <a className='bio-text bio-link' href={link} target='blank' rel='noopener'>{text}</a>
  );
}

export const AboutMe = ({ updateActive }) => {
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
        <LinkText link='https://www.cornell.edu/' text='Cornell University' />
        {' Ithaca, NY. I enjoy writing code, solving problems, and creating different types of applications for various purposes. \n'}
        <br />
        <br />
        {'In my free time, I love '}
        <LinkText text='developing applications' />
        {', '}
        <LinkText text='modding games' />
        {', '}
        <LinkText text='creating voxel art' />
        {', and '}
        <LinkText text='taking photos' />
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
