import React from 'react'
import "./Homepageservices.scss"
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import Websitesolidbutton from '../../../components/button/solidbuttonwebsite/Websitesolidbutton';
import serviceimage from "../../../images/All-Services-1-2048x799.jpg"

function Homepageservices() {

 let services=[
  {icon:"FaBeer",
  heading:"Brand identity",
  text:"Whether you have a service firm, selling online products, offering online education, or have a website of a club or society or NGO, the customers will find you in digital media, social media, and the places you ignored to post. The digital world has no borders, which means you have to have a global digital identity. We are experts in such areas and have associates around the globe. Once you contact us, we will have an opportunity to show you what we said earlier."
},
{icon:"FaCheckCircle",
heading:"Production studio",
text:"If you are thinking to bring a fresh perspective to your brand and willing to create a world with no boundaries, its time to go for animation. It would help you to grab attention and engage customers of a broader demographic. It’s an entertaining way to make complex ideas more interesting and appealing. You may choose from diverse styles, likable characters, and different formats of media. Create New Worlds and Push Boundaries."
},
{icon:"FaCheckCircle",
heading:"Development House",
text:"We believe it’s not just a website or application but your digital brand identity. Creating your business website, a digital transformation, App is a must, Android or IOS, Real-time app, and 3D model & 360 VR Tour whatever is necessary we propose to our client with confidence."
},
{icon:"FaCheckCircle",
heading:"Digital & Social Media",
text:"A team of young experts who keep themselves in touch with the new search and social trends and ensure to work around a strategy that produces numbers and creates brand awareness with high engagement rates. You can allocate your budget, design your own package, we will plan as per your budget, and execute the plan accordingly."
},
{icon:"FaCheckCircle",
heading:"Offshore Remote Manpower",
text:"We recruit and manage staff and your Company has 100% control over the recruitment process, performance, work, project deadlines, tasks, and contract period. We are your Offshore office in Pakistan. We manage an IT department of any size and a team of professionals for international companies and entrepreneurs. You share with us your demand, we hire, manage and support remote staff."
},
{icon:"FaCheckCircle",
heading:"Printing & Packaging",
text:"It is the product packaging that attracts the attention of the consumers. The need for the packaging design is significant, the quality of the material is added value, and the shape remains the most important one. Our company packaging & printing unit is in Pakistan, a market full of resources and talent, and can delivery around the globe. Of course, with the most competitive prices."
},

 ]

  return (
    <div className="homepageservice" >

            <h2 className='homepeageserviceheading text-center ' >OUR SERVICES</h2>

           <div className="servicecards">
            {services.map((e)=>
            <div className="servicescard my-5">
              <div className="row">
                <div className="col-md-1 servicesicon">
             
                <FaCheckCircle/>

                </div>
                <div className="col-md-8">
                  
                  <h5 className='servicesheading'>{e.heading}</h5>

                  <div className="servicedetials">
                   {e.text}
                  </div>
                </div>
              </div>
    
            </div>
            )}
            </div>

<div className="customerservice">

<img src={serviceimage} style={{ "height": "367px"}} alt="" />

<h4 className='servicesendheading mt-5' >Customer Experience is Everything Today! Transform to Cloud Technology</h4>
<p className='serviceendtext my-4' >The cloud is everything: from traditional benefits to the value. It keeps growing and accelerating, the cloud is an exciting way to run a business since it brings a competitive advantage over others. Its benefits include cost reduction, efficiency, data security ; recovery, Scalability, convenience, and control over sensitive data.</p>
 <span className='mx-auto text-center ' > <Websitesolidbutton buttontext="Explore Services" /> </span>
 </div>
    </div>
  )

  
}

export default Homepageservices