import React, {useEffect} from "react";
import {Link} from "react-router-dom"
import "./tvadsdocumentary.scoped.css"
import "./nicepage.scoped.css"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Tvadsdocumentary() {

  
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);


  return (
    <div>

        <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > Gallery </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} Gallery </span>
        </div>   

        <div className="tvadslower u-body u-xl-mode">

<section className="u-clearfix u-section-1" id="sec-d3e7">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-valign-top u-container-layout-1">
        <h4 data-aos="fade-up"  className="u-text u-text-custom-color-1 u-text-default u-text-1"> TV Commercials &amp; Documentary Production</h4>
        <p data-aos="fade-up"  className="u-text u-text-default u-text-2"> Digital Pakistan Vision’ with an aim of enhancing connectivity, improving digital infrastructure, increasing investment in digital skills, promoting innovation, and tech. entrepreneurship. Business GO Digital has established the infrastructure and managed digital and human resources to offer market digital, social, and mass media commercial production services. A few second commercial can work wonders for your brand with an aim to stick in the minds of consumers. We have an in-house production facility and also work with globally associated agencies to develop engaging commercials that will deliver awareness, create interest in your brand, boost a desire to have the product, and drive sales.<br />
          <br />We also produce documentaries for business, an amazing way to share your brand story with the audience and the community. A corporate video can benefit a company in a number of different ways including exploring corporate culture to create brand awareness and new customers.
        </p>
      </div>
    </div>
    <img data-aos="fade-up"  className="u-image u-image-default u-image-1" src="images/pexels-roman-koval-3177600.jpg" alt data-image-width={1920} data-image-height={1280} />
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-2">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-3"> Budgeting Advertisement ROI</h6>
              <img className="u-expanded-width u-image u-image-default u-image-2" src="images/pexels-josh-sorenson-1714208.jpg" alt data-image-width={1920} data-image-height={1000} />
              <p className="u-align-center u-text u-text-4"> Advertisements bring immediate call-to-action. It drives consumers to purchase and brings revenue. When you have an annual advertisement budget, we can assist you to plan campaigns, which will result in a positive return on every penny spent. Whether accounted for through bottom-line results or a measurable increase in brand value. We follow the AIDA model during the campaign design and set objectives. We develop an Integrated Marketing Communication (IMC) to achieve the targets. At the end of the year, we conduct a communication audit and match the spending with an increase in sales volume. This kind of effort finally results in ROI of advertising budget.</p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
            <div className="u-container-layout u-valign-top u-container-layout-3">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-5"> Make an Influence and Make it Fast</h6>
              <img className="u-expanded-width u-image u-image-default u-image-3" src="images/end-of-admoria-2156752_1920-e1603532187679.jpg" alt data-image-width={1920} data-image-height={998} />
              <p className="u-align-center u-text u-text-6"> We have the experts to advise you about which media is the most suitable one, where your target customers live, their ages, their preferences, and which device they are using. It’s our job to reach them and influence their opinion on brand awareness and sales purposes. Social media marketers are focused on building communities &amp; sharing content, bloggers and content marketers optimize their efforts for organic search and are focused on metrics. Digital advertising can help you improve your organic marketing. It happens by displaying content to individuals, understanding of audiences, by leveraging the targeting and analytics of the ads platforms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-4">
              <img className="u-image u-image-default u-image-4" src="images/pexels-jose-francisco-fernandez-saura-802024-1.jpg" alt data-image-width={640} data-image-height={425} />
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-7"> TV Advertisement</h6>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-4">
            <div className="u-container-layout u-valign-top u-container-layout-5">
              <img className="u-image u-image-default u-image-5" src="images/pexels-cottonbro-5077067.jpg" alt data-image-width={640} data-image-height={426} />
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-8"> Digital Media Advertising</h6>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-5">
            <div className="u-container-layout u-valign-top u-container-layout-6">
              <img className="u-image u-image-default u-image-6" src="images/pexels-negative-space-34092.jpg" alt data-image-width={640} data-image-height={426} />
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-9"> Corporate Documentary</h6>
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

export default Tvadsdocumentary