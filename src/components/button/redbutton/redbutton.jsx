import React from 'react'
import "./redbutton.scss"
function Redbutton(props) {
  return (
    <div>

        <button className='redbuttontext' onClick={props.clickaction} >{props.buttontext}</button>

    </div>
  )
}

export default Redbutton