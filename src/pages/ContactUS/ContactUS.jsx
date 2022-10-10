import React, {useEffect} from "react";
import "./nicepage.scoped.css"
import "./contactus.scoped.css"
import {Link} from "react-router-dom"
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import "./contactus.scss"
import ReCAPTCHA from "react-google-recaptcha";
import Redbutton from '../../components/button/redbutton/redbutton';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import axios from 'axios';
import { config } from '../../config';

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function ContactUS() {

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



      let submit_form =  ( ) => {

        let name  = document.getElementById("name").value.toString()
        let email = document.getElementById("email").value.toString()
        let message = document.getElementById("message").value.toString()

        if ( name!="" && email!="" && email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && message!="" )
        {       
          axios({
            method: 'post',
            url: `${config.backendwebsite}contact`,
            data: {
              name:name,
              email:email,
              message:message   
            }
          })
          .then(function (response) {
            alert("Successfully Sent !")
            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("message").value = ""
          })
          .catch(function (error) {
            console.log(error);
            alert( "Error ! please enter valid data and submut again")
          });

        }
        else
        {

            alert( "Error ! please enter valid data and submut again")

        }

      }

  return (
    <div className='' >


        <div className='blendedslider text-center '>
                <h5> CONTACT US </h5>
                <div className="blendedsliderdivider"></div>
                <span className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} CONTACT US </span>
        </div>  


<div className="contactuslowerbody u-body u-xl-mode">

<section className="u-clearfix u-section-1" id="sec-6bf2">
  <div className="u-clearfix u-sheet u-sheet-1">

    <div className="row ">

        <h3 data-aos="fade-down" className='text-center' style={{color:"var(--primary)"}} >GET IN TOUCH</h3>

      <div className="col-md-4">

        <div data-aos="fade-right" className="contactusleft">

            <h5  style={{color:"var(--primary)"}} >Corporate Headquarters</h5>
            <p>
            <b>Business GO Digital</b> <br />
            Prince Muhammad Bin Salman Street, Qurtubah, <br />
            Riyadh 13248, Saudi Arabia <br />
            Local: +966 501 955 328 <br />
            me@bgdint.com <br />
            </p>

        </div>

      </div>
      <div data-aos="fade-left" className="col-md-8">

      <div className="row">

        <div className="col-md-6">
          <div className="contactrightcard">
            <h2><b>Partner with Business Go Digital?</b></h2>
            <button className="contactrightbutton" > Click Here </button>
          </div>
        </div>
        <div className="col-md-6">
        <div className="contactrightcard">
            <h2><b>Looking For Designers & Developers?</b></h2>
            <button className="contactrightbutton" > Click Here </button>
          </div>
        </div>

      </div>

      </div>
    </div>

    <p data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-5 mt-5 "> Just send us your questions or concerns by starting a new case and we will give you the help you need. </p>


    <div className="u-container-style u-expanded-width u-group u-shape-rectangle u-group-2">
     
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
    <div data-aos="fade-left" className="col-md-7 contactsectioncontactus "  >

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
                             <label for="" class="form-label">Your Email</label>
                            <input type="email"
                            class="forminputs form-control mt-2 " name="" id="email" aria-describedby="helpId" placeholder=""/>
        
                    </div>
                    
        </div>

        <div className=" px-3">
        <label for="" class="form-label mt-4 ">Your Message</label>
                    <textarea type="text"
                        class="forminputs form-control mt-2" style={{height: "27%"}}  name="" id="message" aria-describedby="helpId" placeholder=""/>
                    <div className="captcha mt-4">
                    <ReCAPTCHA
                     sitekey="Your client site key"
                    />
                    </div>
                    <div className="sendmessage mt-4">
                    <Redbutton buttontext="Send Message" clickaction = { submit_form } />
        </div>
        </div>

    </div>

    </div>
    </div>

    </div>




    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-3">
      <div className="u-layout">
        <div className="u-layout-row officescontactus">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-7">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-8"> Corporate Headquarters</h6>
              <p className="u-text u-text-default u-text-9"> BGD International (Pvt) Limited</p>
              <p className="u-text u-text-default u-text-10"> 62 Acre Way, HA6 1SX&nbsp; Northwood,<br />London,&nbsp;United Kingdom<br />Contact: +44 782 578 2778<br />uk@bgdint.com
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-6">
            <div className="u-container-layout u-container-layout-8">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-11"> Pakistan</h6>
              <p className="u-text u-text-default u-text-12"><b>BGD International (Pvt.) Ltd.</b>
              </p>
              <p className="u-text u-text-default u-text-13"> 112-D2, Wapda Town,<br />Lahore 54770, Pakistan<br />Contact: +92 423 518 4499<br />pak@bgdint.com
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-7">
            <div className="u-container-layout u-container-layout-9">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-14"> Philippines</h6>
              <p className="u-text u-text-default u-text-15"> Pencil Box</p>
              <p className="u-text u-text-default u-text-16"> Manila, Philippines<br />Local: +966 11 230 3975<br />info@bgdint.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</section>

</div>

    </div>
  )
}

export default ContactUS