import React, {useEffect} from "react";
import "./Strategy.scss"
import Websitesolidbutton from "../../components/button/solidbuttonwebsite/Websitesolidbutton.jsx"
import iconb from "../../images/modern-play-button-1.png"

import sp1 from "../../images/spic1.jpg"
import sp2 from "../../images/spic2.jpg"
import sp3 from "../../images/spic3.jpg"
import sp4 from "../../images/spic4.jpg"
import sp5 from "../../images/spic5.jpg"
import sp6 from "../../images/spic6.jpg"

import "./nicepage.scoped.css"
import "./Strategynew.scoped.css"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Strategy() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

    let strategycards=[
        {image:sp1,heading:"Place Branding ",message:"A place is re-born …. place branding is crucial to double up tourism…."},
        {image:sp2,heading:"Corporate Branding",message:"Product differentiation and Corporate Branding, Is it similar? …"},
        {image:sp3,heading:"Product Branding",message:"Branding is about telling a story, not a product. Being profitable is not…"},
        {image:sp4,heading:"Sports Branding",message:"Club Branding – makes it more attractive to talent and audience…"},
        {image:sp5,heading:"Digital Branding",message:"From digital marketing to Digital Branding … online business…"},
        {image:sp6,heading:"Personal Branding",message:"Be yourself – “Work until YOU no longer have to introduce yourself.” (Gabriel Macht)…"}
    ]

    return (
    <div className='strategybody' >

        {/* Slider */}

        <div className="slider">
            
        </div>

        {/*  */}


            <div className="u-body u-xl-mode">

            <section className="u-clearfix u-section-1" id="sec-2d44">
  <div className="u-clearfix u-sheet u-sheet-1">
    <h3 data-aos="fade-right" className="u-text u-text-custom-color-1 u-text-default u-text-1"> Digital Branding Strategy</h3>
    <p data-aos="fade-left" className="u-text u-text-default u-text-2"> International markets have been growing with great wonders to the entrepreneurs and it’s time to step outside the comfort zone and engage a&nbsp;<a href="https://bgdint.com/brand-identity/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1">branding</a>&nbsp;consultant with an understanding that there is much more to branding than advertising to collect unbiased judgment which usually doesn’t come from a great team working with you.<br />Graduated from UNIC &amp; MSM, the largest/oldest institutions in Southern and Central Europe specialized in branding with internationalization as a strategic component reinforced me to be a&nbsp;<a href="https://bgdint.com/brand-promotion/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-2">brand-building</a>&nbsp;practitioner in local and international markets.
    </p>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div  data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-1">
              <img className="u-expanded-width u-image u-image-default u-image-1" src="images/Place-Branding.jpg" alt data-image-width={946} data-image-height={806} />
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-3"> Place Branding<span style={{fontWeight: 700}} />
              </h5>
              <p className="u-text u-text-default u-text-4"><span className="u-icon" />&nbsp;​A place is re-born …. place branding is crucial to double up tourism….
              </p>
              <p className="u-text u-text-custom-color-1 u-text-default u-text-5">
                <a href="https://nicepage.com/c/counter-html-templates" className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-3">Read more</a>
              </p>
            </div>
          </div>
          <div data-aos="fade-up"  className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-2">
              <img className="u-expanded-width u-image u-image-default u-image-2" src="images/Coperate-branding.jpg" alt data-image-width={946} data-image-height={806} />
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-6"> Corporate Branding</h5>
              <p className="u-text u-text-default u-text-7"> Product differentiation and Corporate Branding, Is it similar? …</p>
              <a href="https://nicepage.com/c/counter-html-templates" className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4">Read more</a>
            </div>
          </div>
          <div  data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-3">
              <img className="u-expanded-width u-image u-image-default u-image-3" src="images/Product-Branding.jpg" alt data-image-width={946} data-image-height={806} />
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-8"> Product Branding</h5>
              <p className="u-text u-text-9"> Branding is about telling a story, not a product. Being profitable is not…</p>
              <a href="https://nicepage.com/c/counter-html-templates" className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-5">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-4">
            <div className="u-container-layout u-valign-top u-container-layout-4">
              <img className="u-expanded-width u-image u-image-default u-image-4" src="images/Sports-Branding.jpg" alt data-image-width={946} data-image-height={806} />
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-10"> Sports Branding</h5>
              <p className="u-text u-text-default u-text-11"><span className="u-icon" />&nbsp;​A place is re-born …. place branding is crucial to double up tourism….
              </p>
              <p className="u-text u-text-custom-color-1 u-text-default u-text-12">
                <a href="https://nicepage.com/c/counter-html-templates" className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-6">Read more</a>
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-5">
              <img className="u-expanded-width u-image u-image-default u-image-5" src="images/Digital-Branding.jpg" alt data-image-width={946} data-image-height={806} />
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-13"> Digital Branding</h5>
              <p className="u-text u-text-default u-text-14"> From digital marketing to Digital Branding … online business…</p>
              <a href="https://nicepage.com/c/counter-html-templates" className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-7">Read more</a>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-6">
            <div className="u-container-layout u-container-layout-6">
              <img className="u-expanded-width u-image u-image-default u-image-6" src="images/Personal-branding-2.jpg" alt data-image-width={946} data-image-height={806} />
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-15"> Personal Branding</h5>
              <p className="u-text u-text-16"> Be yourself – “Work until YOU no longer have to introduce yourself.” (Gabriel Macht)…</p>
              <a href="https://nicepage.com/c/counter-html-templates" className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-8">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 className="u-text u-text-custom-color-1 u-text-default u-text-17">
      <a data-aos="fade-up"  href="https://bgdint.com/spantik/" title="Spantik" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-9">SPANTIK </a>
    </h2>
    <p  data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-18"> a brand building model - step by step appraoch</p>
    <p  data-aos="fade-up" className="u-text u-text-default u-text-19"> Siddiq Ahmad Khan is a brand strategist at&nbsp;<a href="https://bgdint.com/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-10">Business GO Digital</a>&nbsp;and was involved in the national campaign of branding of the wine industry and service firms in Southern Europe, hospitality and construction sectors in the Middle East served as Assistant Professor at business school in the largest private university in Pakistan in the marketing specialization area, consulted in establishing associations, clubs, and businesses. He has been speaking to different peer groups as well.&nbsp;<a href="https://bgdint.com/spantik/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-11">SPANTIK</a>&nbsp;is a brand-building model to contribute practitioner and top-level management in their strategic branding process of corporations and products. It consists of seven phases practically connected and a guide for markets and brand builders.
    </p>
    <a data-aos="fade-up"  href="https://nicepage.com/k/aesthetic-html-templates" className="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-12">Learn More</a>
  </div>
</section>


            </div>


             {/* Ending banner */}


            <div className="videosection">
               <a data-aos="fade-up" href="javascript:void(0)" className='videoclickicon' > <img style={{height: "70px"}} src={iconb} alt="" /></a>
            </div>


            {/*  */}

    </div>
  )
}

export default Strategy