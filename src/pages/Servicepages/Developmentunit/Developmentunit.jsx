import React, {useEffect} from "react";
import "./Developmentunit.scoped.css"
import "./nicepage.css"
import "./Developmentunit.scss"
import {Link} from "react-router-dom"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Developmentunit() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);


  return (
    <div>

        <div className='developmentslider'>

          <img src="images/Development-2048x799.jpg" className='developmentimage' alt="Not Found" />
            
        </div>  

        <div className="developmentunitlower u-body u-xl-mode">

   <section className="u-clearfix u-section-1" id="sec-6c5c">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-valign-top u-container-layout-1">
        <h4 data-aos="fade-up"  className="u-text u-text-custom-color-1 u-text-default u-text-1"> Development Unit</h4>
        <p  data-aos="fade-up" className="u-text u-text-default u-text-2"> The first impression might be the last; it’s more applicable to the internet. The web application is a first-ever interaction of your company. A website speaks for you without you being physically present. With our customers, with your customers, it is only a few seconds &amp; you have to win customers. A typical site attracts random visitors, but a great website turns those visitors into loyal customers. A website should be effective enough to create a lasting first impression and a brand can only prosperous if it is virtually present for the world to see. In today’s world, an online presence for a brand is as crucial as anything else. These days, whenever we hear a brand name, most of us tend to search it online first before doing anything else. The world is becoming smarter and so are the websites, by turning themselves into their app versions. Applications are the next big thing as it provides maximum services in the minimum time, at one place.<br />
          <br />International customer have trusted us in delivering the websites as per their business needs.
        </p>
      </div>
    </div>

     


        {/*  Slider */}

      
        <div data-aos="fade-up" id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/901.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/902.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/903.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/904.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/905.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    

        {/*  */}


    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-3">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-3"> Website Development</p>
              <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-1" src="images/pexels-pixabay-269323.jpg" alt data-image-width={960} data-image-height={960} />
              <p className="u-text u-text-4"> BGD International offers considerable website design services along with web development and digital/social marketing solutions. We are one of the best choices when you would like to transform or re-brand your business. Thanks to our professional team who contributes to making it one of the top web development companies in the region. Our offering is professional, affordable, and flexible for businesses and firms. Contact us to find out more about our web services that always come with a variety of skills and options to make, manage, maintain a quality website.</p>
              <p className="u-text u-text-custom-color-1 u-text-5">
                <a className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1" href="http://bgdint.com/website-development/">Read More </a>
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-4">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-6"> Application Development</p>
              <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-2" src="images/fotis-fotopoulos-LJ9KY8pIH3E-unsplash-e1602868378992.jpg" alt data-image-width={961} data-image-height={960} />
              <p className="u-text u-text-7"> The facts show there are 5-15 billion mobile users are living in this world and in 2021, e-commerce sales are expected to reach $4.9 trillion? What are you waiting for then? A start-up, SMEs, or going across the border, if you are in the e-commerce industry and this is the right moment to make a decision to have a mobile application. BGD is a reliable app development company to build native applications (iOS &amp; Android -Swift, Objective-C, Java, Kotlin), cross-platform (React Native, Cordova, Ionic, Xamarin &amp; Unity), and mobile web (HTML5 CSS JS).</p>
              <p className="u-text u-text-custom-color-1 u-text-8">
                <a className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-2" href="http://bgdint.com/website-development/">Read More </a>
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-5">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-9"> ERP &amp; Software Development</p>
              <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-3" src="images/pexels-thisisengineering-3862132-2.jpg" alt data-image-width={960} data-image-height={960} />
              <p className="u-text u-text-10"> Enterprise Resource Planning systems (ERP) are software systems that show excellent coordination in various departments of an organization, including Financials, CRM, Operations, Administration, Business Processes, Manufacturing, Supply Chain, HR, and Inventory Management. It offers 24/7 real-time visibility, saves up to 70% of the time and 85% of IT costs associated with managing multiple software and applications.</p>
              <p className="u-text u-text-custom-color-1 u-text-11">
                <a className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-3" href="http://bgdint.com/website-development/">Read More </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-container-style u-expanded-width u-group u-group-3">
      <div className="u-container-layout u-valign-top u-container-layout-6">
        <p data-aos="fade-up"  className="u-text u-text-custom-color-1 u-text-default u-text-12"> Architectural Design Studio</p>
        <img data-aos="fade-up"  className="u-expanded-width u-image u-image-default u-image-4" src="images/pexels-binyamin-mellish-1396122-scaled.jpg" alt data-image-width={1920} data-image-height={640} />
        <p data-aos="fade-left"  className="u-text u-text-13"> We offer the best quality services in 3D Architectural (Interior &amp; Exterior), Augmented Reality, 3D Animation Visualisation, with expertise in rendering &amp; modeling to bring a real-time user experience. The 3D virtual tour is becoming the norm in most industries including the real estate, entertainment, and hospitality industry. That is a great idea when you embed the 3D virtual tour of the property on your website, potential customers can learn everything about the property and be confident to have details about it. The amazing 360-degree view, video, photos, and remote walk-through of the property make it more attractive to the buyers no matter they are from anywhere in the world.</p>
        <a data-aos="fade-right"  className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4" href="http://bgdint.com/website-development/">Read More </a>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-4">
            <div className="u-container-layout u-valign-top u-container-layout-7">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-14"> Experienced Professionals</p>
              <img className="u-image u-image-default u-preserve-proportions u-image-5" src="images/pexels-anthony-shkraba-4348404.jpg" alt data-image-width={960} data-image-height={960} />
              <p className="u-text u-text-15"> Business GO Digital Team is led by an ex-Intel and ex-Adobe technical heads and communication engineer, with an expert team and development house facility for an ultimate solution to our clients.</p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-8">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-16"> Digital Image Building</p>
              <img className="u-image u-image-default u-preserve-proportions u-image-6" src="images/pexels-designecologist-1779487-1.jpg" alt data-image-width={960} data-image-height={963} />
              <p className="u-text u-text-17"> We believe it’s not just a website or application but your identity and brand values. Creating your business site include a virtual/digital transformation, App is a must, Android or IOS, Real-time app and 3D model &amp; 360 VR Tour whatever is necessary we propose our client with confidence.</p>
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

export default Developmentunit