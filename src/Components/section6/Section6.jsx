import React from 'react'
import './Section6.css'
import pic from '../../assets/Client logos (2).png'
import From from '../Form1/Form'
import {motion} from 'framer-motion'
const Section6 = () => {
  return (



    <motion.div className='sectoin6'
    initial={{ opacity: 0, x: -140 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 1.5 }}
    
    >
         <div className='sectoin-L'>

            <div className='section-head'>
            See why the world’s best companies use Qubly to become truly data-driven.
            </div>
            <div>---------------------- Trusted by ------------------</div>
            <div>
                <img src={pic} alt="" />
            </div>

        </div>
        <div className='sectoin-R'>

         <From/>
  
        </div>

    </motion.div>
  )
}

export default Section6