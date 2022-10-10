import React, {useEffect} from "react";
import "./usecaseandreviews.scss"
import sotypicture2 from "../../../../src/images/sotypicture2.jpg"

import { FiArrowRightCircle } from "@react-icons/all-files/fi/FiArrowRightCircle";
import Websitesolidbutton from '../../../components/button/solidbuttonwebsite/Websitesolidbutton';

import Testimonialslider from '../../../components/Testimonial/Testimonialslider';

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Usecaseandreviews() {

    
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

    let stats=[

            {number:"355",description:"Delivered projects"},
            {number:"35",description:"Active Projects"},
            {number:"12",description:"Active Regions"},
            {number:"87",description:"Satisfied Customers"},

    ]

    let stories=[

        {picture:sotypicture2,heading:"Digital Branding and Future of Pakistan",date:"November 12, 2017 | No Comments", message:"The future of Pakistani’s digital branding efforts is looking bright and confident. In the past few years, especially, Pakistani marketers[...]",link:"#" },
        {picture:sotypicture2,heading:"Digital Branding and Future of Pakistan",date:"November 12, 2017 | No Comments", message:"The future of Pakistani’s digital branding efforts is looking bright and confident. In the past few years, especially, Pakistani marketers[...]",link:"#" },
        {picture:sotypicture2,heading:"Digital Branding and Future of Pakistan",date:"November 12, 2017 | No Comments", message:"The future of Pakistani’s digital branding efforts is looking bright and confident. In the past few years, especially, Pakistani marketers[...]",link:"#" }
   
    ]

  return (
    <div className='usecaseandreviewssection'>





        <div className="factsdiv">
        <h3 data-aos="fade-up" className='text-center' >Company Facts</h3>
        <p data-aos="fade-up" className='mt-4' >It has been over a decade, we are working with global firms including ABB, Siemens, Huawei, Samsung, McDermott, Ansaldo Energia, Schweitzer Engineering Laboratories, Alcatel Lucent, Nokia, L&T, GE Engineering, and many more. We were a part of numerous project serving the prestigious end-users including ARAMCO, Saudi Electricity Company, STC, Mobily, Zain, SWCC, NWC, Princess Noura University, from oil & gas, energy & power, transportation, education, manufacturing, telecommunication, hospitality, construction, and public sector.
         <br /><br />

        We are international now by having headquarters in Pakistan and global offices in Saudi Arabia, Dubai, London, Slovenia, Spain, Winnipeg, Chicago, Melbourne, and a franchise network in connecting cities. You can rely on our services and business model that differentiate us from our competitors.</p>

            <div  className="stats">
                { stats.map((e)=>
                <div  data-aos="fade-up" className="stat">
                    <p className='statnumber' >{e.number}</p>
                    <div className="statdevider my-2"></div>
                    <p className='statdescription' ><b>{e.description}</b></p>
                </div>
               ) }
            </div>

            <div data-aos="fade-up" >
            <Testimonialslider/>
            </div>

            {/* <h2> <b> WHAT CUSTOMERS SAY ABOUT US </b></h2> */}


                {/*  Case Studies  */}

            <h2  data-aos="fade-up" className='text-center my-5 ' ><b>Case Studies</b></h2>
            <div className="storycard">
            { stories.map((e)=>       
           <div data-aos="fade-up" className="cardbody"> 
            <div className="storycardimage">
            <img src={e.picture} className='storyimage' alt="" />
            </div>
            <h5 className='storyheading mt-2'>{e.heading}</h5>        
            <p className='storydate'>{e.date}</p>
            <p className='storydetial' >{e.message}</p>
            <a className='storylink' href={e.link}> Read more  <FiArrowRightCircle/> </a>
           </div>
            )}   
            </div>     


           <div data-aos="fade-up" className="storiesbutton text-center mb-5 "> <Websitesolidbutton buttontext="View all" /> </div>




        </div>
    </div>
  )
}

export default Usecaseandreviews