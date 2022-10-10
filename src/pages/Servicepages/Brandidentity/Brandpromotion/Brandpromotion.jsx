import React, {useEffect} from "react";
import "./brandpromotion.scoped.css"
import "./nicepage.scoped.css"
import "./Brandpromption.scss"
import {Link} from "react-router-dom"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Brandpromotion() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>
        
        <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > Brand Identity </h5>
                <div className="blendedsliderdivider"></div>
                <span  data-aos="fade-up" className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} Brand Identity </span>
        </div>   
        
        <div className="brnadpromotionlowerbody u-body u-xl-mode">
 

        <section className="u-clearfix u-section-1" id="sec-db6d">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div  data-aos="fade-right" className="u-container-style u-layout-cell u-size-42 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-1">
              <h3 className="u-text u-text-default u-text-1"> Promoting Product or Brand?</h3>
              <p className="u-text u-text-2"> A strategy is an essential element in the branding process. It provides the foundations to the practitioners and company management to be on a consistent course of action. The perception of a brand is important to analyze in an initial phase; then research findings will guide us to finalize the brand identity and personality. Communication is important as the purpose of brand awareness to the targeted audience effectively.<br />Marketing is about identifying the needs of customers and branding will satisfy them with trust in the brand attributes. The image and identity of a brand will be as clear as crystal in the minds of customers. The knowledge of the product and its benefits must be visible by utilizing Integrated Marketing Communication. Building recognition, competitiveness, and loyalty will help to build your credibility. If you’re credible, you’ll get the sale.
              </p>
            </div>
          </div>
          <div data-aos="fade-left"  className="u-container-style u-layout-cell u-size-18 u-layout-cell-2">
            <div className="u-container-layout u-valign-top u-container-layout-2">
              <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-1" src="images/pexels-ariel-paredes-2532680-e1603128140840.jpg" alt data-image-width={960} data-image-height={960} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div  data-aos="fade-right" className="u-container-style u-layout-cell u-size-23 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-3">
              <h4 className="u-text u-text-default u-text-3"> Brand Promotion</h4>
              <p className="u-text u-text-4"> How do customers see your brand? It’s important to examine your branding tactics occasionally. It doesn’t matter how you perceive your company’s brand; what truly important is how your customers, target audience, think of your it. They are the ones who determine brand success or failure. It’s ultimately the marketplace that matters, not what you believe. We are living in the age of identity and branding. Understanding brand perception is key to success in the competitive marketplace. Your brand must connect with your audience to be long-lasting. This is what do we understand well and deliver accordingly.</p>
            </div>
          </div>
          <div data-aos="fade-up"  className="u-container-style u-layout-cell u-size-14 u-layout-cell-4">
            <div className="u-container-layout u-valign-middle u-container-layout-4">
              <img className="u-image u-image-default u-preserve-proportions u-image-2" src="images/pexels-negative-space-97075-150x150.jpg" alt data-image-width={150} data-image-height={150} />
              <img className="u-image u-image-default u-preserve-proportions u-image-3" src="images/pexels-cnma-345415-150x150.jpg" alt data-image-width={150} data-image-height={150} />
            </div>
          </div>
          <div  data-aos="fade-left" className="u-container-style u-layout-cell u-size-23 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-5">
              <h4 className="u-text u-text-default u-text-5"> How to attract customers?</h4>
              <p className="u-text u-text-6"> One of the best ways of attracting good customers is to encourage positive reviews. Encouraging positive reviews with testimonials help your brand become successful. If, however, you ever get a negative review, be sure to respond promptly and courteously, and correct the issue. Many prospective customers check out the reviews first before choosing the company. Likewise, the marketing &amp; social media planning process is crucial. A good plan is a base for the effective execution of a brand. Usually, social media managers ignore the planning process which may result in slow progress particularly if the competition is high.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-layout-wrap u-layout-wrap-3">
      <div className="u-layout">
        <div className="u-layout-row">
          <div className="u-container-style u-layout-cell u-size-39 u-layout-cell-6">
            <div className="u-container-layout u-valign-top u-container-layout-6">
              <img data-aos="fade-up" className="u-image u-image-default u-preserve-proportions u-image-4" src="images/princess-om-horse-2048x2048.jpg" alt data-image-width={1920} data-image-height={1920} />
            </div>
          </div>
          <div className="u-container-style u-layout-cell u-size-21 u-layout-cell-7">
            <div className="u-container-layout u-container-layout-7">
              <img data-aos="fade-up" className="u-image u-image-contain u-image-default u-image-5" src="images/PrincessZ-19.png" alt data-image-width={1357} data-image-height={1920} />
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

export default Brandpromotion