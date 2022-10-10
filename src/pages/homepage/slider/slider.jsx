import React from 'react'
import "./slider.scss"
import Sliderbutton from '../../../components/button/sliderbutton/Sliderbutton.jsx'

function Slider() {
  return (
    <div className='sls'>
    <div className="slidercontent">
      <div className="sliderlefttext ">
        <h2 > <span className='slidercoloredtext' >IDEADS</span> THAT <br /> TRANSFORMS <br /> BUSINESS </h2>
      </div>
      <div className="sliderighttext">
        <p>Premium digital <br /> transformation <br /> company</p>
        <Sliderbutton butttontext="GET STARTED" />
      </div>
    </div>
    </div>
  )
}

export default Slider