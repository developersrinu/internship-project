import React from 'react'
import './section4.css'
import m5 from '../../assets/image 6.png'
import {motion} from 'framer-motion'
const Section4 = () => {
    return (
        <div className='section-3'>



            <div className='logo-info'>

                <div className="section-h">For Engineering Teams</div>
                <div className="section-sub">Data-driven pipelines in minutes</div>
                <p className='section-desc'>Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.</p>


            </div>

            <div className='logo'>
                <motion.img src={m5} alt=""

                   whileHover ={{rotateX: 180}}
                    transition={{ duration: 1 }}

                />
            </div>


        </div>
    )
}

export default Section4