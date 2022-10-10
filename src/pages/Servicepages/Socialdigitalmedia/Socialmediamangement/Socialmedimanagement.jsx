import React, {useEffect} from "react";
import "./nicepage.scoped.css"
import "./Socialmediamanagement.scoped.css"
import { Link } from 'react-router-dom'

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Socialmedimanagement() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>

        <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > SOCIAL MEDIA MANAGEMENT </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} SOCIAL MEDIA MANAGEMENT </span>
        </div>  

        <div className="socialmediamanagementlower u-body u-xl-mode">

       <section className="u-clearfix u-section-1" id="sec-d07a">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-valign-top u-container-layout-1">
        <h4 data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-1"> Social Media Management</h4>
        <p data-aos="fade-up" className="u-text u-text-default u-text-2"> Business GO Digital social media management services are adequate to achieve your marketing objectives successfully. The ultimate aim of a business is increasing the traffic to its website, building a reasonable conversion rate, raising brand awareness, and creating a brand identity and brand association. What we do includes: develop a customized social media management program for your company, formulate an effective content strategy, define a brand image, promote it through social media channels to increase awareness, analyze the data by having the latest tools, manage the consistency of your brand personality, and make integrated marketing communication plan for future execution. If you are looking for an agency specialized in social media planning, marketing, and management in Pakistan, we are the best choice for your brand. We have various packages for your company based on your needs. Our SMM experts manage Facebook, Instagram, Twitter, Pinterest, Snapchat, YouTube, and Google+ management to share your brand story with your customers through our excellent content to stage your business and make them more engaging towards your website and application.<br />
          <br />We have implemented the Smart Insight Digital Benchmarketing model and offer our customers consultancy, implementation, and support.
        </p>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-15 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-2">
              <img className="u-image u-image-default u-preserve-proportions u-image-1" src="images/management.png" alt data-image-width={128} data-image-height={128} />
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-3"> Managed</h6>
              <p className="u-text u-text-default u-text-4"> start using social media</p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-15 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-3">
              <img className="u-image u-image-default u-preserve-proportions u-image-2" src="images/defining.png" alt data-image-width={128} data-image-height={128} />
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-5"> Defined</h6>
              <p className="u-text u-text-default u-text-6"> start to plan media</p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-15 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-4">
              <img className="u-image u-image-default u-preserve-proportions u-image-3" src="images/intersect.png" alt data-image-width={128} data-image-height={128} />
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-7"> Quantified</h6>
              <p className="u-text u-text-default u-text-8"> start to integrate</p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-15 u-layout-cell-4">
            <div className="u-container-layout u-container-layout-5">
              <img className="u-image u-image-default u-preserve-proportions u-image-4" src="images/device.png" alt data-image-width={128} data-image-height={128} />
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-9"> Optimized</h6>
              <p className="u-text u-text-default u-text-10"> integrate media strategy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-6">
              <img className="u-expanded-width u-image u-image-default u-image-5" src="images/pexels-startup-stock-photos-7092.jpg" alt data-image-width={960} data-image-height={960} />
              <div className="u-container-style u-expanded-width u-group u-palette-1-base u-group-2">
                <div className="u-container-layout u-valign-middle u-container-layout-7">
                  <p className="u-text u-text-default u-text-11"> Social Media Planning, Promised</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-6">
            <div className="u-container-layout u-container-layout-8">
              <img className="u-expanded-width u-image u-image-default u-image-6" src="images/neonbrand-5afenxnLDjs-unsplash-e16036276737191.jpg" alt data-image-width={961} data-image-height={960} />
              <div className="u-container-style u-expanded-width u-group u-palette-1-base u-group-3">
                <div className="u-container-layout u-valign-middle u-container-layout-9">
                  <p className="u-text u-text-default u-text-12"> Building Brand Images on Social Media</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-container-style u-expanded-width u-group u-group-4">
      <div data-aos="fade-right" className="u-container-layout u-valign-top u-container-layout-10">
        <h5 className="u-text u-text-custom-color-1 u-text-default u-text-13"> Why to choose BGD International for Social Medial Management &amp; Marketing? </h5>
        <p className="u-text u-text-default u-text-14"> See the eight reasons why to choose us:<br />1. develop an effective plan to save a lot of money<br />2. have a team of analysts and strategist on board<br />3. approach is based on creativity and differentiation<br />4. have experience in different global markets<br />5. understands online customers engagement methods<br />6. have branding, marketing, and digital marketing experience<br />7. updates and follow latest trends<br />8. are organized, planned, and creative in thinking
        </p>
      </div>
    </div>
  </div>
</section>


        </div>



    </div>
  )
}
