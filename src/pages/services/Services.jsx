import React, {useEffect} from "react";
import "./services.scss";
import servicesupperpicture from "../../images/servicesupperpicture.jpg";
import ReCAPTCHA from "react-google-recaptcha";
import Redbutton from "../../components/button/redbutton/redbutton";

import "./servicespage.scoped.css";
import "./nicepage.scoped.css";

// importing components
import iconb from "../../images/modern-play-button-1.png";



// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Services() {


  let submitf_form = () =>{

  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let message = document.getElementById("message").value

  if ( name!="" && email!="" && email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && message!="" )
  {
    alert("Successfully Submitted !")
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""
  }
  else
  {
    alert("Error ! please enter valid detials and submit again")
  }
  
  }

  return (
    <div>
      {/* Slider image */}

      <img className="serviceheadingimage" src={servicesupperpicture} alt="" />

      {/*  */}

      {/*  About text Service cards and cloud */}

      <div className="u-body u-xl-mode">
        <section className="u-clearfix u-section-1" id="sec-e234">
          <div className="u-clearfix u-sheet u-sheet-1">
            <h2      data-aos="fade-up"  className="u-text u-text-custom-color-1 u-text-1 ">
              {" "}
              DIGITAL IDENTITY TRANSFORMATION SERVICES
            </h2>
            <p data-aos="fade-up" className="u-text u-text-2 ">
              <span style={{ fontWeight: 700 }}>
                <a     
                  href="https://bgdint.com/"
                  className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1"
                >
                  Business GO Digital
                </a>
              </span>
              &nbsp;is the best company when it comes to digital identity and
              branding. Our comprehensive range of services covers all the
              required areas a brand needs in the branding process. The process
              starts with&nbsp;Research &amp; Analysis:&nbsp;Our challenge
              beings with the brainstorming process – teams from all departments
              come together for a job to create something very innovative and
              authentic. The second phase is&nbsp;Idea Development:&nbsp;The
              idea is everything to an entrepreneur but to us, the experience is
              what customer is having while interacting digitally or socially.
              It is a matter of seconds to win the customer before one clicks
              away. Then it shifts to&nbsp;Launch &amp; Monitoring:&nbsp;Time is
              everything with an introduction of 5G, and we are committed to
              delivering the project on time. We carefully calculate the time
              before making a promise and allocate resources accordingly. The
              final stage is&nbsp;Followups &amp; Maintenance:&nbsp;We believe
              in long-term partnerships, and it is visible in our contracts.
              Digital Identity must be fresh always with changing time and
              trends. Our technical support and advisory are available as long
              as you need it.
            </p>
            <a data-aos="fade-up"
              href="https://nicepage.com"
              className="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-2 "
            >
              About Us
            </a>

            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div     data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-1 ">

                    <div className="u-container-layout u-container-layout-1">
                      <img
                        className="u-expanded-width u-image u-image-1"
                        src="images/pexels-andrea-piacquadio-3758105-e1602604065706.jpg"
                        data-image-width={739}
                        data-image-height={960}
                      />
                      <h4 className="u-text u-text-custom-color-1 u-text-default u-text-3">
                        {" "}
                        Brand Ident​ity
                      </h4>
                      <p className="u-text u-text-default u-text-4">
                        {" "}
                        We are experts in building the brand identity of various
                        industries, including FMCG, manufacturing, service
                        industry, hospitality, education &amp; entertainment.
                      </p>
                      <a
                        className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-3"
                        href="https://nicepage.com" 
                      >
                        <br />
                        {" "}
                        Read More about { ( window.screen.availWidth<860 )?  <br />:"" } Brand Identity&nbsp;»
                      </a>
                    </div>
                  </div>
                  <div     data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-2">
                      <img
                        className="u-expanded-width u-image u-image-2"
                        src="images/pexels-otavio-fonseca-4665064-e1602604289424.jpg"
                        data-image-width={739}
                        data-image-height={960}
                      />
                      <h4 className="u-text u-text-custom-color-1 u-text-default u-text-5">
                        {" "}
                        Production Studio
                      </h4>
                      <p className="u-text u-text-default u-text-6">
                        {" "}
                        We offer 2D 3D animation and modeling, digital and tv
                        commercials, documentary, Infographics and YouTube
                        channel management, contact our production-house team.
                      </p>
                      <a
                        className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4"
                        href="https://nicepage.com"
                      >
                        {" "}
                        Read More about { ( window.screen.availWidth<860 )?  <br />:"" }  Brand Identity&nbsp;»
                      </a>
                    </div>
                  </div>
                  <div    data-aos="fade-left"  className="u-container-style u-layout-cell u-size-20 u-layout-cell-3">
                    <div className="u-container-layout u-container-layout-3">
                      <img
                        className="u-expanded-width u-image u-image-3"
                        src="images/pexels-thisisengineering-3861969-1-e1602604445396.jpg"
                        data-image-width={739}
                        data-image-height={960}
                      />
                      <h4 className="u-text u-text-custom-color-1 u-text-default u-text-7">
                        {" "}
                        Development Unit
                      </h4>
                      <p className="u-text u-text-default u-text-8">
                        {" "}
                        We have experienced in the development of websites,
                        applications (IOS &amp; Android),&nbsp; software, ERP,
                        architectural designs, VR &amp; AR projects.
                      </p>
                      <a
                        className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-5"
                        href="https://nicepage.com"
                      >
                        {" "}
                        Read More about { ( window.screen.availWidth<860 )?  <br />:"" }  Brand Identity&nbsp;»
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
              <div className="u-layout">
                <div className="u-layout-row">

                  <div    data-aos="fade-right"  className="u-container-style u-layout-cell u-size-20 u-layout-cell-4">
                    <div className="u-container-layout u-container-layout-4">
                      <img
                        className="u-expanded-width u-image u-image-4"
                        src="images/pexels-tracy-le-blanc-607812-2-e1602604742604.jpg"
                        data-image-width={739}
                        data-image-height={960}
                      />
                      <h4 className="u-text u-text-custom-color-1 u-text-default u-text-9">
                        {" "}
                        Social &amp; Digital Media
                      </h4>
                      <p className="u-text u-text-default u-text-10">
                        {" "}
                        We can contribute to your business for social &amp;
                        digital media planning, marketing, and management. We
                        also offer SEO &amp; influenced marketing services.
                      </p>
                      <a
                        className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-6"
                        href="https://nicepage.com"
                      >
                        {" "}
                        Read More about { ( window.screen.availWidth<860 )?  <br />:"" }  Brand Identity&nbsp;»
                      </a>
                    </div>
                  </div>
                  <div     data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-5">
                    <div className="u-container-layout u-container-layout-5">
                      <img
                        className="u-expanded-width u-image u-image-5"
                        src="images/pexels-maxime-francis-2246476-e1602604928665.jpg"
                        data-image-width={739}
                        data-image-height={960}
                      />
                      <h4 className="u-text u-text-custom-color-1 u-text-default u-text-11">
                        {" "}
                        Offshore Remote Manpower
                      </h4>
                      <p className="u-text u-text-default u-text-12">
                        {" "}
                        No more worries about hiring talent, We offer offshore
                        designers and developers to the companies all over the
                        world on a project or contract basis. Write to us
                      </p>
                      <a
                        className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-7"
                        href="https://nicepage.com"
                      >
                        {" "}
                        Read More about { ( window.screen.availWidth<860 )?  <br />:"" }  Brand Identity&nbsp;»
                      </a>
                    </div>
                  </div>
                  <div     data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-6">
                    <div className="u-container-layout u-container-layout-6">
                      <img
                        className="u-expanded-width u-image u-image-6"
                        src="images/pexels-junjie-xu-3028500-e1602605144958.jpg"
                        data-image-width={739}
                        data-image-height={960}
                      />
                      <h4 className="u-text u-text-custom-color-1 u-text-default u-text-13">
                        {" "}
                        Printing &amp; Packaging
                      </h4>
                      <p className="u-text u-text-default u-text-14">
                        {" "}
                        If you have a design and would like to get a packaging
                        solution of international standards, we have local
                        partner firms that are affordable and experienced.
                      </p>
                      <a
                        className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-8"
                        href="https://nicepage.com"
                      >
                        {" "}
                        Read More about { ( window.screen.availWidth<860 )?  <br />:"" }  Brand Identity&nbsp;»
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <h3     data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-15">
              {" "}
              Pioneer in Cloud Technology
            </h3>
            <p    data-aos="fade-up"  className="u-text u-text-custom-color-1 u-text-16">
              {" "}
              transforming imagination into the experience
            </p>
            <p    data-aos="fade-up"  className="u-text u-text-17">
              {" "}
              So you’re ready to move your business to the cloud. Cloud adoption
              isn’t just about the migration. From&nbsp;
              <a
                href="https://bgdint.com/digital-branding-strategy/"
                className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-9"
              >
                business strategy
              </a>
              &nbsp;to process design, from infrastructure management to
              training and support for the people; Business GO Digital has all
              it takes to help you make your move to Adobe Experience Cloud and
              Amazon Web Services.BGD International is the only firm that offers
              its complete range of services in Central Asia with Pakistan
              headquartered, the Middle East, Europe, the UK, Australia, Canada,
              and the United States.
            </p>
            <a    data-aos="fade-up" 
              href="https://nicepage.com/wysiwyg-html-editor"
              className="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-10"
            >
              learn More
            </a>
          </div>
        </section>
      </div>

      {/*  */}

      {/*  */}

      <div   data-aos="zoom-in"  className="videosection">
        <a   href="" className="videoclickicon">
          {" "}
          <img data-aos="fade-up" style={{ height: "70px" }} src={iconb} alt="" />
        </a>
      </div>

      {/*  */}

      {/* Contact */}

      <div className="contact">
        <div   className="contactupper">
          <h4 data-aos="fade-up" >
            {" "}
            <b> GET IN TOUCH </b>{" "}
          </h4>

          <p data-aos="fade-up" >
            The world has changed a lot, and competition is intense. You are
            doing business in a global market. Identity and transformation are
            much more important than ever. We have various services offering to
            bring all related services on a single platform where efforts will
            be integrated, departments will be coordinating, and a final product
            will be attracting the customers
          </p>
          <br />
          <p data-aos="fade-up" >
            Feel free to write to us or give us a call for an online meeting to
            discuss your business needs and potential share in the global and
            local markets.
          </p>
        </div>

        <div data-aos="fade-up"  className="lowercontact mt-5 pt-4">
          <div className="row">
            <div data-aos="fade-right" className="col-md-4 ">
              <h5>Phone</h5>
              <p>+92 423 518 4499</p>

              <h5 className="mt-5">Mobile</h5>
              <p>+1 609 385 1212</p>

              <h5 className="mt-5">Address</h5>
              <p className="m-0 p-0">
                {" "}
                <b>
                  Corporate Headquarters <br />
                  BGD International (Pvt) Limited{" "}
                </b>{" "}
              </p>

              <p className="mt-2">
                112-D2 Wapda Town
                <br /> Lahore 54770, Pakistan
              </p>
            </div>

            <div data-aos="fade-left"  className="col-md-6 contactdiv_services ">
              <div className="row">
                <div className="col-md-6">
                  <label for="" class="form-label">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    class="forminputs form-control mt-2 "
                    name=""
                    id="name"
                    aria-describedby="helpId"
                    placeholder=""
                  />
                </div>
                <div className="col-md-6">
                  <label for="" class="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    class="forminputs form-control mt-2 "
                    name=""
                    id="email"
                    aria-describedby="helpId"
                    placeholder=""
                  />
                </div>
              </div>

              <label for="" class="form-label mt-4 ">
                Your Message
              </label>
              <textarea
                type="text"
                class="forminputs form-control mt-2 "
                style={{ height: "27%" }}
                name=""
                id="message"
                aria-describedby="helpId"
                placeholder=""
              />
              <div className="captcha mt-4">
                <ReCAPTCHA sitekey="Your client site key" />
              </div>
              <div className="sendmessage mt-4">
                <Redbutton clickaction={submitf_form} buttontext="Send Message" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default Services;
