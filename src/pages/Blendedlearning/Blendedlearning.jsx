import React, {useEffect} from "react";
import "./Blendedlearning.scss"
import {Link} from "react-router-dom"
import blendingimage from "../../images/blendedlearningpic.jpg"

import "./blendedlearningnew.scoped.css"
import "./nicepage.scoped.css"

// Images

import blendingimage1 from "../../images/1-1.png"
import blendingimage2 from "../../images/2-2.png"
import blendingimage3 from "../../images/3-2.png"
import blendingimage4 from "../../images/4-2.png"
import blendingimage5 from "../../images/5-2.png"
import blendingimage6 from "../../images/6-2.png"

//lower images

import lowerimage1 from "../../images/competitive-256x256.png"
import lowerimage2 from "../../images/protest-256x256.png"
import lowerimage3 from "../../images/sales-funnel-256x256.png"
import lowerimage4 from "../../images/calculator-256x256.png"
import lowerimage5 from "../../images/international-256x256.png"
import lowerimage6 from "../../images/students-256x256.png"


// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";



function Blendedlearning() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

    let imagelist=[blendingimage1,blendingimage2,blendingimage3,blendingimage4,blendingimage5,blendingimage6]
    let lowerimages=[
        {   h:"Be the Pioneer, Digital School",
            image:lowerimage1
        },
        {   h:"Re-gain, Bargaining Power",
        image:lowerimage2
    },
    {   h:"Invest Today, ROI 4 Years",
    image:lowerimage3
},
{   h:"Controlled, Fixed Cost",
image:lowerimage4
},
{   h:"Accessibility, Global Students",
image:lowerimage5
},
{   h:"Multiply, Future Business",
image:lowerimage6
},
]

  return (
    <div>

            <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > BLENDED LEARNING </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} Blended Learning </span>
            </div>

           <div className='u-body u-xl-mode'>

         <section className="u-clearfix u-section-1" id="sec-a73f">
  <div className="u-clearfix u-sheet u-sheet-1">
    <h4 data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-1"> Blended Learning Strategy - Development - Implementation</h4>
    <div className="u-container-style u-expanded-width u-group u-shape-rectangle u-group-1">
      <div className="u-container-layout u-valign-top u-container-layout-1">
        <p data-aos="fade-right"  className="u-text u-text-default u-text-2"> We have a team of Global Certified Consultants, LMS Experts, Head of Learning, Program Manager, Implementation Consultants, e-Learning Designers, Instructional Designers, Graphics Designers, Administrator, Subject Matter Expert, and Certified Trainers for the project.<br />
          <br />
          <span style={{fontWeight: 700}}>Our services include:</span>
          <br />
          <br />1. Learning Transformation Strategy<br />2. Blended Learning Content Development<br />3. Learning Technology strategy , development, and implementation<br />4. Training Needs Analysis<br />
          <br />We create an atmosphere favorable to online business, cloud computing, marketing, advertising, and e-Learning in such a way that your&nbsp;<a href="https://bgdint.com/brand-identity/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1">brand</a>can be different from its competitors.&nbsp;We offer a variety of services that fulfill your need for business. We are the pioneers in Blended Learning Systems in Pakistan, resourceful, and committed to delivering the best technology and solutions.
        </p>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
            <div className="u-container-layout u-container-layout-2">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-3"> Traditional Online Education and e-Learning</h6>
              <p className="u-text u-text-4"> e-Learning is conducted over the internet through the use of interactive formats such as videos, streaming, screen shares and live Q&amp;A sessions. Covid-19 has changed a lot from traditional learning in physical classrooms, strict attendance and class schedule. Its not a questions anymore of which method is better. e-Learning is about lower costs and wider access to a variety of courses, peer/one to one learning and socialization time and opportunities that can be availed once you save travel time on daily basis and can choose a flexible time for self-study</p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-3">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-5"> Future of Education e-Learning Ecosystem</h6>
              <p className="u-text u-text-6"> Learning technology has matured considerably since its inception, there are still many problems that practitioners And when comes to implementing blended learning, one of the main problems is the complexity of integrating these systems with content and with other business systems. If e-learning is to be successful, it is important that we must provide greater access to education and support educational programs that reflect broader strategic business goals. It is our belief that the e-learning industry should learn key lessons from e-business.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-16 u-layout-cell-3">
            <div className="u-container-layout u-valign-top u-container-layout-4">
              <h6 className="u-text u-text-default u-text-7">
                <a href="https://bgdint.com/content-writing/" title="Our Content Strategy" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-2">Our Content Stategy</a>
              </h6>
              <p className="u-text u-text-8"><b>Visual learners</b>
                <br />(learn by seeing)<br /><b>Auditory learners</b>
                <br />(learn by hearing)<br /><b>Read-and-write learners</b>
                <br />(learn by reading &amp; writing)<br /><b>Kinesthetic learners</b>
                <br />(learn by doing &amp; playing
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-28 u-layout-cell-4">
            <div className="u-container-layout u-container-layout-5">
              <img className="u-expanded-width u-image u-image-contain u-image-default u-preserve-proportions u-image-1" src="images/Collarge-2-1.jpg" alt data-image-width={1500} data-image-height={1500} />
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-16 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-6">
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-9">
                <a href="https://bgdint.com/spantik/" title="Our Learning Professionals" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-3">Our Learning<br />Professionals
                </a>
              </h5>
              <p className="u-text u-text-10"> Academic BackgroundSubject Matter ExpertProfessional ConsultantsImplementation ExpertsCertified and ExperiencedSkillset and ResourcesProject ManagementDevelopment ExpertiseWorld-class Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-11"> Customized Learning Development</h3>
    <div data-aos="fade-up" className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-3">
      <div className="u-layout">
        <div className="u-layout-row" id='blendingdiv' >
          <div className="u-container-style u-layout-cell u-size-10 u-layout-cell-6">
            <div className="u-container-layout u-container-layout-7">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2" src="images/1-1.png" alt data-image-width={183} data-image-height={193} />
            </div>
          </div>
          <div className="u-container-style u-layout-cell u-size-10 u-layout-cell-7">
            <div className="u-container-layout u-container-layout-8">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-3" src="images/2-2.png" alt data-image-width={183} data-image-height={193} />
            </div>
          </div>
          <div className="u-container-style u-layout-cell u-size-10 u-layout-cell-8">
            <div className="u-container-layout u-container-layout-9">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-4" src="images/3-2.png" alt data-image-width={183} data-image-height={193} />
            </div>
          </div>
          <div className="u-container-style u-layout-cell u-size-10 u-layout-cell-9">
            <div className="u-container-layout u-container-layout-10">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5" src="images/4-2.png" alt data-image-width={183} data-image-height={193} />
            </div>
          </div>
          <div className="cell-temp-clone u-container-style u-layout-cell u-size-10 u-layout-cell-10">
            <div className="u-container-layout u-container-layout-11">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-6" src="images/5-2.png" alt data-image-width={183} data-image-height={193} />
            </div>
          </div>
          <div className="cell-temp-clone u-container-style u-layout-cell u-size-10 u-layout-cell-11">
            <div className="u-container-layout u-container-layout-12">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-7" src="images/6-2.png" alt data-image-width={183} data-image-height={193} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-4">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-42 u-layout-cell-12">
            <div className="u-container-layout u-container-layout-13">
              <h4 className="u-text u-text-custom-color-1 u-text-default u-text-12">
                <a href="https://bgdint.com/social-digital-media/" title="Deliverables – Integrated Media" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4">Deliverables – Integrated Media</a>
              </h4>
              <p className="u-text u-text-13">
                <span style={{fontWeight: 700}}> Basic</span>&nbsp;<a href="https://bgdint.com/printing-packaging/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-5">2/3D Graphics</a>, e-Books&amp; e-Library, Interactive Videos, Gamification (Educational Games), Podcasts<br />
                <br />
                <span style={{fontWeight: 700}}>Primary</span>&nbsp;&nbsp;2/3D Graphics, e-Books&amp; e-Library, Interactive Videos, Gamification (Educational Games), Podcasts, Community Network, Artificial Intelligence (Proctoring Solution)<br />
                <br />
                <span style={{fontWeight: 700}}>Provincial&nbsp;</span>2/3D Graphics, e-Books&amp; e-Library, Interactive Videos, Gamification (Educational Games), Podcasts, Community Network, Artificial Intelligence (Proctoring Solution), Coaching and Mentoring with International Experts.<br />
                <br />
                <span style={{fontWeight: 700}}>National&nbsp;</span>2/3D Graphics, e-Books&amp; e-Library, Interactive Videos, Gamification (Educational Games), Podcasts, Community Network, Artificial Intelligence (Proctoring Solution), Coaching and Mentoring with International Experts, Virtual Reality.<br />
                <br />
                <span style={{fontWeight: 700}}>Global&nbsp;</span>2/3D Graphics, e-Books &amp; e-Library, Interactive Videos, Gamification (Educational Games), Podcasts, Community Network, Artificial Intelligence (Proctoring Solution), Coaching and Mentoring with International Experts, Virtual Reality Immersive 360 VR &amp; AR Experience
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-18 u-layout-cell-13">
            <div className="u-container-layout u-valign-top u-container-layout-14">
              <h5 className="u-text u-text-14">
                <span className="u-text-custom-color-1">Differentiation</span>
              </h5>
              <ul className="u-text u-text-15">
                <li> Next Generation Learning</li>
                <li>Digital and Blended Learning</li>
                <li>Trust-Authorization-Confidentiality</li>
                <li>Security and Control</li>
                <li>Learning Best Practices</li>
                <li>Virtual Labs</li>
                <li>Non-stop education</li>
                <li>Interactive deliverables</li>
                <li>Education – Anywhere, anytime</li>
                <li>Time for extracurriculars and sports activities</li>
                <li>Offline Learning</li>
                <li>QR Code Access to resources</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-16"> Why blended learning, Now?</h3>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-5">
      <div className="u-layout">
        <div className="u-layout-row" id='blendedlearningimages'>

          
          <div data-aos="fade-right" className="u-align-center u-container-style u-layout-cell u-size-10 u-layout-cell-14">
            <div className="u-container-layout u-container-layout-15">
              <p className="u-text u-text-custom-color-1 u-text-17"> Be the Pioneer, <br /> Digital School</p>
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-8" src="images/competitive-256x256.png" id='uiimage2' alt data-image-width={183} data-image-height={193} />
            </div>
          </div>
          
          <div data-aos="fade-up" className="u-align-center u-container-style u-layout-cell u-size-10 u-layout-cell-14">
            <div className="u-container-layout u-container-layout-15">
              <p className="u-text u-text-custom-color-1 u-text-17"> Re-gain,<br />Bargaining Power</p>
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-8" src="images/protest-256x256.png" id='uiimage2' alt data-image-width={183} data-image-height={193} />
            </div>
          </div>

          <div data-aos="fade-up" className="u-align-center u-container-style u-layout-cell u-size-10 u-layout-cell-14">
            <div className="u-container-layout u-container-layout-15">
              <p className="u-text u-text-custom-color-1 u-text-17"> Invest Today,<br />ROI 4 Years</p>
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-8" src="images/sales-funnel-256x256.png" id='uiimage2' alt data-image-width={183} data-image-height={193} />
            </div>
          </div>

          <div data-aos="fade-up" className="u-align-center u-container-style u-layout-cell u-size-10 u-layout-cell-14">
            <div className="u-container-layout u-container-layout-15">
              <p className="u-text u-text-custom-color-1 u-text-17"> Controlled,<br />Fixed Cost</p>
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-8" src="images/calculator-256x256.png" id='uiimage2' alt data-image-width={183} data-image-height={193} />
            </div>
          </div>

          <div data-aos="fade-up" className="u-align-center u-container-style u-layout-cell u-size-10 u-layout-cell-14">
            <div className="u-container-layout u-container-layout-15">
              <p className="u-text u-text-custom-color-1 u-text-17"> Accessibility,<br />Global Students</p>
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-8" src="images/international-256x256.png" id='uiimage2' alt data-image-width={183} data-image-height={193} />
            </div>
          </div>

          <div data-aos="fade-left" className="u-align-center u-container-style u-layout-cell u-size-10 u-layout-cell-14">
            <div className="u-container-layout u-container-layout-15">
              <p className="u-text u-text-custom-color-1 u-text-17"> Multiply,<br />Future Business</p>
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-8" src="images/students-256x256.png" id='uiimage2' alt data-image-width={183} data-image-height={193} />
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

export default Blendedlearning