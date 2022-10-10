import React from 'react'
import "./solidbutton.scss"

function Websitesolidbutton(props) {

    // buttontext 
    // Buttonaction

  return (
    <div>
        <button className='solidbbuttonstyle' onClick={props.buttonaction} >{props.buttontext}</button>
    </div>
  )
}

export default Websitesolidbutton