import React, {useEffect} from "react";
import "./partners.scoped.css"
import "./nicepage.scoped.css"
import abvideo from "../../images/BusinessGO.mp4"

import {Link} from "react-router-dom"
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import ReCAPTCHA from "react-google-recaptcha";
import Redbutton from '../../components/button/redbutton/redbutton';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Partners() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  const containerStyle = {
    
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };


  let submitform = ( ) =>{

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let sub = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if ( name!="" && email!="" && sub!="" && message!="" && email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) )
    {

        alert("Message Submitted !")
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("subject").value = ""
        document.getElementById("message").value = ""
    }
    else
    {
        alert("Error! please enter Valid data Submit again !")
    }


  }

  return (

        <div>

<div className='blendedslider text-center '>
                <h5> PARTNERS </h5>
                <div className="blendedsliderdivider"></div>
                <span className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} Partners </span>
</div>

    <div className='u-body u-xl-mode' >


<section className="u-clearfix u-section-1" id="sec-c53b">
  <div className="u-clearfix u-sheet u-sheet-1">
    <h4 data-aos="fade-down"  className="u-text u-text-custom-color-1 u-text-default u-text-1"> Partner with Business GO Digital</h4>
    <div  className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                  <video src={abvideo} id="partnersvideo" controls style={{ height: "290.5px" }} ></video>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
            <div className="u-container-layout u-valign-top u-container-layout-2">
              <h5 className="u-text  u-text-custom-color-1 u-text-default u-text-2"> Meet our Partners</h5>
              <p className="u-text u-text-default u-text-3"> Ready to accelerate your digital transformation? You can contact our local trusted partners who can help you to make it happen. Our global offices and network of partners are independent entities that provide a variety of services to customers all around the world, locally.</p>
              <a href="https://nicepage.com/k/adult-html-templates" className="u-border-none u-btn u-btn-round u-button-style u-grey-10 u-hover-grey-15 u-radius-6 u-btn-1"><span className="u-file-icon u-icon"><img src="images/3203073.png" alt /></span>&nbsp;Looking for a Local Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-15 u-layout-cell-3">
            <div className="u-container-layout u-valign-top u-container-layout-3">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-4"> North Europe</h6>
              <p className="u-text u-text-5 w-100">
                <span style={{fontWeight: 700}}> NEVRON d.o.o</span>
                <br />56- Kidriceva cesta,<br />Skofja Lokan 4220, Slovenia<br />Contact: +44 1923 971 771<br />info@bgdint.com
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-15 u-layout-cell-4">
            <div className="u-container-layout u-valign-top u-container-layout-4">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-6"> Spain</h6>
              <p className="u-text u-text-7 w-100">
                <span style={{fontWeight: 700}} />
                <span style={{fontWeight: 700}}>BGDEU International</span>
                <br />Calle Vivero 37 Bajos 07005<br />Palma de Mallorca, Spain<br />Contact:+34 871 736 871<br />info@bgdint.com
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-15 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-5">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-8"> North Europe</h6>
              <p className="u-text u-text-9 w-100">
                <span style={{fontWeight: 700}} /><b>BGD International</b>
                <br />James Hill Road,<br />Regina S4W, Canada<br />Contact: +1 306 501 9885<br />info@bgdint.com
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-15 u-layout-cell-6">
            <div className="u-container-layout u-container-layout-6">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-10"> New Jersey USA</h6>
              <p className="u-text u-text-11 w-100">
                <span style={{fontWeight: 700}} /><b>The Spantik</b>
                <br />2100 Pacific Ave, Atlantic City<br />NJ 08401, United States<br />Contact: +1 609 385 1212<br />info@bgdint.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <div className="u-container-style u-expanded-width u-group u-shape-rectangle u-group-2" id='contactdivpartners' >
     
     <div className="row">
 
     <div className="col-md-5">
 
     <div data-aos="fade-right" className="maplocationcontactUS">
 
             {/* Map Location */}
 
             <LoadScript
       googleMapsApiKey="YOUR_API_KEY"
     >
       <GoogleMap
         mapContainerStyle={containerStyle}
         center={center}
         zoom={10}
       >
         { /* Child components, such as markers, info windows, etc. */ }
         <></>
       </GoogleMap>
     </LoadScript>
 
             {/*  */}
 
     </div>
 
     </div>
     <div data-aos="fade-left" className="col-md-7 mt-md-0 mt-5" id='partnerscontactform' >
 
     <div className="row">
         {/* Iccons */}
         <div className="col-md-6">
 
            <div className="row">
 
             <div className="col-md-2 contactusicon "><FiPhoneCall/></div>
             <div className="col-md-9"> <p className='m-0'> <b > Phone </b> </p> <p className='m-0' >+966 501 955 328</p> </div>
 
            </div> 
 
         </div>
         <div className="col-md-6">
 
             <div className="row">
 
                 <div className="col-md-2 contactusicon "><HiOutlineMail/></div>
                 <div className="col-md-9"> <p className='m-0' > <b  > Email </b> </p> <p className='m-0' >info@bgdint.com</p> </div>
 
             </div> 
         
         </div>
 
         <div className="row mt-4">
 
                     <div className="col-md-6">
                        
                           <label for="" class="form-label">Your Name*</label>
                           <input type="text"
                             class="forminputs form-control mt-2 " name="" id="name" aria-describedby="helpId" placeholder=""/>
                        
                        
                     </div>
                     <div className="col-md-6">
                              <label for="" class="form-label">Your Subject</label>
                             <input type="text"
                             class="forminputs form-control mt-2 " name="" id="subject" aria-describedby="helpId" placeholder=""/>
         
                     </div>
                     
         </div>
 
         <div className=" px-3">

         <label for="" class="form-label mt-4">Your Email</label>
                             <input type="email"
                             class="forminputs form-control mt-2 " name="" id="email" aria-describedby="helpId" placeholder=""/>

         <label for="" class="form-label mt-4 ">Your Message</label>
                     <textarea type="text"
                         class="forminputs form-control mt-2" style={{height: "27%"}}  name="" id="message" aria-describedby="helpId" placeholder=""/>
                     <div className="captcha mt-4">
                     <ReCAPTCHA
                      sitekey="Your client site key"
                     />
                     </div>
                     <div className="sendmessage mt-4">
                     <Redbutton clickaction={submitform} buttontext="Send Message" />
         </div>
         </div>
 
     </div>
 
     </div>
     </div>
 
     </div>


    </div>
    </div>
  )
}

export default Partners