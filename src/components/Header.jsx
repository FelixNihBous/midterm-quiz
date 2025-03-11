import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../css/Header.css';
import '../css/font.css';

import '../css/font.css';

function Header() {
  useEffect(() => {
    const tl = gsap.timeline();
    gsap.set('.header-text2', { opacity: 0, y: 0 });
    gsap.set('.header-text', { opacity: 0, y: 0 })
    gsap.set('.image-rating', { display: 'none', scale: 100 })
    gsap.set('.app-icon', { opacity: 1, position: 'relative', y: 0, display: 'none', top: '372px', right: '490px', overflow: 'hidden' })
    gsap.set('.bg-header', { width: '100vw', height: '100vh', display: 'none', scale: 100, position: 'absolute'})
    tl.to('.header-text', { opacity: 1, y: -20, x: 0, duration: 1, color: 'black' })
      .to('.header-text', { opacity: 0 })
      .to('.header-text2', { opacity: 1, y: -20, x: 0, duration1: 1, color: 'black' })
      .to('.header-text2', { opacity: 0 })
      //image-rating
      .to('.image-rating', {
        display: 'block',
        ease: 'power1.out',
        scale: 1,
        duration: 2
      })
      .to('.image-rating', {
        scale: 0.8,
        duration: 1
      })
      // app img
      .to('.app-icon', {
        delay: 1.5,
        animation: 'none',
        scale: 3.0,
        display: 'block',
        overflow: 'hidden'
      })
      .to('.app-icon', {
        delay: 1.5,
        animation: 'none',
        scale: 3.0,
        display: 'block',
        top: 0,
        right: 0,
        left: '120px',
        onComplete: () => {
          gsap.to('.bg-header', {
            display: 'block',
            scale: 1,
            duration: 1
          })
        }
      })

      //bg img visibe
      .to('.image-rating', {
        display: 'none'
      })


      .to('.app-icon', {
        scale: 0.1,
        display: 'block',
        position: 'absolute',
        overflow: 'hidden',
        top: '-150px',
        left: '270px',
        y: 0
      })

      .to('.bg-header', {
        display: 'block',
      })


  }, []);

  return (
    <>
      <div className='text-container'>
        <img className='bg-header' src="/bg-header.jpg" alt="" />
        <p className="header-text roboto">Your Workflow Amplified</p>
        <p className="header-text2 roboto">Once Again</p>
        <img className='image-rating' src="/rating-4.png" alt="" />
        <img className='app-icon' src="/app-icon.png" alt="" />
      </div>
    </>

  );
}

export default Header;
