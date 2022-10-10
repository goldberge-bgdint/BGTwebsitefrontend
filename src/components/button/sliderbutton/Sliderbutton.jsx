import React from 'react'
import "./sliderbutton.scss"

function Sliderbutton(props) {

    //butttontext-> button title
    //buttonaction-> button action

  return (
    <div>
        <button className='bluesolidbutton' onClick={props.buttonaction} >{ props.butttontext } </button>
    </div>
  )
}

export default Sliderbutton