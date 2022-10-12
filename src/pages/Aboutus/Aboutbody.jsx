import React, {useEffect} from "react";
import "./nicepageaboutus.css"
import "./Aboutus.scss"
import "./About.scoped.css"
import {Link} from "react-router-dom"

//icons
import { FaGlobeAmericas } from "@react-icons/all-files/fa/FaGlobeAmericas";
import { FaUserPlus } from "@react-icons/all-files/fa/FaUserPlus";
import { FaConnectdevelop } from "@react-icons/all-files/fa/FaConnectdevelop";

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Aboutbody() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (

    <div>

<div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > ABOUT US </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} About Us </span>
</div>

<div className='u-body u-xl-mode' >

    {/* Upper banner */}
  <section className="u-clearfix u-section-1 u-body u-xl-mode" id="sec-09ba">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row"  style={{height: "430px"}}  id='aboutsectionpicture'  >
            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-36 u-layout-cell-1">
              <div className="u-container-layout u-valign-top u-container-layout-1">
                <h3  className="u-text u-text-custom-color-1 u-text-default u-text-1"> Our Story</h3>
                <p  className="u-text u-text-default u-text-2"> What is creativity? Some think it’s being different but we believe it’s being different from your competitors and align with your brand personality.<br />
                  <br />When it comes to creating Digital&nbsp;<a href="https://bgdint.com/brand-identity/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1">Brand Identity</a>, the only problem is to bring the team on one page to speak the same language. This we have done successfully and manage to have&nbsp;<a href="https://bgdint.com/spantik/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-2">experts</a>&nbsp;on-board who are with great success stories and have developed a great piece of coordination. They are leaders in their domain and are together to take your Business GO Digital.<br />
                  <br />Our story based on “We will grow, together.”<br />
                  <br />Our business model is having the&nbsp;<a href="https://bgdint.com/development-unit/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-3">development</a>&nbsp;and&nbsp;<a href="https://bgdint.com/production-studio/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4">production house</a>&nbsp;in Pakistan, and marketing offices around the world, franchisee network in the targeted cities; the company will have to access the customers locally. Our local network approach will benefit us in reaching our customers and understanding the business needs well.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-24 u-layout-cell-2">
              <div className="u-container-layout u-container-layout-2">
                <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-1" style={{ height: "253px" , width: "255px" }}  src="/images/outstoryimage.jpg" alt data-image-width={930} data-image-height={910} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p data-aos="fade-up" className="u-text u-text-default u-text-3">
        <span className="u-text-custom-color-1 visiontext ">Vision</span>
      </p>
      <p data-aos="fade-up" className="u-text u-text-default  u-text-4" > Our vision is “To be a trustworthy partner in digital transformation and cloud technology” and we believe business partnerships are more valuable today than ever.<br />
        <br />We contribute international businesses to share their vision and experiences for the ultimate success. Our working approach is straightforward and just in three words: Think—Create—Deliver.
      </p>


      <div className="u-clearfix u-gutter-18 u-layout-wrap u-layout-wrap-2">
        <div className="u-layout">
          <div className="u-layout-row belowvision">
            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-3">
              <div className="u-container-layout u-container-layout-3">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-5"> Corporate Philosophy</p>
                <img className="u-expanded-width u-image u-image-default u-image-2" src="/images/pic1.jpg" alt data-image-width={1024} data-image-height={404} />
                <p className="u-text u-text-default u-text-6"> We believe that understanding our customers’ business approach is the first step<br />
                  <br />.We get an idea of the business models, customers, and other stakeholders before we propose a digital identity plan. To us, it’s not the website or app, graphics, or motion graphics, it’s not about logo or slogan – but it is all about the digital and social identity of the business that must fulfill the promises the company makes.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-4">
              <div className="u-container-layout u-container-layout-4">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-7"> Values, we believe in</p>
                <img className="u-expanded-width u-image u-image-default u-image-3" src="/images/jesus-kiteque-wn-KYaHwcis-unsplash-e1603899467240.jpg" alt data-image-width={1024} data-image-height={404} />
                <p className="u-text u-text-8"> We believe that understanding our customers’ business approach is the first step<br />
                  <br />.We get an idea of the business models, customers, and other stakeholders before we propose a digital identity plan. To us, it’s not the website or app, graphics, or motion graphics, it’s not about logo or slogan – but it is all about the digital and social identity of the business that must fulfill the promises the company makes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="u-clearfix u-layout-wrap u-layout-wrap-3">
        <div className="u-layout">
          <div className="u-layout-row">
            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-5" id = 'connecting_people' >
              <div className="u-container-layout u-container-layout-5">
              <span className="u-icon u-text-palette-1-base u-icon-1" id="aboutusicon" >
                <FaConnectdevelop/>
              </span>
                <p className="boldertext2 u-text u-text-custom-color-1 u-text-default u-text-9"> Connecting the World</p>
                <p className="u-text u-text-10"> We just don’t deliver the projects but connect our customers with their customers.</p>
              </div>
            </div>
            <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-6" id = "investing_people" >
              <div className="u-container-layout u-container-layout-6">
                <span className="u-icon u-text-palette-1-base u-icon-2" id="aboutusicon" >
              <FaUserPlus/>
              </span>
                <p className="boldertext2 u-text u-text-custom-color-1 u-text-default u-text-11"> Investing in People</p>
                <p className="u-text u-text-12"> Advance knowledge, hands-on experience, global exposure, and a professional environment, that all we provide</p>
              </div>
            </div>
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-7">
              <div className="u-container-layout u-container-layout-7">
                <p className="boldertext2 u-text u-text-custom-color-1 u-text-default u-text-13">Global Talent, Local Delivery </p>
                <span className="u-icon u-text-palette-1-base u-icon-3" id="aboutusicon" >
                <FaGlobeAmericas/>
                </span>
                <p className="u-text u-text-14"> We bring together resources required for job success, align them in our models, and promise a great job.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="lowersideabout">

      <p className="u-text u-text-default u-text-15"> Some Facts about&nbsp;<a className="dual-link u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-5" href="https://bgdint.com/" title="Business Go Digital">Business GO Digital</a>
      </p>
      <div className="u-clearfix u-layout-wrap u-layout-wrap-4">
        <div className="u-layout">
          <div className="u-layout-row">

            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-12 u-layout-cell-8">
              <div className="u-container-layout u-container-layout-8"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-4"><img src="/images/889114-db7d6efd.png" alt /></span>
                <p className="u-text u-text-default u-text-16"> Established in 2016</p>
              </div>
            </div>

            <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-12 u-layout-cell-8">
              <div className="u-container-layout u-container-layout-8"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-4"><img src="/images/52349-3a9cbd23.png" alt /></span>
                <p className="u-text u-text-default u-text-16"> Operational in 08 Regions </p>
              </div>
            </div>
            
            <div data-aos="fade-up"className="u-container-style u-layout-cell u-size-12 u-layout-cell-8">
              <div className="u-container-layout u-container-layout-8"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-4"><img src="/images/860762-e6c9e911.png" alt /></span>
                <p className="u-text u-text-default u-text-16">Headquarters in Saudi Arabia</p>
              </div>
            </div>

            <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-12 u-layout-cell-8">
              <div className="u-container-layout u-container-layout-8"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-4"><img src="/images/727245-4b71f9a8.png" alt /></span>
                <p className="u-text u-text-default u-text-16"> Speaks 10 Languages</p>
              </div>
            </div>

            
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-12 u-layout-cell-8">
              <div className="u-container-layout u-container-layout-8"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-4"><img src="/images/4207230-5aeede79.png" alt /></span>
                <p className="u-text u-text-default u-text-16"> Global Franchise Network</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <h3  data-aos="fade-up" className="u-text meetledersheading u-text-custom-color-1 u-text-default u-text-21"> Meet our Leaders</h3>
      <div data-aos="fade-up" className="u-clearfix u-layout-wrap u-layout-wrap-5">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-13 mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-13">
                <img className="u-image u-image-default u-image-4" src="/images/Sir-Khan-3.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-22"> Siddiq Ahmad Khan</p>
                <p className="u-text u-text-default u-text-23"> Chief Executive Officer</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-14  mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-14">
                <img className="u-image u-image-default u-image-5" src="/images/pexels-jad-el-mourad-7756862.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-24"> Sulaika Ali Abdullah</p>
                <p className="u-text u-text-default u-text-25"> Chief Human Resources Officer</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-15  mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-15">
                <img className="u-image u-image-default u-image-6" src="/images/Sir-Shahzad-2.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-26"> Shahzad Anwar</p>
                <p className="u-text u-text-default u-text-27"> Chief Operating Officer</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-16  mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-16">
                <img className="u-image u-image-default u-image-7" src="/images/Sir-Sameer-2.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-28"> Sameer Mohyuddin</p>
                <p className="u-text u-text-default u-text-29"> Chief Learning Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="u-clearfix u-layout-wrap u-layout-wrap-6">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-17 mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-17">
                <img className="u-image u-image-default u-image-8" src="/images/Muhammad-Atif-Altaf-2.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-30"> Muhammad Atif Altaf</p>
                <p className="u-text u-text-default u-text-31"> Regional Manager Canada</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-18 mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-18">
                <img className="u-image u-image-default u-image-9" src="/images/RM.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-32"> Ibtesam Moatisim Khan</p>
                <p className="u-text u-text-default u-text-33"> Regional Manager Pakistan</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-19 mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-19">
                <img className="u-image u-image-default u-image-10" src="/images/Sir-Usman-Ali-2.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-34"> Usman Ali</p>
                <p className="u-text u-text-default u-text-35"> Quality Assurance Advisor</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-20 mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-20">
                <img className="u-image u-image-default u-image-11" src="/images/Sir-Jun-1.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-36"> Jun</p>
                <p className="u-text u-text-default u-text-37"> Animation Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <div className="u-clearfix u-layout-wrap u-layout-wrap-8">
        <div className="u-layout">
          <div className="u-layout-row">
            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-41 u-layout-cell-22">
              <div className="u-container-layout u-container-layout-22">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-40"> Our Commitment towards Environment &amp; Society</p>
                <p className="u-text u-text-default u-text-41"> Our commitment to the laws, regulations, and policy concerning environmental issues is our priority and visible when we aim at transforming the business environment into a digital one. We take care of our surroundings, our people, their physical and mental health, and the society we live in. This world is our home and efforts towards protecting the environment will ensure a better home for our generations.<br />
                  <br />We are also part of the 10 Billion Tree Tsunami Pakistan,&nbsp;a five-year project to plant&nbsp;10 billion trees&nbsp;across&nbsp;Pakistan&nbsp;from 2018 to 2023 and contribute to plantation occasionally to promise healthy air for our young kids.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-19 u-layout-cell-23">
              <div className="u-container-layout u-container-layout-23">
                <img className="u-expanded-width u-image u-image-default u-image-13" src="/images/pexels-porapak-apichodilok-346885.jpg" alt data-image-width={640} data-image-height={426} />
              </div>
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



export default Aboutbody