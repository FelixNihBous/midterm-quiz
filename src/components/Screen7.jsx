import React, { useEffect } from 'react'
import '../css/Screen7.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Screen7() {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.wrapper',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            }
        });
        gsap.set('.wrapper', {
            y: 0
        })


        tl.to('.wrapper', {
            y: -20
        })
        .to('.pasteapp-icon', {
            scale: 1.3
        });


    })

    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='header'>
                    <h2>New Icon</h2>
                    <h2 style={{
                        backgroundImage: 'linear-gradient(90deg, rgb(255, 60, 0) 0%, rgb(255, 147, 15) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block' // Ensures the gradient only covers the text
                    }}>
                        Evolving Impressions
                    </h2>
                    <p>We’ve breathed new life into our visual identity, refreshing the icons with modern aesthetics that personify elegance and sophistication.</p>
                </div>
                <div className='feature-container'>
                    <div className='features'>
                        <div className='every-details maxwidth-height'>
                            <div className='image-container'>
                                <div className=''>
                                    <img className='logo' src="https://framerusercontent.com/images/OSdEMI68M3vrUCrLyolOHuxHxA.svg" alt="" />
                                </div>
                            </div>
                            <div className='text-content'>
                                <h3>Every Detail</h3>
                                <h3>Matters</h3>
                                <p>The new icon animations deliver intuitive feedback, enhancing user interaction.</p>
                            </div>
                        </div>
                        <div className='applogo maxwidth-height'>
                            <div className='image-container'>
                                <img className='background' src="https://framerusercontent.com/images/5dpQJLUXAmbkxwrtd3ZqOECzNM.jpg" alt="" />

                                <div className='apps-icon'>
                                    <img src="https://framerusercontent.com/images/XmG7m1YUCF3ygjjvYrVqBKHgtGw.png" alt="" />
                                    <img src="https://framerusercontent.com/images/52NOLbcq3DgZSHpNJ7MvmChzg.png" alt="" />
                                    <img className='pasteapp-icon' src="https://framerusercontent.com/images/LTEgYjJNzgoyzbAlU7TdWNvDY.png" alt="" />
                                    <img src="https://framerusercontent.com/images/usLvYJbVE8oxnb9HI7ufDztOWk.png" alt="" />
                                    <img src="https://framerusercontent.com/images/iL3QMJ8tVxqfGaYqxedPHdcOTF8.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='features'>
                        <div className='video-container'>
                            <video src="https://framerusercontent.com/modules/ITn5U1npW4UMHZED5QTu/aaatuQ4FVyggjCMzZWbq/assets/AAgjsMYg7KgjkAG4ofKNZP4Vpo.mp4"></video>
                        </div>
                        <div className='sound-feature maxwidth-height'>
                            <div className='image-container'>
                                <div><img src="https://framerusercontent.com/images/EWRo9gT7vkvgvmYG2Slq0E5yAQ.svg" alt="" /></div>
                            </div>
                            <div className='text-content'>
                                <h3>Every Detail</h3>
                                <h3>Matters</h3>
                                <p>The new icon animations deliver intuitive feedback, enhancing user interaction.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Screen7
