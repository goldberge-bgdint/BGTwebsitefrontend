import React from 'react'
import "./ourbusiness.scss"
import Websitesolidbutton from '../../../components/button/solidbuttonwebsite/Websitesolidbutton.jsx'

function Ourbusiness() {
  return (
    <div  className='mx-auto' >
        <div className="ourbusinessdiv row">
            <div className=" ourbusinesssidedives col-md-4">
                
                <h1 className='businessdivheading' >OUR BUSINESS</h1>
                <p className='businessdivtext' >We create an atmosphere favorable to online business, cloud computing, marketing, advertising, and eCommerce in such a way that your brand can be different from its competition. We offer a variety of services that fulfill your need for business. We are the # 1 digital branding agency in Pakistan, serving the global market for more than 4 years. We are the best cloud technology firm that offers consultancy, design, implementation, support and learning</p>
                <Websitesolidbutton buttontext="About us" />
            </div>
            <div className="businessmodeldiv col-md-4">
            </div>
            <div className=" ourbusinesssidedives col-md-4">

                <h1 className='businessdivheading' >Turnkey Solution Company</h1>
                <p className='businessdivtext' >  Let’s discuss, What do you think – to develop a website, application, animation, or
                social media plan. We do Resource Management – of designers and developers who are ready to deliver digital branding projects. It’s Time to Transform the Business – running a business already and thinking of transformation on the internet or looking for digital identity. You may contact us in confidence. Once a Partner, Always a Partner – We create identity, communicate your message to the audience, develop your digital brand, market it to the right customers, and save the cost of operations by implementing cloud technology.</p>
                </div>
        </div>
    </div>
  )
}

export default Ourbusiness