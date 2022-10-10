import React , {useState, useEffect} from "react";
import "./nicepage.scoped.css";
import "./offshoremanpower.scoped.css";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import ReCAPTCHA from "react-google-recaptcha";
import Redbutton from "../../../../components/button/redbutton/redbutton";

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Offshoremanpower() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  let submit_form= () =>{

    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let mobilenumber = document.getElementById("mobilenumber").value
    let email = document.getElementById("email").value
    let telephone = document.getElementById("telephone").value
    let designation = document.getElementById("designation").value
    let jobdescription = document.getElementById("jobdescription").value
    let minexperiece = document.getElementById("minexperiece").value
    let maxexperience = document.getElementById("maxexperience").value
    let specialexperience = document.getElementById("specialexperience").value
    let sofskills = document.getElementById("sofskills").value
    let tehnicalskills = document.getElementById("tehnicalskills").value
    let jobskills = document.getElementById("jobskills").value
    let contractduration = document.getElementById("contractduration").value
    let age = document.getElementById("age").value
    let checking = document.getElementById("checking").value

    if ( name!="" && address!="" && mobilenumber!="" && email!="" && email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) 
    && telephone!="" && designation!="" && designation!="" && jobdescription!="" && minexperiece!="" && maxexperience!="" &&
    specialexperience!="Choose Speciially Experience" && sofskills!="" && tehnicalskills!="" && jobskills!="" && contractduration!="" && age!="" && checking!="" )
    {
      alert("Successfully Sent !")

      document.getElementById("name").value = ""
      document.getElementById("address").value = ""
      document.getElementById("mobilenumber").value = ""
      document.getElementById("email").value = ""
      document.getElementById("telephone").value = ""
      document.getElementById("designation").value = ""
      document.getElementById("jobdescription").value = ""
      document.getElementById("minexperiece").value = ""
      document.getElementById("maxexperience").value = ""
      document.getElementById("specialexperience").value = ""
      document.getElementById("sofskills").value = ""
      document.getElementById("tehnicalskills").value = ""
      document.getElementById("jobskills").value = ""
      document.getElementById("contractduration").value = ""
      document.getElementById("age").value = ""
      document.getElementById("checking").value = ""

    }
    else
    {
      alert("Error! please try again !")
    }

  }

  return (
    <div>
        
      <div className="blendedslider text-center ">
        <h5 data-aos="fade-up" > Offshore Manpower  </h5>
        <div className="blendedsliderdivider" />
        <span className="blendedsliderlink">
          {" "}
          You are here:{" "}
          <a data-aos="fade-up"  href="/home">
            {" "}
            <Link to="/home">home</Link>{" "}
          </a>{" "}
          {`>>`} Offshore Manpower {" "}
        </span>
      </div>

      <div className="u-body u-xl-mode">
        <section className="u-clearfix u-section-1" id="sec-560b">
          <div
            className="u-container-style u-expanded-width u-group u-image u-image-1"
            data-image-width={1919}
            data-image-height={783}
          >
            <div className="u-container-layout u-container-layout-1">
              <h4 data-aos="fade-right" className="u-text u-text-custom-color-1 u-text-default u-text-1">
                {" "}
                Body/Team Leasing
              </h4>
              <p data-aos="fade-left" className="u-text u-text-default u-text-2">
                {" "}
                Today business dynamics are different, and consumer behavior is
                entirely other than before. Being a digital brand is now
                critically important, even for small size businesses that need
                to make online offerings to compete. Practically it is not
                possible most of the time due to the inability to handle
                e-commerce, lack of IT skills, and limited resources to manage
                IT, staff.
                <br />
                The post-pandemic situation has caused several issues, including
                travel restrictions, social distancing at workplaces, human
                resources management, economic slowdown, decrease in profits,
                visa restriction in talent acquisition, increased cost in
                managing mental health and wellbeing of employees, engagement to
                avoid slow working pace and low performance. On the other hand,
                the quality has compromised; sales are affected, and taxes have
                increased in some regions. The overall company’s situation is
                critical, and revenues are shrinking with threats of shutting
                down.
              </p>
            </div>
          </div>
          <div
            className="u-container-style u-expanded-width u-group u-image u-image-2"
            data-image-width={1920}
            data-image-height={918}
          >
            <div className="u-container-layout u-container-layout-2">
              <div className="u-container-style u-grey-80 u-group u-group-3">
                <div className="u-container-layout u-container-layout-3">
                  <div className="u-container-style u-grey-5 u-group u-group-4">
                    <div className="u-container-layout u-container-layout-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-5">
                    <h5 className="u-align-center u-text u-text-custom-color-1 u-text-default u-text-3">
                      {" "}
                      Do you have a<br />
                      specific requirement?
                    </h5>
                    <p className="u-text u-text-4">
                      {" "}
                      We have a specialty in managed IT services, network
                      configurations, Cybersecurity, e-commerce Telesales,
                      Blockchain, content writing, social media managers (SEO),
                      assisted development, module integration, and customized
                      request if you have. We work with most of the industries
                      like consulting, oil &amp; gas, construction,
                      manufacturing, engineering, data centers, software houses,
                      banking, education, and hospitality.If you need a team of
                      individuals with a specific portfolio, we will search the
                      local and international markets and will find candidates
                      to join your company. Our HR department will coordinate
                      with IT management to find the right candidate for the
                      right job. Our process is very simple and effective while
                      we manage staff and promise quality assurance.
                    </p>
                  </div>
                </div>
                <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-6">
                    <h5 className="u-align-center u-text u-text-custom-color-1 u-text-default u-text-5">
                      {" "}
                      Technology Areas
                    </h5>
                    <p className="u-text u-text-6">
                      {" "}
                      Our customers are passionate about the technological areas
                      for which they recruit. We offer world-class specialists,
                      qualified and experienced teams and staff. Our highly
                      specialized recruiters provide top-class IT specialists
                      including programming and quality management, Middleware,
                      and many more.
                      <br />
                      IT Solutions
                      <br />
                      ERP Functional Consultants
                      <br />
                      Technical Consultants
                      <br />
                      Architects of IT systems, applications, and solutions
                      <br />
                      Software Developers
                      <br />
                      Project Managers &amp; Program Managers
                      <br />
                      Product Managers
                      <br />
                      Customer Service Specialists
                      <br />
                      Technical Writers &amp; Content Managers
                      <br />
                      Backend Technologies
                      <br />
                      Frontend Technologies
                      <br />
                      Mobile Technologies
                      <br />
                      Testing and Quality Assurance
                    </p>
                  </div>
                </div>
                <div  data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-3">
                  <div className="u-container-layout u-container-layout-7">
                    <h5 className="u-align-center u-text u-text-custom-color-1 u-text-default u-text-7">
                      {" "}
                      What Qualification do you need?
                    </h5>
                    <p className="u-text u-text-8">
                      {" "}
                      Business GO Digital offers Off-Shore IT staff while you
                      can hire Graphic Designers (Adobe, After Effects,
                      Illustrator, Publisher, InDesign, Digital Identity, etc.),
                      Animation &amp; Production Engineers (2D, 3D, Unity,
                      Maya,3ds Max Design, Adobe Animate, etc.), AutoCAD,
                      Architecture &amp; Designers, Landscaping, and Motion
                      Graphic Technicians (Video Editing, TVC, Documentaries,
                      Virtual Reality, Augmented Reality, Virtual Champions). In
                      case you are looking for developers and programmer like
                      ERP Developers (.NET, Java, C++, Python, SAP, Desktop
                      Application, etc.), Database (SQL, Oracle, etc.), Web
                      Developers (PHP, Laravel, JavaScript, .NET, jQuery, HTML5,
                      WordPress, CSS, Bootstrap, UIkit, CodeIgniter, VueJs,
                      ReactJs, Angular, Django, WooCommerce, Joomla, Drupal,
                      Shopify, Ruby on Rails, etc.), Artificial Intelligence
                      (AI) a,d App Developers (Android, IOS, React Native,
                      Native Script, Ionic, Flutter, Real-Time ).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </section>
      </div>


      <div className="offsoreform">
      
      <h4 data-aos="fade-right"  className="text-center " style={{color:"var(--primary)"}} >Request for Body/Team Lease Proposal</h4>
      <p  data-aos="fade-left" className="text-center " > We monitor the IT job global market on an ongoing basis and act on you behalf of our customers, minimizing human resource formalities in the recruitment process. Forget a multi-stage recruitment process followed by the legal formalities for weeks. You do not have to go through all the process of recruitment of IT candidates. Send us your requirements and we will contact you with a commercial proposal. </p>
      
      <div data-aos="fade-up" className="contactformoffshore mt-4">

      <div className="row mt-3">
        <div className="col-md-6">
          
            
            <input type="text"
              class="form-control mt-lg-0 mt-2 " name="" id="name" aria-describedby="helpId" placeholder="Name of your company"/>
         
          
        </div>
        <div className="col-md-6">

             <input type="text"
              class="form-control mt-lg-0 mt-2 " name="" id="address" aria-describedby="helpId" placeholder="address"/>

        </div>
      </div>



      <div className="row mt-3">
        <div className="col-md-4">
        <input type="number"
              class="form-control mt-lg-0 mt-2" name="" id="mobilenumber" aria-describedby="helpId" placeholder="Mobile number"/>
        </div>
        <div className="col-md-4">
        <input type="email"
              class="form-control mt-lg-0 mt-2" name="" id="email" aria-describedby="helpId" placeholder="Company email"/>
        </div>
        <div className="col-md-4">
        <input type="number"
              class="form-control mt-lg-0 mt-2" name="" id="telephone" aria-describedby="helpId" placeholder="Telephone"/>
        </div>
      </div>



      <div className="row mt-3">
        <div className="col-md-4">
           <input type="text"
              class="form-control mt-lg-0 mt-2" name="" id="designation" aria-describedby="helpId" placeholder="Designation"/>
        </div>
        <div className="col-md-4">
           <input type="text"
              class="form-control mt-lg-0 mt-2" name="" id="jobdescription" aria-describedby="helpId" placeholder="Job Description"/>
        </div>
    
      </div>



      <div className="row mt-3">
        <div className="col-md-4">
           <input type="number"
              class="form-control  mt-lg-0 mt-2" name="" id="minexperiece" aria-describedby="helpId" placeholder="Minimum Experience"/>
        </div>
        <div className="col-md-4">
           <input type="number"
              class="form-control  mt-lg-0 mt-2" name="" id="maxexperience" aria-describedby="helpId" placeholder="maximum Experience"/>
        </div>
        <div className="col-md-4">

         
          
            <select class="form-control mt-lg-0 mt-2" name="" id="specialexperience">
              <option>Choose Speciially Experience</option>
              <option>Demos</option>
              <option>Project</option>
            </select>
          
          
        </div>
      </div>


      <div className="row mt-3 ">

        {/* Qualification Radio */}
      <div className="col-md-4">     
      
      <label class="form-check-label mt-lg-0 mt-2" for="Qualification">
      Qualification:
      </label>

      <div class="form-check mt-2 ">
        <input class="form-check-input mt-lg-0 mt-2" checked type="radio" name="Qualification" id="flexRadioDefault1"/>
           <label class="form-check-label" for="flexRadioDefault1">
              Essential
           </label>
      </div>

      <div class="form-check">
        <input class="form-check-input mt-lg-0 mt-2" type="radio" name="Qualification" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">
              Preferable
          </label>
      </div>

      </div>


      {/* Certification Radio */}
       
      <div className="col-md-4">     
      
      <label class="form-check-label" for="Certifications">
      Certifications:
      </label>

      <div class="form-check mt-2 ">
        <input class="form-check-input mt-lg-0 mt-2" checked type="radio" name="Certifications" id="flexRadioDefault1"/ >
           <label class="form-check-label" for="flexRadioDefault1">
              Essential
           </label>
      </div>

      <div class="form-check">
        <input class="form-check-input mt-lg-0 mt-2" type="radio" name="Certifications" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">
              Preferable
          </label>
      </div>

      </div>



      </div>                    


      <div className="row mt-3">
        <div className="col-md-4">
           <input type="text"
              class="form-control mt-lg-0 mt-2" name="" id="sofskills" aria-describedby="helpId" placeholder="Soft Skills"/>
        </div>
        <div className="col-md-4">
           <input type="text"
              class="form-control mt-lg-0 mt-2" name="" id="tehnicalskills" aria-describedby="helpId" placeholder="Technicial Skills"/>
        </div>
        <div className="col-md-4">
           <input type="text"
              class="form-control mt-lg-0 mt-2" name="" id="jobskills" aria-describedby="helpId" placeholder="job Skills"/>
        </div>
      </div>



      <div className="">

      <label class="form-check-label mt-4 " for="flexRadioDefault1">
      Contract Type:
      </label>

      <div class="form-check mt-2 mt-2 ">
        <input class="form-check-input mt-lg-0 mt-2" checked type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
           <label class="form-check-label" for="flexRadioDefault1">
              Full time
           </label>
      </div>

      <div class="form-check">
        <input class="form-check-input mt-lg-0 mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">
              Part time
          </label>
      </div>

      <div class="form-check">
        <input class="form-check-input mt-lg-0 mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">
              Contract based
          </label>
      </div>

      <div class="form-check">
        <input class="form-check-input mt-lg-0 mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">
              Internee
          </label>
      </div>
      </div>




      <div className="row mt-3">
        <div className="col-md-4">
           <input type="text"
              class="form-control mt-lg-0 mt-2" name="" id="contractduration" aria-describedby="helpId" placeholder="Contract Duration"/>
        </div>
        <div className="col-md-4">
           <input type="number"
              class="form-control mt-lg-0 mt-2" name="" id="age" aria-describedby="helpId" placeholder="Age"/>
        </div>
        <div className="col-md-4">
          
         <input className="mt-lg-0 mt-2" type="date" id="checking" name=""  />

        </div>
      </div>

      <div className="row mt-5">

        <div className="col-md-4">
        <ReCAPTCHA sitekey="Your client site key" />
        </div>
        <div className="col-md-4 mt-md-0 mt-5 submitbuttondiv">
        <Redbutton data-aos="zoom-in" clickaction={submit_form} buttontext="Send Message" />
        </div>

      </div>


     


      </div>

      </div>         

    </div>
  );
}

export default Offshoremanpower;
