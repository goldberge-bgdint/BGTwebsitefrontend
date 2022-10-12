import React,{useEffect} from 'react'
import "./Politicalmarketing.scoped.css";
import "./nicepage.scoped.css"

import ReCAPTCHA from "react-google-recaptcha";
import Redbutton from '../../components/button/redbutton/redbutton';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import axios from 'axios';
import { config } from '../../config';

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Politicalmarketing() {

    

    let submit_form = () => {

        let name = document.getElementById("name").value
        let email = document.getElementById("email").value
        let message = document.getElementById("message").value

        if ( name != "" && email != "" && email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && message != "")  
    {
        alert("Successfully submitted !")
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""
    }
    else
    {
        alert("Error! please submit valid detials and submit again")
    }

    }

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

  return (
    <div  >

       <div className='political_banner' >
           <div className="politicalimage"></div>
       </div>

        <div className="politicalmarketing_lower u-body u-xl-mode">

     <section className="u-clearfix u-section-1" id="sec-d864">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-valign-top u-container-layout-1">
        <h4 data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-1"> Election Campaign Management</h4>
        <p data-aos="fade-up" className="u-text u-text-2"> Adobe Experience Cloud is a collection of applications and&nbsp;<b  className="boldtextlink">services</b>&nbsp;built on the first platform designed explicitly for unmatched customer experiences, giving you the most comprehensive tools for insights, content, engagement, and more. We offer Consulting &amp; Learning Services in Pakistan, Central Asia, and the Middle East.<br />
          <br />At `<b className="boldtextlink">Business GO Digital</b>` we are experts in understanding your business needs. We specialize in helping organizations using Adobe Experience Cloud compete in their markets by delivering an excellent customer experience that drives improved marketing results and shareholder value.<br />
          <br />The only regional company in the market that has a team of adobe certified consultants, adobe certified global trainer, and regional offices to offer support services locally. Our corporate pre-sales managers are just a click away.
        </p>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-1">
            <div className="u-container-layout u-container-layout-2">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-3"> STRATEGY</p>
              <img className="u-expanded-width u-image u-image-default u-image-1" src="images/social-1958774_1920-4.jpg" alt data-image-width={353} data-image-height={352} />
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
            <div className="u-container-layout u-valign-bottom u-container-layout-3">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-4"> IMPLEMENTATION</p>
              <img className="u-image u-image-default u-image-2" src="images/social-1958774_1920-6.jpg" alt data-image-width={353} data-image-height={352} />
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-3">
            <div className="u-container-layout u-valign-bottom u-container-layout-4">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-5"> ANALYSIS</p>
              <img className="u-image u-image-default u-image-3" src="images/social-1958774_1920-4.jpg" alt data-image-width={353} data-image-height={352} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-aos="fade-up" className="u-container-style u-custom-color-2 u-expanded-width u-group u-group-2">
      <div  className="u-container-layout u-valign-middle u-container-layout-5">
        <h5 className="u-text u-text-custom-color-1 u-text-default u-text-6"> Loyalty Program Features</h5>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-gutter-16 u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row" id="politicalpersons">
          <div data-aos="fade-right"  className="u-container-style u-layout-cell u-size-12 u-layout-cell-4">
            <div className="u-container-layout u-container-layout-6">
              <img className="u-image u-image-4" src="images/Sir-Khan-4.jpg" data-image-width={300} data-image-height={396} />
              <h6 className="u-align-center u-text u-text-custom-color-1 u-text-7"> Siddiq Ahmad Khan</h6>
              <p className="u-text u-text-8"> Brand strategist, researcher, and consultant, Siddiq Ahmad Khan has served in international markets for over 15 years. He has been involved in digital and social media planning, strategy, communication, analysis, and consultancy to multiple industries including telecommunication, FMCG, hospitality, and education.</p>
            </div>
          </div>
          <div  data-aos="fade-up" className="cell-temp-clone u-container-style u-layout-cell u-size-9 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-7">
              <img className="u-expanded-width u-image u-image-default u-image-5" src="images/Dr.-Waheed-Khan.jpg" alt data-image-width={300} data-image-height={396} />
              <h6 className="u-align-center u-text u-text-custom-color-1 u-text-default u-text-9"> Dr. Waleed Khan</h6>
              <p className="u-text u-text-10"> Brand strategist, researcher, and consultant, Siddiq Ahmad Khan has served in international markets for over 15 years. He has been involved in digital and social media planning, strategy, communication, analysis, and consultancy to multiple industries including telecommunication, FMCG, hospitality, and education.</p>
            </div>
          </div>
          <div data-aos="fade-up"  className="cell-temp-clone u-container-style u-layout-cell u-size-9 u-layout-cell-6">
            <div className="u-container-layout u-container-layout-8">
              <img className="u-expanded-width u-image u-image-default u-image-6" src="images/Dr.-M.-Ali.jpg" alt data-image-width={300} data-image-height={396} />
              <h6 className="u-align-center u-text u-text-custom-color-1 u-text-11"> Dr. M. Ali</h6>
              <p className="u-text u-text-12"> Brand strategist, researcher, and consultant, Siddiq Ahmad Khan has served in international markets for over 15 years. He has been involved in digital and social media planning, strategy, communication, analysis, and consultancy to multiple industries including telecommunication, FMCG, hospitality, and education.</p>
            </div>
          </div>
          <div data-aos="fade-up"  className="cell-temp-clone u-container-style u-layout-cell u-size-10 u-layout-cell-7">
            <div className="u-container-layout u-container-layout-9">
              <img className="u-expanded-width u-image u-image-default u-image-7" src="images/Shahzad-Anwar.jpg" alt data-image-width={300} data-image-height={396} />
              <h6 className="u-align-center u-text u-text-custom-color-1 u-text-13"> Shehzad Anwar</h6>
              <p className="u-text u-text-14"> Brand strategist, researcher, and consultant, Siddiq Ahmad Khan has served in international markets for over 15 years. He has been involved in digital and social media planning, strategy, communication, analysis, and consultancy to multiple industries including telecommunication, FMCG, hospitality, and education.</p>
            </div>
          </div>
          <div data-aos="fade-up"  className="cell-temp-clone u-container-style u-layout-cell u-size-10 u-layout-cell-8">
            <div className="u-container-layout u-container-layout-10">
              <img className="u-expanded-width u-image u-image-default u-image-8" src="images/Mudassar-Durrani.jpg" alt data-image-width={300} data-image-height={396} />
              <h6 className="u-align-center u-text u-text-custom-color-1 u-text-default u-text-15"> Mudassar Durrani</h6>
              <p className="u-text u-text-16"> Brand strategist, researcher, and consultant, Siddiq Ahmad Khan has served in international markets for over 15 years. He has been involved in digital and social media planning, strategy, communication, analysis, and consultancy to multiple industries including telecommunication, FMCG, hospitality, and education.</p>
            </div>
          </div>
          <div data-aos="fade-left"  className="cell-temp-clone u-container-style u-layout-cell u-size-10 u-layout-cell-9">
            <div className="u-container-layout u-container-layout-11">
              <img className="u-expanded-width u-image u-image-default u-image-9" src="images/Shahid-Zaman.jpg" alt data-image-width={300} data-image-height={396} />
              <h6 className="u-align-center u-text u-text-custom-color-1 u-text-17"> Shahid Zaman</h6>
              <p className="u-text u-text-18"> Brand strategist, researcher, and consultant, Siddiq Ahmad Khan has served in international markets for over 15 years. He has been involved in digital and social media planning, strategy, communication, analysis, and consultancy to multiple industries including telecommunication, FMCG, hospitality, and education.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-3">
      <div className="u-layout">
        <div className="u-layout-row">
          <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-10">
            <div className="u-container-layout u-container-layout-12">
              <h6 data-aos="fade-right" className="u-text u-text-custom-color-1 u-text-default u-text-19"> Strategy</h6>
              <p data-aos="fade-right" className="u-text u-text-20"> Adobe Analytics Adobe Analytics is the industry-leading solution for applying real-time analytics and detailed segmentation across your marketing channels.<br />
                <br />Analysis<br />
                <br />1. Introduction to Adobe Analytics<br />2. Introduction to Data Analysis with Analysis Workspace<br />3. Essentials of configuration with Adobe Analytics<br />4. Adobe Analytics Implementation<br />5. Introduction to Adobe Launch
              </p>
              <img className="u-expanded-width u-image u-image-contain u-image-default u-image-10" src="images/01-1-1-1.jpg" alt data-image-width={529} data-image-height={93} />
            </div>
          </div>
          <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-11">
         
                    <video id='political_video' src="images/1.mp4" controls ></video>

          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-4">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-12">
            <div className="u-container-layout u-valign-top u-container-layout-14">
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-21"> Implementation</h5>
              <p className="u-text u-text-22"> Our training courses are a fully hands-on learning experience with Adobe certified specialists to guide you through each exercise and answer all your questions.</p>
              <img className="u-expanded-width u-image u-image-contain u-image-default u-image-11" src="images/Capture.JPG" alt data-image-width={599} data-image-height={408} />
            </div>
          </div>
          <div data-aos="fade-left" className="cell-temp-clone u-container-style u-layout-cell u-size-30 u-layout-cell-13">
            <div className="u-container-layout u-valign-top u-container-layout-15">
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-23"> Analysis</h5>
              <p className="u-text u-text-24"> Adobe Target Find the individual in the haystack and then delight them. A/B and multivariate testing. Personalization. AI-powered automation at scale.</p>
              <img className="u-expanded-width u-image u-image-contain u-image-default u-image-12" src="images/Captureasd.JPG" alt data-image-width={629} data-image-height={193} />
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* Contact Section */}

        <h3 data-aos="fade-right"  >For information, contact us</h3>

        <div className="political_contact mt-5">

            <div className="row">
                <div className="col-md-6">
               
                  <label data-aos="fade-right" for="" class="form-label">Your Name *</label>
                  <input data-aos="fade-up" type="text"
                    class="form-control" name="" id="name" aria-describedby="helpId" placeholder=""/>
            
                  </div> 
                <div className="col-md-6">

                  <label data-aos="fade-right" for="" class="form-label">Your Email *</label>
                  <input data-aos="fade-up" type="text"
                    class="form-control" name="" id="email" aria-describedby="helpId" placeholder=""/>

                </div>
            </div>

                  <label data-aos="fade-right" for="" class="form-label mt-4">Your Message *</label>
                  <textarea data-aos="fade-up" type="text"
                    class="form-control" name="" id="message" aria-describedby="helpId" placeholder=""/>    

                    <div data-aos="fade-up" className="captcha mt-4">
                    <ReCAPTCHA
                     sitekey="Your client site key"
                    />
                    </div>
                    <div data-aos="fade-up" className="sendmessage mt-4">
                    <Redbutton buttontext="Send Message" clickaction = { submit_form } />   
                    </div>     

        </div>

  </div>
</section>


        </div>

    </div>
  )
}

export default Politicalmarketing