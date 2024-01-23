


import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';

import img2 from '../../assets/image 1.png';
import img3 from '../../assets/Logo (1).png'
import img4 from '../../assets/edit-brightness.png'

const Hero = () => {
    const slideVariants = {
        initial: { y: 10 },
        animate: { y: -10, transition: { duration: 1, yoyo: Infinity } },
    };

    return (

        <div className="hero">
            <motion.nav className='navbar'

                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}

            >
                <div className='logo'>
                    <span className=''>
                        <img src={img3} alt="" />
                    </span>
                </div>

                <div className='links'>
                    <span className='link'>About</span>
                    <span className='link'>Price</span>
                    <span className='link'>Contact us</span>
                    <span className='link'>Login</span>
                    <button className='link-btn-outlined'> Start Free trial</button>
                </div>
            </motion.nav>

            <div className='heor-card-flex-1'>
                <div className="hero-info">
                    <motion.div
                        initial={{ opacity: 0.5, x: -140 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3 }}
                        className='first-title'
                    >
                      <img src={img4} alt="" />  3.1 released. Learn more
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -140 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration:1.5, delay: 0.4 }}
                        className='hero-title'>your Data with
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -140 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration:1.5, delay: 0.7 }}
                        className='hero-title'>real-time analytics
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: -140 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration:1.5, delay: 0.9 }}>
                        Harness the potential of Big Data & Clouds scrives
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -140 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration:1.5, delay: 1.2 }}>
                        and become a data-driven organization with Need tail
                    </motion.p>
                    <motion.div

                        initial={{ opacity: 0, x: -140 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration:1.5, delay: 1.5 }}>
                    
                        <button className='link-btn-outlined btn-0'> Start Free trial</button>
                        <button className='link-btn-outlined btn-1'>Learn more</button>


                    </motion.div>

                </div>

                <div className='img1-div'>
                    <motion.div
                        className='img1-div'
                        initial={{ y: 20 }}
                        animate={{ y: -20 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'linear', }}

                    >
                        <img src={img2} alt="" />
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

export default Hero;
