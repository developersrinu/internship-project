import React from 'react'
import './section3.css'
import m4 from '../../assets/Group 21.png'
import {motion} from 'framer-motion'
const Section3 = () => {
  return (
    <div className='section-3'>

        <div className='logo'>
            <motion.img src={m4} alt="" 
           
                whileHover={{ rotateY: 0 }}
                animate={{ rotateY: 180 }}
                transition={{ duration: 1 }}

            />
        </div>

        <div className='logo-info'>

            <div className="section-h">
              For Product Teams</div>
            <div className="section-sub">Launch with the best stack</div>
            <p className='section-desc'>A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind</p>


        </div>

       
    </div>
  )
}

export default Section3