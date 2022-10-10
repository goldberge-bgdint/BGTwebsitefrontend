import React, {useEffect} from "react";
import "./websitedevelopmen.scoped.css"
import "./nicepage.scoped.css"
import {Link} from "react-router-dom"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";


function Websitedevelopment() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>

        <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > WEBSITE DEVELOPMENT </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <Link to="/home" >home</Link> {`>>`} WEBSITE DEVELOPMENT </span>
        </div> 

        <div className="Websitedevelopmentlower u-body u-xl-mode">

      <section className="u-clearfix u-section-1" id="sec-81cd">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-valign-top u-container-layout-1">
        <h4 data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-1"> Website Development</h4>
        <p data-aos="fade-up" className="u-text u-text-2"> Business GO Digital understands the value and need of a website for a business. We believe this is the first interaction on the internet between a company and a potential customer. A website is a communication tool while the digital world is larger in size, quick in response, and authentic in sales. Our website development process is reliable and consists of Research &amp; Business Analysis (market, product, consumers)<br />Business Analysis (business, competitors, gaps)<br />Website Design (layout, architecture)<br />Integration (customization, product development, integration),<br />UX/UI design (design, interface, user-friendly)<br />Pre-Testing (Launch, QA engineers)<br />Beta Product (trial version, prototype, testing, modifications)<br />Launch (final product)<br />Maintenance &amp; Updates (support, reporting, regular updates) We offer website development services to SME’s or large size firms including E-Commerce, Marketplaces, Online payments, E-Learning, Educational institutions, Travel &amp; Hospitality, Entertainment, Real Estate, Marketing firms, Digital wallets, Healthcare, Pharmaceutical industry, Telecommunications, and IPTV solutions.
        </p>
      </div>
    </div>
    <div className="u-container-style u-expanded-width u-group u-group-2">
     
     
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

    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-15 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-3">
              <img className="u-image u-image-default u-preserve-proportions u-image-1" src="images/seo-1.png" alt data-image-width={128} data-image-height={128} />
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-45 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-4">
              <h5 className="u-text u-text-custom-color-1 u-text-3"> Your Digital Partner</h5>
              <p className="u-text u-text-4"> BGD International is one of the leading web development companies in the Middle East and Asia. We offer considerable website design services along with web development and digital/social marketing solutions. We are one of the best choices when you would like to transform or re-brand your business.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-5">
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-5"> Your Digital Partner</h5>
              <p className="u-text u-text-default u-text-6"> A website is everything to a company as a brand. The first-ever impression a visitor will get comes from a website and it is overly sensitive while you have no idea of who is the visitor. That’s why we define the type of visitors that might be viewing, and we focus on the appearance of the website. Our design department is determined to deliver what exceeds your expectations. Our developers know how to code and have expertise in developing websites online. They are involved in each step of the functionality of the website including front-end (HTML, CSS, PHP, and JavaScript) and back end (Ruby on Rails or Python and Django), and database (MySQL). Thanks to our professional team who contributes to making it one of the top web development companies in the region. Our offering is professional, affordable, and flexible for businesses and firms. Contact us to find out more about our web services that always come with a variety of skills and options to make, manage, maintain a quality website.</p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-4">
            <div className="u-container-layout u-container-layout-6">
              <img className="u-image u-image-default u-image-2" src="images/123321-e1603543939695.png" alt data-image-width={1127} data-image-height={783} />
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

export default Websitedevelopment