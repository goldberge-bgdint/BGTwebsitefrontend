import React, {useEffect} from "react";
import "./Spantanic.scss"
import "./css/style.css"
import iconb from "../../images/modern-play-button-1.png"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Spantanic() {

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

  return (
    <div>

        <div className="spantanicbanner">

         <h5>SPANTANIC</h5>  

        </div>

        <div className="spantacniclower">

        <p data-aos="fade-up" > <span className='bluelinktag' > Branding </span>  is a very fascinating word in businesses and everyone would love to have it. Large firms can afford the resources and can bring talent to the table to build a brand. The SMEs face the true challenge and particularly the start-ups. <br /> <br />

        Undoubtedly, branding is also costly. Instead of having no <a className='bluelinktaga' href=""> branding strategy </a> at all, you can learn the SPANTIK model, understand its seven steps, and can adapt it on your own with no cost at all. You might not be a full-time <a className='bluelinktaga' href="">brand manager</a> , but you can identify if there is something working happening to the brand. You can have a core idea of branding and can be conscious during formulating a strategy, choosing a media, allocating the budget, and training your staff. <br /> <br />

        The model is very simple to learn and practical to implement. It is also fully aligned with the <a className='bluelinktaga' href="">marketing planning</a>  process as well. Of course, it will be a great tool for marketers and brand managers at the same time to manage brand performance.</p>

       

        {/*  Time line  */}
        <div className="spantanictimeline">

        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2" id='timelinediv' >
            <ul class="timeline timeline-centered">
                <li class="timeline-item">
                    <div class="timeline-info">
                       
                    </div>
                    <div class="timeline-marker"></div>
                    <div data-aos="fade-right" class="timeline-content">
                        <h3 class="timeline-title">Strategic Planning</h3>
                        <p>

                       <b>Define Market</b>  – Conduct research, Competitors Analysis and Gap vs Offering <br />
                       <b>Define</b>   – objectives & formulate Strategy <br />
                       <b>Conduct</b>  – market segmentation – knowing your customers <br />
                       <b>Set</b>  –  KPIs & plan strategically    

                        </p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
        
                    </div>
                    <div class="timeline-marker"></div>
                    <div data-aos="fade-left" class="timeline-content">
                        <h3 class="timeline-title">Perception</h3>
                        <p>
                      <b>Image</b>  , Identity & Personality <br/>
                      <b>Image</b> : Positioning, Elements, Essence, Emotions <br/>
                      <b>Identity</b> : Design, Experience, Culture, Origin, Values <br/>
                      <b>Personality</b> : Who is your brand? Signature, TouchPoints, Voice <br/>
                        </p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                       
                    </div>
                    <div class="timeline-marker"></div>
                    <div data-aos="fade-right" class="timeline-content">
                        <h3 class="timeline-title">Awareness</h3>
                        <p>
                            
                     <b>Media & Communication</b>  <br />
                     <b>Message</b>    – Content, Langage, Tone, Graphics, Motion Graphics, Animation <br />
                     <b>Brand Story</b>  – Craft a narrative, personalize it<br />
                     <b>Media</b>   – IMC, Digital & Social Media, Budget<br />
                     <b>Define</b>  – Communication Model<br />
                     <b>Engage</b>   – the audience, interaction, and Traffic    <br /> 

                        </p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                      
                    </div>
                    <div class="timeline-marker"></div>
                    <div data-aos="fade-left" class="timeline-content">
                        <h3 class="timeline-title"> Network Engagement </h3>
                        <p>
                     <b>Stakeholders</b>    – Must  know your stakeholders & their preferences <br />
                     <b>People</b>   – Internal branding is a must. Speak the same language <br />
                     <b>Associate</b>    –  You must know all associated with the brand <br />
                     <b>Ambassadors</b>     – Choose brand ambassadors carefully <br />
                     <b>Customers</b>    – Engagement is very important with responses. <br />
                     <b>Society</b>    – Serve the society and make sure you care <br />
                     <b>Environment</b>    – Contribute to improving the environment <br />
                        </p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                     
                    </div>
                    <div class="timeline-marker"></div>
                    <div data-aos="fade-right" class="timeline-content">
                        <h3 class="timeline-title">Timetable</h3>
                        <p>
                      <b>Plan</b>   – in advance <br />
                      <b>Mark</b>     – activities on a calendar <br />
                      <b>Brand Management</b>   – Execution vs Monitoring, feedback is important <br />
                      <b>Synchronization</b>     – of department and activities <br />
                        </p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        
                    </div>
                    <div class="timeline-marker"></div>
                    <div data-aos="fade-left" class="timeline-content">
                        <h3 class="timeline-title">In Action</h3>
                        <p>
                        <b>Planning & Execution</b>  <br />
                        Bringing the brand to life <br />
                        Go-to-market strategy <br />
                        Brand Activation <br />
                        Brand launch planning <br />
                        Execution & measurement <br />
                        Blueprints are important to avoid delays and failures <br />
                        </p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                       
                    </div>
                    <div class="timeline-marker"></div>
                    <div data-aos="fade-right" class="timeline-content">
                        <h3 class="timeline-title">Khalas (Job Done)</h3>
                        <p>
                        <b> Never Say That </b> <br />
                        <b>Job is Never Done</b>  – branding is a continuous process <br />
                        <b>Audit</b> – Measurement of KPIs <br />
                        <b>Governance</b> – Who is who? Performance and Reporting <br />
                        <b>Research & Development</b> – based on feedback <br />
                        <b>RE</b> – re-search, re-define, re-plan <br />
                        </p>
                    </div>
                </li>
               
            </ul>
        </div>

        </div>

        </div>


        <div className="videosectionspantanic">
               <a data-aos="fade-up" href="" className='videoclickiconspantanic' > <img style={{height: "70px"}} src={iconb} alt="" /></a>
        </div>

    </div>
  )
}

export default Spantanic