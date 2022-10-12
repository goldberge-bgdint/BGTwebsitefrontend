import React, {useEffect} from "react";
import "./nicepage.scoped.css"
import "./packingdesign.scoped.css"
import "./Packingdesign.scoped.scss"
import {Link} from "react-router-dom"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Packingdesign() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>

        <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > PACKAGING DESIGN </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} Packaging Design </span>
        </div>

        <div className="packingowerbody u-body u-xl-mode">

        <section className="u-clearfix u-section-1" id="sec-772a">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-container-layout-1">
        <p data-aos="fade-up"  className="u-text u-text-1"> Identity is the visible elements of a brand but can be associated with Logo or Wordmark, key brand colors, typographic treatment, images and content, graphical elements, and visual identity on social media. A product could be tangible or intangible; our designers use strategy to create the visual elements of your brand that are always unique to your brand. It can influence the perception of the product by creating an appropriate, consistent look and feel.</p>
        <p data-aos="fade-up" className="u-text u-text-3"> A start-up business or growing entity should use and update an existing brand identity, occasionally. It is worth investing in. You may create brand value by creating a great identity for your brand. Our method is quite logical: we do analyze the products, competitors and the market, set the objectives, formulate the strategies, identify the customers, and determine the brand personality. It is the strategic planning process, and every element needs to contribute to the overall business goals. That is the promise we make.</p>
      </div>
    </div>
    <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right"  className="u-container-style u-layout-cell u-size-15 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-2">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-1" src="images/product-design.png" alt data-image-width={128} data-image-height={128} />
              <p className="u-text u-text-custom-color-1 u-text-default u-text-4"> Product Design</p>
            </div>
          </div>
          <div  data-aos="fade-up" className="u-container-style u-layout-cell u-size-15 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-3">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2" src="images/packaging.png" alt data-image-width={128} data-image-height={128} />
              <p className="u-text u-text-custom-color-1 u-text-default u-text-5"> Packaging Design</p>
            </div>
          </div>
          <div data-aos="fade-up"  className="u-align-center u-container-style u-layout-cell u-size-15 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-4">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-3" src="images/design.png" alt data-image-width={128} data-image-height={128} />
              <p className="u-text u-text-custom-color-1 u-text-6"> Research &amp; Analysis</p>
            </div>
          </div>
          <div  data-aos="fade-left" className="u-container-style u-layout-cell u-size-15 u-layout-cell-4">
            <div className="u-container-layout u-container-layout-5">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-4" src="images/consultation.png" alt data-image-width={128} data-image-height={128} />
              <p className="u-text u-text-custom-color-1 u-text-default u-text-7"> Consultation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">

          <div data-aos="fade-right"  className="u-container-style u-layout-cell u-size-30 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-6">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-8"> Package Identity is Important</h6>
              <img className="u-image u-image-default u-preserve-proportions u-image-5" src="images/pexels-polina-tankilevitch-3735648.jpg" alt data-image-width={960} data-image-height={960} />
              <div className="u-container-style u-group u-palette-1-base u-group-2">
                <div className="u-container-layout u-container-layout-7">
                  <p className="u-text u-text-default u-text-9"> Image or Identity?</p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-6">
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-8"> Package Identity is Important</h6>
              <img className="u-image u-image-default u-preserve-proportions u-image-5" src="images/supermarket-4052658_1920-e1603472901520.jpg" alt data-image-width={960} data-image-height={960} />
              <div className="u-container-style u-group u-palette-1-base u-group-2">
                <div className="u-container-layout u-container-layout-7">
                  <p className="u-text u-text-default u-text-9"> A Silent Seller?</p>
                </div>
              </div>
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

export default Packingdesign