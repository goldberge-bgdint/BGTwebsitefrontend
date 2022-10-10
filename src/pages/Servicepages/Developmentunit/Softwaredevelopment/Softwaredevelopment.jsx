import React, {useEffect} from "react";
import "./Softwaredevelopment.scss"
import "./SoftwareDevelopment.scoped.css"
import "./nicepage.scoped.css"

import {Link} from "react-router-dom"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Softwaredevelopment() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>

        <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > Software Sevelopment </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up" className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} Software Sevelopment </span>
        </div>   

        <div className="softwaredevelopmentlower u-body u-xl-mode">

        <section className="u-clearfix u-section-1" id="sec-3d12">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-valign-top u-container-layout-1">
        <h4 data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-1"> ERP &amp; Software Development</h4>
        <p data-aos="fade-up" className="u-text u-text-default u-text-2"> Whether you are a start-up or an established business and searching for automation in process management, ERP-Enterprise Resource Planning is a platform with a fully integrated module for managing your work force and work flow, financial flows, and manufacturing processes. We offer high-end solutions to enhance your business processes and to follow projects and resources. We develop a solution to automate the process, centralize the data in one location, facilitate management with comprehensive reporting, manage better customer service, and assist functional departments of an organization. Our development unit extends its services in application development, software design, platform development from start-ups to mega businesses. Experienced developers make sure the product will optimize the business processes. Our team is experienced and motivated for development, developers, QA-engineers, project managers, business analysts, and IT consultants. Business analysis is the beginning to understand business and its processes and requirements, then the architecture and documentation are prepared, here you find developers in action to create e-processes, define functionality and databases, once ready, beta testing is the pre-final stage before software delivery. We are confident to install the software within your organization and train your people to be more productive and efficient.</p>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right"  className="u-container-style u-layout-cell u-size-20 u-layout-cell-1">
            <div className="u-container-layout u-container-layout-2">
              <p className="u-text u-text-default u-text-3">
                <span style={{fontWeight: 700}}> Enterprise Resource Planning</span>
                <br />
                <br />Enterprise Resource Planning systems (ERP) are software systems that show excellent coordination in various departments of an organization, including Financials, CRM, Operations, Administration, Business Processes, Manufacturing, Supply Chain, HR, and Inventory Management. It offers 24/7 real-time visibility, saves up to 70% of the time, and 85% of IT costs associated with managing multiple software and applications.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"  className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-3">
              <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-1" src="images/admin-ajax.jpg" alt data-image-width={400} data-image-height={400} />
            </div>
          </div>
          <div  data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-4">
              <p className="u-text u-text-4">
                <span style={{fontWeight: 700}} />
                <span style={{fontWeight: 700}}>Less Me, More Us</span>
                <br />
                <br />The coordination among the creative, development, implementation, and QC departments is our strength because we believe in Teamwork. Teamwork encourages creativity and brings developers to come together and share their knowledge and ideas. It improves their current skill set, and advance the overall team performance. Knowledge sharing is a massive advantage in organizations today and drives ownership of their work by taking full accountability. It also encourages feedback sharing to improve processes and quality of work. It is a more efficient way in the success of achieving goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-4">
            <div className="u-container-layout u-container-layout-5">
              <p className="u-text u-text-default u-text-5"> Web-based Solutions</p>
              <img className="u-image u-image-default u-image-2" src="images/carlos-muza-hpjSkU2UYSU-unsplash-e1603622898179.jpg" alt data-image-width={1920} data-image-height={1281} />
              <p className="u-text u-text-6"> A web-based software &amp; ERP solution is accessible from anywhere and easy to use.</p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-6">
              <p className="u-text u-text-default u-text-7"> Cloud Platform</p>
              <img className="u-expanded-width u-image u-image-default u-image-3" src="images/caspar-camille-rubin-0qvBNep1Y04-unsplash.jpg" alt data-image-width={1920} data-image-height={1280} />
              <p className="u-text u-text-8"> Control the power of cloud computing, integration, innovative, and secure business solutions.</p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-6">
            <div className="u-container-layout u-container-layout-7">
              <p className="u-text u-text-default u-text-9"> Industries, We serve</p>
              <img className="u-image u-image-default u-image-4" src="images/dylan-myers-DN_HqfOmhM4-unsplash.jpg" alt data-image-width={1920} data-image-height={1280} />
              <p className="u-text u-text-10"> Education, Healthcare, Food &amp; Entertainment, Banking, Business, HR, Travel &amp; Tourism, Transportation, Real Estate, and more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-container-style u-expanded-width u-group u-group-2">
      <div data-aos="fade-up" className="u-container-layout u-container-layout-8">
        <p className="u-text u-text-default u-text-11">
          <span style={{fontWeight: 700, fontSize: '1.125rem'}}> Reliable Delivery Model</span>
          <br />
          <br />Information analysis, modules selection, SRS preparation &amp; verifications, prototype &amp; approval, development &amp; testing, delivery &amp; maintenance. Feel confident to write to us for a corporate meeting, we will identify your business needs and will share with you the proposal accordingly.
        </p>
      </div>
    </div>
  </div>
</section>


        </div>


    </div>
  )
}

export default Softwaredevelopment