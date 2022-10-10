import React, {useEffect} from "react";

//pages sections

import Slider from './slider/slider'

import Usecaseandreviews from './usecaseseandreviews/Usecaseandreviews.jsx'

import "./homepage.scoped.css"
import "./nicepage.scoped.css"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Homepage() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>
   
    <Slider/>

    <div className="">

  <section className="u-clearfix u-section-1" id="sec-9176">
  <div className="u-clearfix u-custom-color-5 u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
    <div className="u-layout">
      <div className="u-layout-row" id='homepage1stsection' >

        <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-1">
          <div className="u-container-layout u-container-layout-1">
            <h3 data-aos="fade-left" className="u-text u-text-default u-text-1">
              <span style={{fontWeight: 700}} className="u-text-custom-color-1"> OUR BUSINESS</span>
              <br />
            </h3>
            <p data-aos="fade-left" className="u-text u-text-2"> We create an atmosphere favorable to online business, cloud computing, marketing, advertising, and eCommerce in such a way that your brand can be different from its competition. We offer a variety of services that fulfill your need for business. We are the # 1 digital&nbsp;<a href="https://bgdint.com/brand-identity/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1">branding</a>&nbsp;agency in Pakistan, serving the global market for more than 4 years. We are the best cloud technology firm that offers consultancy, design, implementation, support and learning.
            </p>
          </div>
        </div>


        <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
          <div className="u-container-layout u-container-layout-2">
            <img data-aos="fade-up" className="u-expanded-width u-image u-image-default u-image-1" src="images/our-business-model.jpeg" alt data-image-width={768} data-image-height={640} />
          </div>
        </div>


        <div className="u-align-center u-container-style u-layout-cell u-size-20 u-layout-cell-3">
          <div className="u-container-layout u-container-layout-3">
            <h3 data-aos="fade-right" className="u-text u-text-3">
              <span style={{fontWeight: 700}}>
                <span style={{fontWeight: 700, fontSize: '2.25rem'}} className="u-text-custom-color-1" />
                <span style={{fontSize: '2.25rem'}} className="u-text-custom-color-1">Turnkey Solution</span>
                <br />
                <span style={{fontSize: '2.25rem'}}>
                  <span className="u-text-custom-color-1">Company</span>
                  <br />
                </span>
              </span>
              <br />
            </h3>
            <p data-aos="fade-right" className="u-text u-text-4"> Let’s discuss, What do you think – to&nbsp;<a href="https://bgdint.com/website-development/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-2">develop a website</a>, application, animation, or<a href="https://bgdint.com/social-media-management/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-3">
                <br />social media plan
              </a>. We do Resource Management – of designers and developers who are ready to deliver&nbsp;<a href="https://bgdint.com/digital-branding-strategy/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4">digital branding</a>&nbsp;projects. It’s Time to Transform the Business – running a business already and thinking of transformation on the internet or looking for digital identity. You may contact us in confidence. Once a Partner, Always a Partner –&nbsp;We create identity, communicate your message to the audience, develop your digital brand, market it to the right customers, and save the cost of operations by implementing cloud technology.
            </p>
          </div>
        </div>


      </div>
    </div>
  </div>
  <h2  data-aos="fade-up"  className="u-text u-text-custom-color-1 u-text-default u-text-5">OUR SERVICES</h2>
  <div className="u-clearfix u-layout-wrap u-layout-wrap-2">
    <div className="u-layout">
      <div className="u-layout-row">
        <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-4">
          <div  data-aos="fade-up"  className="u-container-layout u-container-layout-4"><span className="u-file-icon u-icon u-icon-1"><img src="images/1828640.png" alt /></span>
            <h6 data-aos="fade-up"   className="u-text u-text-custom-color-1 u-text-default u-text-6"> Brand Identity</h6>
            <p  data-aos="fade-up"  className="u-text u-text-7"> Whether you have a service firm, selling online products, offering online education, or have a website of a club or society or NGO, the customers will find you in digital media, social media, and the places you ignored to post. The digital world has no borders, which means you have to have a global digital identity. We are experts in such areas and have associates around the globe. Once you contact us, we will have an opportunity to show you what we said earlier.</p>
          </div>
        </div>
        <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-5">
          <div   data-aos="fade-up" className="u-container-layout u-valign-top u-container-layout-5"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-2"><img src="images/527995-254ba67a.png" alt /></span>
            <h6  data-aos="fade-up"  className="u-text u-text-custom-color-1 u-text-default u-text-8"> Production Studio</h6>
            <p  data-aos="fade-up"  className="u-text u-text-9"> If you are thinking to bring a fresh perspective to your brand and willing to create a world with no boundaries, its time to go for animation. It would help you to grab attention and engage customers of a broader demographic. It’s an entertaining way to make complex ideas more interesting and appealing. You may choose from diverse styles, likable characters, and different formats of media. Create New Worlds and Push Boundaries.</p>
          </div>
        </div>
        <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-6">
          <div  data-aos="fade-up"  className="u-container-layout u-container-layout-6"><span className="u-file-icon u-icon u-icon-3"><img src="images/1828640.png" alt /></span>
            <h6 data-aos="fade-up"   className="u-text u-text-custom-color-1 u-text-default u-text-10"> Development House</h6>
            <p  data-aos="fade-up"  className="u-text u-text-11"> We believe it’s not just a website or application but your digital brand identity. Creating your business website, a digital transformation, App is a must, Android or IOS, Real-time app, and 3D model &amp; 360 VR Tour whatever is necessary we propose to our client with confidence.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="u-clearfix u-layout-wrap u-layout-wrap-3">
    <div className="u-layout">
      <div className="u-layout-row">
        <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-7">
          <div data-aos="fade-up"  className="u-container-layout u-container-layout-7"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-4"><img src="images/733477-99e0aeef.png" alt /></span>
            <h6  data-aos="fade-up"  className="u-text u-text-custom-color-1 u-text-default u-text-12"> Digital &amp; Social Media</h6>
            <p data-aos="fade-up"  className="u-text u-text-13"> A team of young experts who keep themselves in touch with the new search and social trends and ensure to work around a strategy that produces numbers and creates brand awareness with high engagement rates.<br />You can allocate your budget, design your own package, we will plan as per your budget, and execute the plan accordingly.
            </p>
          </div>
        </div>
        <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-8">
          <div data-aos="fade-up"  className="u-container-layout u-valign-top u-container-layout-8"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-5"><img src="images/1077114-7f99cd2a.png" alt /></span>
            <h6  data-aos="fade-up"  className="u-text u-text-custom-color-1 u-text-default u-text-14"> Offshore Remote Manpower</h6>
            <p  data-aos="fade-up"  className="u-text u-text-15"> We recruit and manage staff and your Company has 100% control over the recruitment process, performance, work, project deadlines, tasks, and contract period. We are your Offshore office in Pakistan. We manage an IT department of any size and a team of professionals for international companies and entrepreneurs. You share with us your demand, we hire, manage and support remote staff.</p>
          </div>
        </div>
        <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-9">
          <div data-aos="fade-up"  className="u-container-layout u-valign-top u-container-layout-9"><span className="u-file-icon u-icon u-icon-6"><img src="images/4785667.png" alt /></span>
            <h6  data-aos="fade-up"  className="u-text u-text-custom-color-1 u-text-default u-text-16"> Printing &amp; Packaging</h6>
            <p  data-aos="fade-up"  className="u-text u-text-17"> It is the product packaging that attracts the attention of the consumers. The need for the packaging design is significant, the quality of the material is added value, and the shape remains the most important one. Our company packaging &amp; printing unit is in Pakistan, a market full of resources and talent, and can delivery around the globe. Of course, with the most competitive prices.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <img data-aos="fade-up" className="u-image u-image-default u-image-2" src="images/All-Services-1-2048x7991.jpg" alt data-image-width={2048} data-image-height={799} />
  <h3 data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-18"> Customer Experience is Everything Today! Transform to Cloud Technology</h3>
  <p data-aos="fade-up" className="u-text u-text-19"> The cloud is everything: from traditional benefits to the value. It keeps growing and accelerating, the cloud is an exciting way to run a business since it brings a competitive advantage over others. Its benefits include cost reduction, efficiency, data security &amp;amp; recovery, Scalability, convenience, and control over sensitive data.</p>
  <a data-aos="fade-up" href="https://nicepage.com/website-design" id='explorebutton' className="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-5">Explore Services</a>
</section>


    </div>
    
    <Usecaseandreviews/>
    
    </div>
  )
}

export default Homepage