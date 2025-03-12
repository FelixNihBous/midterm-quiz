import React, { useEffect } from 'react';
import '../css/Screen6.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Screen6() {
    useEffect(() => { // Use useEffect to run GSAP after component mounts
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.performance-info',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            }
        });

        gsap.set('.image-1', {
            rotateX: '20deg', // Use deg for degrees
            rotateY: '70deg',
            x: 0
        });

        gsap.set('.image-2', {
            rotateX: '-20deg',
            rotateY: '70deg',
            x: 0
        });

        gsap.set('.performance-content', {
            y: 0
        });

        tl.to(
            '.image-1',
            {
                duration: 3,
                rotateX: '0deg',
                rotateY: '0deg',
                x: 120,
            },
            'start'
        );
        tl.to(
            '.image-2',
            {
                duration: 3,
                rotateX: '0deg',
                rotateY: '0deg',
                x: -120,
            },
            'start'
        );

        tl.to('.performance-content', {
            y: -30,
            duration: 2
        },
        'start'
        );
    }, []);

    return (
        <div className='container'>
            <div className='performance-info'>
                <img className='background' src="/HbkgeVV47migzhLr215ir9oJu4.jpg" alt="" />
                <div className='performance-info-wrapper'>
                    <div className='performance-content'>
                        <p className='white'>Unmatched</p>
                        <p className='orange-purple'>Performance Boost</p>
                        <p className='content-text white'>The power of cutting-edge technologies delivers lightning-fast speed and unparalleled efficiency.</p>
                    </div>
                    <div className='images-container'>
                        <img className="image-1" src="https://framerusercontent.com/images/qPNghqdFDpAcDm0hN7fd4JYibJE.png" alt="" />
                        <img className="image-2" src="https://framerusercontent.com/images/ANQh7hjc3gfVmkDro1e7YOzi0.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screen6;
