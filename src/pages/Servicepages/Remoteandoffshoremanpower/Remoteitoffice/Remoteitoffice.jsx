import React, {useEffect} from "react";
import "./nicepage.scoped.css"
import "./Remoteitoffice.scoped.css"
import {Link} from "react-router-dom"


// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";


function Remoteitoffice() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>

        <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > REMOTE IT OFFICE </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} REMOTE IT OFFICE </span>
        </div>  

        <div className="blenderlower u-body u-xl-mode">

 
   <section className="u-clearfix u-section-1" id="sec-09be">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-valign-top u-container-layout-1">
        <h4 data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-1"> STOP worrying to have an IT department</h4>
        <p data-aos="fade-up" className="u-text u-text-2"> Today business dynamics are different, and consumer behavior is entirely other than before. Being a digital brand is now critically important, even for small size businesses that need to make online offerings to compete. Practically it is not possible most of the time due to the inability to handle e-commerce, lack of IT skills, and limited resources to manage IT, staff. Business GO Digital understands the issue and has come up with a fantastic solution. No more worries for such questions: how to make a website? How to develop an android app? How to manage IT, staff? How much is the total cost to set-up an IT unit for my company? Do I need IT skills? How to maintain a website? Here is what we have designed for single owners or small size businesses between 1-15 employees.</p>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-2">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-3"> Let's connect to the world of Internet</p>
              <img className="u-expanded-width u-image u-image-default u-image-1" src="images/ipad-632394_1920-e1603022027750.jpg" alt data-image-width={961} data-image-height={960} />
              <p className="u-text u-text-default u-text-4"> If you are a successful business and have a history, but unable to be a part of the internet world, Business GO Digital is here to help you to be online. Don’t worry about the challenges a company has to face while shifting to the internet. We understand and has people to assist you.</p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-3">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-5"> First Time in Pakistan - Your IT Partner</p>
              <img className="u-image u-image-default u-image-2" src="images/handshake-3962172_1920-e1603022067194.jpg" alt data-image-width={961} data-image-height={960} />
              <p className="u-text u-text-default u-text-6"> We believe this kind of partnership will increase demand for direct-to-consumer brands, align the existing business with new ways of working and approaching customers, assist in focusing on the sustainable growth in the future, and manage brand recognition and value.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-7"> You may choose your required package from below:</h3>



    <div className="priceplan" >

  <div class="snip1214">


  <div data-aos="fade-up" class="plan">
    <h3 class="plan-title">
    Website Support
    </h3>
    <div class="plan-cost"><span class="plan-price">$160</span><span class="plan-type">/ Per Month </span></div>
    <ul class="plan-features">
      <li><i class="ion-checkmark"> </i> Web Updates </li>
      <li><i class="ion-checkmark"> </i> Web Maintenance </li>
      <li><i class="ion-checkmark"> </i> Performance Tuning </li>
      <li><i class="ion-checkmark"> </i> Web Analysis </li>
      <li><i class="ion-checkmark"> </i> Web Speed Analysis </li>
      <li><i class="ion-checkmark"> </i> Data Backup </li>
      <li><i class="ion-checkmark"> </i> 45 Hours a month </li>
      <li><i class="ion-checkmark"> </i> Persons : 1 </li>
    </ul>
    <div class="plan-select"><a href="">Buy Now</a></div>
  </div>


  <div data-aos="fade-up" class="plan">
    <h3 class="plan-title">
    Digital/Social Media Management
    </h3>
    <div class="plan-cost"><span class="plan-price"> $560 </span><span class="plan-type">/ Per Month </span></div>
    <ul class="plan-features">
      <li><i class="ion-checkmark"> </i> Website Support + </li>
      <li><i class="ion-checkmark"> </i> Facebook, LinkedIn, Additional 100$ a month </li>
      <li><i class="ion-checkmark"> </i> Digital Media Managemnet </li>
      <li><i class="ion-checkmark"> </i> Google Analytics </li>
      <li><i class="ion-checkmark"> </i> Youtube Channel Management</li>
      <li><i class="ion-checkmark"> </i> SEO Audit Reports</li>
      <li><i class="ion-checkmark"> </i> 90 Hours a month </li>
      <li><i class="ion-checkmark"> </i> Persons : 2 </li>
    </ul>
    <div class="plan-select"><a href="">Buy Now</a></div>
  </div>


  <div data-aos="fade-up" class="plan featured">
    <h3 class="plan-title">
    Ecommerce Unit
    </h3>
    <div class="plan-cost"><span class="plan-price">$2,990</span><span class="plan-type">/ Per Month </span></div>
    <ul class="plan-features">
      <li><i class="ion-checkmark"> </i>Digital/Social Media Management +</li>
      <li><i class="ion-checkmark"> </i>Inventory Management</li>
      <li><i class="ion-checkmark"> </i>Order Tracking & Management</li>
      <li><i class="ion-checkmark"> </i>Sales Management</li>
      <li><i class="ion-checkmark"> </i>Invoicing & Report</li>
      <li><i class="ion-checkmark"> </i>Return & Damages</li>
      <li><i class="ion-checkmark"> </i>Customer Services</li>
      <li><i class="ion-checkmark"> </i>Live Chat Support , Complaints Hadling</li>
      <li><i class="ion-checkmark"> </i>Reporting</li>
      <li><i class="ion-checkmark"> </i>Startup Installation Cost: 2,500$</li>
      <li><i class="ion-checkmark"> </i>450 Hours a month</li>
      <li><i class="ion-checkmark"> </i>Persons : 4</li>
    </ul>
    <div class="plan-select"><a href="">Buy Now</a></div>
  </div>


  <div data-aos="fade-up" class="plan">
    <h3 class="plan-title">
    IT Support
    </h3>
    <div class="plan-cost"><span class="plan-price">$5,000</span><span class="plan-type">/ Per Month </span></div>
    <ul class="plan-features">
      <li><i class="ion-checkmark"> </i>Ecommerce Unit +</li>
      <li><i class="ion-checkmark"> </i>IT Consultancy & Implementation</li>
      <li><i class="ion-checkmark"> </i>Server Handling & Updates</li>
      <li><i class="ion-checkmark"> </i>Emails Handling</li>
      <li><i class="ion-checkmark"> </i>Firewall & Security</li>
      <li><i class="ion-checkmark"> </i>Databases & Backup</li>
      <li><i class="ion-checkmark"> </i>Redudancy</li>
      <li><i class="ion-checkmark"> </i>Disaster & Recovery</li>
      <li><i class="ion-checkmark"> </i>Startup Installation Cost: 5,000$</li>
      <li><i class="ion-checkmark"> </i>630 Hours a month</li>
      <li><i class="ion-checkmark"> </i>Persons : 5</li>
    </ul>
    <div class="plan-select"><a href="">Buy Now</a></div>
  </div>


  
</div>

</div>


  </div>
</section>


        </div>

    </div>
  )
}

export default Remoteitoffice