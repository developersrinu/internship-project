import React from 'react'
import img1 from '../../assets/Profile.png'
import img2 from '../../assets/Client logos (1).png'
import './sectionfive.css'


const section5 = () => {
  return (
    <div className='section5'>

      <div className="section-H">"What I love about Qubly is the easy way we can collaborate even if there is a lot  <br />of people involved in the process"</div>

      <div className='section-profile' >

        <img src={img1} alt="" className='img-profile'/>
        <p className='ppr'>guilaume cabane</p>
        <p className='ppr'>CTO @ BigSpring</p>

      </div>
      <hr style={{ width: '80%', marginTop: '30px' }} />

      <img src={img2} alt="" className='img-profile' style={{ marginTop: '30px' }}/>


    </div>
  )
}

export default section5