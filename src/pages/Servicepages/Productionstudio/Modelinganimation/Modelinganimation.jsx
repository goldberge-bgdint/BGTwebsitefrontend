import React, {useEffect} from "react";
import "./Modelinganimation.scoped.css"
import "./nicepage.scoped.css"
import {Link} from "react-router-dom"
import "./Modelinganimation.scss"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Modelinganimation() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>

        <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > MODELING & ANIMATION </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} MODELING & ANIMATION </span>
        </div>  

        <div className="Modelinganimationlower u-body u-xl-mode">

      <section className="u-clearfix u-section-1" id="sec-6fe6">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-container-layout-1">
        <h4  data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-1"> 2D 3D Modeling &amp; Animation</h4>
        <p  data-aos="fade-up" className="u-text u-text-default u-text-2"> Business GO Digital proudly presents media contents integration with 2D/3D artworks in digital and social media marketing, advertising, and gaming. We have a team of creative artists with experience designing all kinds of models for toys, games, brands, products, interactive applications, and UI. We also create specialized 2D/3D characters and models from a sketch, image, or even from your ideas in your mind, but not limited to, advertising, architecture, education, science, enterprise, and manufacturing industries for public and private sectors. We utilize the latest software like Adobe Photoshop, Illustrator, 3D Max, Autodesk Maya 3D, Zbrush, and Mudbox to visualize any idea, form a concept, create game characters, environment objects, and UI elements for the production stage. Real-time rendering is used most prominently in gaming and interactive graphics (interactive walk-through of cities, simulators, virtual training). Animation outsourcing services could be required when you have lots of animation jobs to complete in limited time, or you don’t have an in-house facility, or when you are looking for a masterpiece. We offer multiple solutions, including virtual medical and engineering classroom, hospitality experience, virtual shopping, etc. We create fantastic animation and visual effects for a wide range of product categories and 3D walk-through.</p>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-gutter-34 u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right"  className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
            <div className="u-container-layout u-container-layout-2">
              <img className="u-expanded-width u-image u-image-default u-image-1" src="images/easter-eggs-4992605_640.jpg" alt data-image-width={640} data-image-height={427} />
              <div className="u-container-style u-expanded-width u-group u-palette-1-base u-group-2">
                <div className="u-container-layout u-valign-middle u-container-layout-3">
                  <p className="u-text u-text-default u-text-white u-text-3"> 2/3D Characters</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left"  className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
            <div className="u-container-layout u-valign-top u-container-layout-4">
              <img className="u-expanded-width u-image u-image-default u-image-2" src="images/republic-1713074_640.jpg" alt data-image-width={640} data-image-height={426} />
              <div className="u-container-style u-expanded-width u-group u-palette-1-base u-group-3">
                <div className="u-container-layout u-valign-middle u-container-layout-5">
                  <p className="u-text u-text-default u-text-white u-text-4"> 360 Walk-Through</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-gutter-34 u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-6">
              <img className="u-expanded-width u-image u-image-default u-image-3" src="images/monitor-2411565_1280-e1603525736548.jpg" alt data-image-width={640} data-image-height={427} />
              <div className="u-container-style u-expanded-width u-group u-palette-1-base u-group-4">
                <div className="u-container-layout u-valign-middle u-container-layout-7">
                  <p className="u-text u-text-default u-text-white u-text-5"> Animation</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-4">
            <div className="u-container-layout u-valign-top u-container-layout-8">
              <img className="u-expanded-width u-image u-image-default u-image-4" src="images/laptop-2411303_640.jpg" alt data-image-width={640} data-image-height={426} />
              <div className="u-container-style u-expanded-width u-group u-palette-1-base u-group-5">
                <div className="u-container-layout u-valign-middle u-container-layout-9">
                  <p className="u-text u-text-default u-text-white u-text-6"> Virtual Reality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-3">
      <div className="u-layout">
        <div className="u-layout-row" id='industrialanimationflexbox' >

          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-5">
            <div className="u-container-layout u-valign-top u-container-layout-10">
              <img className="u-image u-image-default u-preserve-proportions u-image-5" src="images/pexels-alex-chistol-3892401.jpg" alt data-image-width={960} data-image-height={960} />
            </div>
          </div>

          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-6">
            <div className="u-container-layout u-container-layout-11">
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-7"> Industrial Animation</h5>
              <p className="u-text u-text-default u-text-8"> We can deliver the following applications: Animation for medical applications Visualization with animated effects Character animation for toys and games 2D/3D CAD drawings 3D Interior Design Visualisation Concept Presentation 3D Product Design, Prototype &amp; Manufacturing 3D modeling services enhance the draft of the design and convert vague aspects of design into life, which can support the details of the design. Room Layouts &amp; Space Planning</p>
            </div>
          </div>

          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-7">
            <div className="u-container-layout u-valign-top u-container-layout-12">
              <img className="u-image u-image-default u-preserve-proportions u-image-6" src="images/pexels-thisisengineering-3912474.jpg" alt data-image-width={960} data-image-height={960} />
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-3">
      <div className="u-layout">
        <div className="u-layout-row" id='industrialanimationflexbox' >

          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-5">
            <div className="u-container-layout u-valign-top u-container-layout-10">
              <img className="u-image u-image-default u-preserve-proportions u-image-5" src="images/super-woman-1885016_1920-e1602861443126.jpg" alt data-image-width={960} data-image-height={960} />
            </div>
          </div>

          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-6">
            <div className="u-container-layout u-container-layout-11">
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-7">Transforming Ideas into Animation</h5>
              <p className="u-text u-text-default u-text-8">Are you looking for feature movies, advertisements, website/app animations, and video game animations? We offer you a team with a portfolio and experience in pre-production development, storyboards, Animatics, production-layout, background designs, compositing, editing & mixing. We have entirely different skill sets and artists for 2D & 3D animation. We also can deliver animated explainer videos, Infographics, white board animations, and comic book illustrations.</p>
            </div>
          </div>

          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-7">
            <div className="u-container-layout u-valign-top u-container-layout-12">
              <img className="u-image u-image-default u-preserve-proportions u-image-6" src="images/pexels-thisisengineering-3862372-1.jpg" alt data-image-width={960} data-image-height={960} />
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

export default Modelinganimation