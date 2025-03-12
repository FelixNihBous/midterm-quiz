import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import '../css/Screen8.css';

function Screen8() {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.screen8',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            }
        });

        gsap.set('.tablet', { x: 0 }); // Start tablet off-screen left
        gsap.set('.desktop', { x: 0, scale: 0.4, position: 'absolute' }); // Desktop in the center
        gsap.set('.phone', { x: 0, scale: 0.7 }); // Start phone off-screen right
        gsap.set('.product-text', { y: 0 });

        // Timeline
        tl.to('.desktop', {
            duration: 1,
            scale: 0.39
        })
        .to('.phone', {
            x: -80,
            duration: 1
        }, '-=1') // Overlap
        .to('.tablet', {
            x: 80, 
            duration: 1,
        }, '-=1')
        .to('.product-text', { y: -40 }, '-=1');
    }, []);

    return (
        <div className='screen8'>
            <div className='content'>
                <div className='product-image'>
                    <div className='in-image-product'>
                        <img src="https://framerusercontent.com/images/ONIyOyTwJ073G3pw9BCu9nfvoc8.png?scale-down-to=1024" alt="" className='tablet' />
                        <img src="https://framerusercontent.com/images/ZQlUmt6z62GgGmiePa0aKqTKBqI.png" alt="" className='desktop' />
                        <img src="https://framerusercontent.com/images/F3z177WGrTlELAfwCatVsEQhsU.png" alt="" className='phone' />
                    </div>
                </div>
                <div className='product-text'>
                    <div className='text-in-product'>
                        <p>Try Paste today and see the difference it can make in streamlining your workflow. Empower yourself and take control of your productivity journey.</p>
                    </div>
                    <div className='store-btn'>
                        <div className='apple'>
                            <a href="">
                                <div className='logo-apple'>
                                    <img src="https://framerusercontent.com/images/hbMG56UDdBsAaOugIyODdGih8IA.svg" alt="" />
                                </div>
                                <div className='title'>
                                    <div>
                                        <p>Download On</p>
                                    </div>
                                    <div>
                                        <p>App Store</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='setapp'>
                            <a href="">
                                <div className='logo-settapp'>
                                    <img src="https://framerusercontent.com/images/WgbGvRVdFPqFB713033ODp0cJOI.svg" alt="" />
                                </div>
                                <div className='title'>
                                    <div>
                                        <p>Download On</p>
                                    </div>
                                    <div>
                                        <p>Setapp</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Screen8;
