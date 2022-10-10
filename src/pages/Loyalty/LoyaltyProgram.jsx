import React, {useEffect} from "react";
import "./Loyalty.scoped.css"
import "./nicepage.scoped.css"
import "./LoyaltyProgram.scss"
import abvideo from "../../images/BusinessGO.mp4"
import ReCAPTCHA from "react-google-recaptcha";
import Redbutton from '../../components/button/redbutton/redbutton';
import {Link} from "react-router-dom"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function LoyaltyProgram() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);


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

  return (
    <div>

    <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > LOYALTY PROGRAM </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} Loyalty Program </span>
    </div> 



 <div classname="u-body u-xl-mode" id='loyatyprogramowerbody' >
  <section className="u-clearfix u-section-1" id="sec-d331">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div data-aos="fade-right" className="u-container-style u-expanded-width u-group u-shape-rectangle u-group-1">
        <div className="u-container-layout u-valign-top u-container-layout-1">
          <h3 className="u-text u-text-custom-color-1 u-text-default u-text-1"> The Loyalty Program</h3>
          <p className="u-text u-text-default u-text-2"> Adobe Experience Cloud is a collection of applications and&nbsp;<a href="https://bgdint.com/services/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1">services</a>&nbsp;built on the first platform designed explicitly for unmatched customer experiences, giving you the most comprehensive tools for insights, content, engagement, and more. We offer Consulting &amp; Learning Services in Pakistan, Central Asia, and the Middle East.<br />
            <br />At `<a href="https://bgdint.com/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-2">Business GO Digital</a>` we are experts in understanding your business needs. We specialize in helping organizations using Adobe Experience Cloud compete in their markets by delivering an excellent customer experience that drives improved marketing results and shareholder value.<br />
            <br />The only regional company in the market that has a team of adobe certified consultants, adobe certified global trainer, and regional offices to offer support services locally. Our corporate pre-sales managers are just a click away.
          </p>
        </div>
      </div>
      <div data-aos="fade-up" className="u-container-style u-expanded-width u-group u-shape-rectangle u-group-2">
        <div className="u-container-layout u-container-layout-2">
          <h3 className="u-text u-text-custom-color-1 u-text-default u-text-3"> How Does It Work</h3>
        </div>
      </div>
      <div data-aos="fade-left" className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
        <div className="u-layout" style={{}}>
          <div className="u-layout-row" style={{}}>
            <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
              <div className="u-container-layout u-container-layout-4">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-6"> SHOP</p>
                <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-2" src="images/pexels-khwanchai-phanthong-4175026.jpg" alt data-image-width={960} data-image-height={960} />
                <p className="u-text u-text-default u-text-7"> We help both public and private organizations to deliver exceptional customer experience using Adobe Experience Cloud that differentiates their brand and provides the right results. We offer Adobe Experience Cloud’s end to end consultancy from deployment to activation to ensure a single customer view across all assets, technologies, and platforms. We create innovative experiences that exceed customer expectations and drive increased marketing ROI. Our Adobe certified Consultants and Consulting Managers are inboard either on a contractual or project basis to deliver turnkey solutions: implementation and training services. Contact us directly, and we are happy to provide more information for a customized Adobe Experience Cloud consulting services quote that suits your specific business needs.</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-2 mt-lg-0 mt-4 ">
              <div className="u-container-layout u-container-layout-4">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-6"> DASHBOARD</p>
                <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-2" src="images/pexels-andrea-piacquadio-37794361.jpg" alt data-image-width={960} data-image-height={960} />
                <p className="u-text u-text-default u-text-7"> We are pioneer industry specialists in Pakistan, Central Asia, and the middle east. We provide a comprehensive suite of learning services, helping individuals and organizations get trained across all Adobe solutions to give them the right knowledge and skills the market needs. We offer flexible training programs, skills assessments, customized training, and learning paths to transform from a conventional organization to a technology-driven enterprise. Our learning architects, with extensive professional experience, are serving organizations to understand their training needs and create custom digital learning solutions. Our Entablement professionals have been developing inspiring learning programs for over ten years. The content solutions include anything from short and Microlearning content to ramified and scenario-based learning. Contact us directly, and we are happy to provide more information.</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-3 mt-lg-0 mt-4 ">
              <div className="u-container-layout u-container-layout-5">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-8"> REDEEM</p>
                <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-3" src="images/pexels-andrea-piacquadio-3779436.jpg" alt data-image-width={960} data-image-height={960} />
                <p className="u-text u-text-default u-text-9"> We are pioneer industry specialists in Pakistan, Central Asia, and the middle east. We provide a comprehensive suite of learning services, helping individuals and organizations get trained across all Adobe solutions to give them the right knowledge and skills the market needs. We offer flexible training programs, skills assessments, customized training, and learning paths to transform from a conventional organization to a technology-driven enterprise. Our learning architects, with extensive professional experience, are serving organizations to understand their training needs and create custom digital learning solutions. Our Entablement professionals have been developing inspiring learning programs for over ten years. The content solutions include anything from short and Microlearning content to ramified and scenario-based learning. Contact us directly, and we are happy to provide more information.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-container-style u-custom-color-2 u-expanded-width u-group u-group-3">
        <div className="u-container-layout u-valign-middle u-container-layout-6">
          <p data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-10"> Loyalty Program Features</p>
        </div>
      </div>
      <div data-aos="fade-up" className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-layout-cell u-size-12 u-layout-cell-4">
              <div className="u-container-layout u-container-layout-7">
                <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-4" src="images/Analytics-1-e1602427225981.png" alt data-image-width={150} data-image-height={150} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-11"> Brand&nbsp;Loyalty</p>
              </div>
            </div>
            <div className="u-align-center u-container-style u-layout-cell u-size-12 u-layout-cell-5">
              <div className="u-container-layout u-container-layout-8">
                <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5" src="images/Target-1-e1602427319198.png" alt data-image-width={150} data-image-height={150} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-12"> Realtime<br />Connectivity
                </p>
              </div>
            </div>
            <div className="u-align-center u-container-style u-layout-cell u-size-12 u-layout-cell-6">
              <div className="u-container-layout u-container-layout-9">
                <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-6" src="images/audience-1-e1602427425266.png" alt data-image-width={150} data-image-height={150} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-13"> Customer<br />Experience
                </p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-12 u-layout-cell-7">
              <div className="u-container-layout u-container-layout-10">
                <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-7" src="images/Campaign-1-e1602427524953.png" alt data-image-width={150} data-image-height={150} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-14"> Cost&nbsp;Control</p>
              </div>
            </div>
            <div className="cell-temp-clone u-container-style u-layout-cell u-size-12 u-layout-cell-8">
              <div className="u-container-layout u-container-layout-11">
                <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-8" src="images/Experience-Manager-1-e1602427569166.png" alt data-image-width={150} data-image-height={150} />
                <p className="u-text u-text-custom-color-1 u-text-15"> Boost Sales&nbsp;3X</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-3">
        <div className="u-layout">
          <div className="u-layout-row">
            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-9">
              <div className="u-container-layout u-valign-top u-container-layout-12">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-16"> Adobe Analytics</p>
                <p className="u-text u-text-default u-text-17"> Adobe Analytics Adobe Analytics is the industry-leading solution for applying real-time analytics and detailed segmentation across your marketing channels.<br />
                  <br />
                  <span style={{fontSize: '1.125rem'}}>COURSES LIST</span>
                  <br />1. Introduction to Adobe Analytics<br />2. Introduction to Data Analysis with Analysis Workspace<br />3. Essentials of configuration with Adobe Analytics<br />4. Adobe Analytics Implementation<br />5. Introduction to Adobe Launch
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-10">
              <div className="u-container-layout u-valign-top u-container-layout-13">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-18"> Adobe Target</p>
                <p className="u-text u-text-default u-text-19"> Adobe Target Find the individual in the haystack and then delight them. A/B and multivariate testing. Personalization. AI-powered automation at scale. Get the whole optimization engine with Adobe Target. It provides everything your business needs to personalize your customers’ experience to maximize revenue on your web and mobile sites, applications, social media, and other digital channels.<br />
                  <br />
                  <span style={{fontSize: '1.125rem'}}>COURSES LIST</span>
                  <br />1. Introduction to Adobe Target<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-4">
        <div className="u-layout">
          <div className="u-layout-row">
            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-11">
              <div className="u-container-layout u-container-layout-14">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-20"> Adobe Audience Manager</p>
                <p className="u-text u-text-default u-text-21"> Adobe Audience Manager Create and activate the best audiences on any channel or device with Adobe Audience Manager, Adobe’s best-in-class data management platform.<br />
                  <br />
                  <span style={{fontSize: '1.125rem'}}>COURSES LIST</span>
                  <br />1. Introduction to Adobe Audience Manager<br />2. Adobe Audience Manager Implementation<br />
                  <br />This platform helps you design unique audience profiles so you know who your segments are and you can identify them. It also gives you complete knowledge of your audience by combining all of your data sources in one place<br />
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-12">
              <div className="u-container-layout u-valign-top u-container-layout-15">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-22"> Adobe Experience Manager</p>
                <p className="u-text u-text-default u-text-23"> Get personalized, content-led experiences into the market faster with Adobe Experience Manager, which combines digital asset management with the power of a content management system..<br />
                  <br />
                  <span style={{fontSize: '1.125rem'}}>COURSES LIST</span>
                  <br />1. Build web experience using Adobe Experience Manager<br />2. Essentials of building Websites and Components<br />3. Essentials of securely maintaining Adobe Experience Manager<br />4. Essentials of securely administering Adobe Experience Manager<br />5. Essentials of customizing Adobe Experience Manager<br />6. Essentials of designing Forms using Adobe Experience Manager<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="u-container-style u-expanded-width u-group u-shape-rectangle u-group-4">
        <div className="u-container-layout u-valign-top u-container-layout-16">
          <p className="u-text u-text-custom-color-1 u-text-default u-text-24"> Adobe Campaign</p>
          <p className="u-text u-text-default u-text-25"> Adobe Campaign facilitates cross-channel marketing communications and automation. This course will teach and familiarize you with the platform, user-interface, and program architecture so you can manage users.</p>
          <div className="u-clearfix u-custom-html u-expanded-width u-custom-html-1">
            <style dangerouslySetInnerHTML={{__html: "" }} />
            <p>Sample HTML. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
          </div>
        </div>
      </div>
      <div className="u-clearfix u-layout-wrap u-layout-wrap-5">
        <div className="u-layout">
          <div className="u-layout-row">
            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-13">
              <div className="u-container-layout u-container-layout-17">
                <p className="u-text u-text-default u-text-26"> Adobe Campaign Standard</p>
                <p className="u-text u-text-27">
                  <span style={{fontSize: '1.125rem'}}>COURSES LIST</span>
                  <br />1. Introduction to Adobe Campaign Standard<br />2. Essentials of developing marketing campaigns d<br />3. Essentials of Developing Workflows using Adobe Campaign Standard<br />4. Essentials of customizing Adobe Campaign Standard
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-14">
              <div className="u-container-layout u-container-layout-18">
                <p className="u-text u-text-default u-text-28"> Adobe Campaign Classic</p>
                <p className="u-text u-text-29">
                  <span style={{fontSize: '1.125rem'}}>COURSES LIST</span>
                  <br />1. Introduction to Adobe Campaign Classic<br />2. Essentials of developing marketing campaigns<br />3. Essentials of Developing Workflows and managing data<br />4. Essentials of developing Web Applications and Surveys<br />5. Essentials of customizing Adobe Campaign Classic<br />6. Introduction to Adobe Campaign Interaction and managing Offers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-6">
        <div className="u-layout">
          <div className="u-layout-row">
            <div  data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-15">
              <div className="u-border-1 u-border-grey-25 u-border-no-bottom u-border-no-left u-border-no-right u-container-layout u-valign-top u-container-layout-19">
                <p className="u-text u-text-default u-text-30">
                  <span style={{fontSize: '1.125rem'}} className="u-text-custom-color-1"> Technical Overview</span>
                  <br />Our training courses are a fully hands-on learning experience with Adobe certified specialists to guide you through each exercise and answer all your questions.
                </p>
                <p className="u-text u-text-31">
                  <span style={{fontSize: '1.125rem'}} className="u-text-custom-color-1" />
                  <span style={{fontSize: '1.125rem'}}>
                    <span style={{fontWeight: 700}}>Program Modules</span>
                    <br />
                  </span>
                  <br />Our easy to use virtual classroom platform allows you to attend the course from home with a live Instructor, saving time and money on travel.<br />
                  <br />
                  <span style={{fontWeight: 700, fontSize: '1.125rem'}}>Frontend Technologies</span>
                  <br />
                  <br />We deliver onsite training at your business premises. It can be the same excellent training as our classroom learning or customized according to specific business needs. Such training can be the best when you have larger-scale bespoke training requirements and less time away from the office.<br />
                  <br />
                  <span style={{fontWeight: 700, fontSize: '1.125rem'}}>Backend Technologies</span>
                  <br />
                  <br />We deliver regular public courses over the internet to our customers.<br />
                  <span style={{fontSize: '1.125rem'}}>
                    <br />
                    <span style={{fontWeight: 700}}>Third-Party&nbsp;</span>
                  </span>
                  <span style={{fontWeight: 700, fontSize: '1.125rem'}}>Integrations</span>
                  <br />
                  <br />With classroom training, you receive in-person instruction from our experts in one of our state-of-the-art training facilities. You can have a look at the upcoming courses and can contact us for registration.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-16">
              <div className="u-border-1 u-border-grey-15 u-border-no-bottom u-border-no-left u-border-no-right u-container-layout u-valign-top u-container-layout-20">
                <h3 className="u-align-center u-text u-text-custom-color-1 u-text-32"> Global Trainer &amp; Consultant<br />Adobe Experience Cloud Certified
                </h3>
                <div className="u-container-style u-group u-group-5">
             
                <video controls autoplay loop style={{ height: "288px"}} id="loyaltyprogramvideo" src={abvideo}></video>

                </div>
                <p className="u-align-left u-text u-text-33">
                  <span style={{fontWeight: 700}}> Global Training &amp; Entablement Manager:</span>&nbsp;IFS,&nbsp;&nbsp;LocationLondon, United Kingdom<br />
                  <span style={{fontWeight: 700}}>Technical Training Consultant (Adobe Experience Cloud):</span>&nbsp;Adobe,&nbsp;LocationLondon, United Kingdom<br />
                  <span style={{fontWeight: 700}}>Training Manager:</span>&nbsp;Vultures,&nbsp;LocationLondon, United Kingdom<br />Manager of Product Training and <span style={{fontWeight: 700}}>Certification:</span>&nbsp;Netbiscuits,&nbsp;LocationLondon, United Kingdom<br />
                  <span style={{fontWeight: 700}}>Technical Trainer:</span>&nbsp;Thunderhead.com,&nbsp;LocationLondon, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-container-style u-group u-shape-rectangle u-group-6">
        <div className="u-container-layout u-valign-top u-container-layout-22">
          <p data-aos="fade-up" className="u-text u-text-default u-text-34"> For pricing and information, contact us</p>

          <div className="row mt-4">

<div data-aos="fade-right" className="col-md-6">
   
      <label for="" class="form-label">Your Name*</label>
      <input type="text"
        class="forminputs form-control mt-2 " name="" id="name" aria-describedby="helpId" placeholder=""/>
   
   
</div>
<div data-aos="fade-left" className="col-md-6">
         <label for="" class="form-label">Your Email</label>
        <input type="email"
        class="forminputs form-control mt-2 " name="" id="email" aria-describedby="helpId" placeholder=""/>

</div>

</div>

<div data-aos="fade-up" className="">
<label for="" class="form-label mt-4 ">Your Message</label>
<textarea type="text"
    class="forminputs form-control mt-2" style={{height: "27%"}}  name="" id="message" aria-describedby="helpId" placeholder=""/>
<div className="captcha mt-4">
<ReCAPTCHA
 sitekey="Your client site key"
/>
</div>
<div className="sendmessage W-100 mt-4">
<Redbutton clickaction = { submit_form } buttontext="Send Message" />
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

export default LoyaltyProgram