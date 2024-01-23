import React from 'react'
import './Section.css'
import img1 from '../../assets/chart-bar-33.png'
import img3 from '../../assets/newsletter-dev.png'
import img4 from '../../assets/timeline.png'

import img2 from '../../assets/Tag (1).png'
const Section2 = () => {
    return (
        <div className='section-2'>

            <div class='section-2-head'>
                <img src={img2} alt="" />
            </div>
            <div className='section-2-subhead'>Get actionable insights from Big Data in 3 steps</div>
            <div className='section-2-p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod </div>
            <div className='section-2-p'> tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>


            <div className="flex-div-parent">

                <div className="parent">

                    <div className="flex-div-logo">
                        <img src={img1} alt="" />
                    </div>

                    <div className="flex-div-logo1">
                        valueble business insight
                    </div>
                    <div className="flex-div-logo2">
                    Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.
                    </div>
                </div>



                <div className="parent">
                    <div className="flex-div-logo">
                        <img src={img3} alt="" />
                    </div>

                    <div className="flex-div-logo1">
                    Powerful Algorithms
                    </div>

                    <div className="flex-div-logo2">
                    With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data.
                    </div>
                </div>

                <div className="parent">
                    <div className="flex-div-logo">
                        <img src={img4} alt="" />
                    </div>

                    <div className="flex-div-logo1">
                    Data in real-time
                    </div>
                    <div className="flex-div-logo2">
                    Collect data in real-time from multiple channels and move it into a data lake, in its original format.
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Section2



