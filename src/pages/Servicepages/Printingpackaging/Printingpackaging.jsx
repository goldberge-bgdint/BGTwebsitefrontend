import React, {useEffect, useState} from "react";
import "./Printingpackages.scoped.css"
import "./nicepage.scoped.css"

import 'animate.css';

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Printingpackaging() {

  let [icon1,seticon1] = useState("")
  let [icon2,seticon2] = useState("")
  let [icon3,seticon3] = useState("")
  let [icon4,seticon4] = useState("")
  let [insidetext,setinsidetext] = useState("")

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div className='u-body u-xl-mode' >

<section className="u-clearfix u-section-1" id="sec-df81">
  <img className="u-expanded-width u-image u-image-default u-image-1" src="images/Packaging-2048x799.jpg" alt data-image-width={2048} data-image-height={799} />
  <div className="u-container-style u-expanded-width u-group u-image u-image-2" data-image-width={1919} data-image-height={783}>
    <div className="u-container-layout u-container-layout-1">-
      <h4 data-aos="fade-up" className="u-text u-text-default u-text-1"> <b> International Printing &amp; Packaging Services </b> </h4>
      <h5 data-aos="fade-up" className="u-text u-text-2"> Communication is the most critical element in any business. A small size business owner might think it is a wastage of money to go for a good printing company. A good company is never expensive, especially when printing material payback. Just imagine, you got a call to have a business meeting because of an attractive business card. A product catalog could bring a good number of orders. A mouse pad can create brand recognition in the minds of users. A branded vehicle moving on the streets can be more effective in creating brand recognition. We offer the most reliable and affordable printing services to our business customers. We know which printing material is the best choice. Our team has the expertise to choose the right colors for the right brand message. We understand the importance of occasions relevant to communication. You can trust us for a WOW type of printing service.</h5>
    </div>
  </div>
  <div className="u-container-style u-expanded-width u-group u-image u-image-3" data-image-width={1024} data-image-height={490}>
    <div className="u-container-layout u-container-layout-2">
      <div className="u-container-style u-grey-80 u-group u-group-3">
        <div className="u-container-layout u-container-layout-3">
          <div className="u-container-style u-grey-5 u-group u-group-4">
          
            <div className="animatediv w-100">
              
              <h4 className="text-center" > 
                  <b>
                  Printing & Packaging Model
                  </b>
              </h4>

              <div className="animationsection">

                <div className="outercircle">
                  <div className="innercirclle">
                    <p className="insidetext" >{insidetext}</p>
                  </div>
                </div>

                <div className="animatedicons">
                  <div onMouseEnter={()=>{ seticon1("") ; setinsidetext(`Research & Analysis Market & Competitors Analysis`) }} className={icon1} > <img className="icon1" src="Banner/image_2022_10_14T05_44_55_633Z.png" alt="" /> </div>
                  <div onMouseEnter={()=>{ seticon2("") ; setinsidetext(`Concept & Design Share your design, or we design for you`) }} className={icon2} > <img className="icon3" src="Banner/image_2022_10_14T05_46_28_649Z.png" alt="" /> </div>
                  <div onMouseEnter={()=>{ seticon3("") ; setinsidetext(`Shipping & Delivery Anywhere in the world we deliver`) }} className={icon3} > <img className="icon4" src="Banner/image_2022_10_14T05_46_51_912Z.png" alt="" /> </div>
                  <div onMouseEnter={()=>{ seticon4("") ; setinsidetext(`Printing & Packaging promotional printing & packaging solutions`) }} className={icon4} > <img className="icon2" src="Banner/image_2022_10_14T05_45_41_324Z.png" alt="" /> </div>
                </div>
                
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
    <div className="u-layout">
      <div className="u-layout-row">

        <div  data-aos="fade-right" className="u-container-style u-layout-cell u-size-15 u-layout-cell-1">
          <div className="u-container-layout u-valign-top u-container-layout-5">
            <h5 className="u-text u-text-custom-color-1 u-text-default u-text-3"> Printing &amp; Large Displays</h5>
            <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-4" src="images/paris-195327_1920-e1603016414814.jpg" alt data-image-width={960} data-image-height={960} />
            <p className="u-text u-text-4"> From an idea to concept and then printing process with accurate color delivery, this is all that we offer to our customers.</p>
            <p className="u-text u-text-custom-color-1 u-text-default u-text-5" style={{cursor: "pointer"}} >Read More&nbsp;&nbsp;<span className="u-custom-color-1 u-file-icon u-icon u-icon-1"><img src="images/2989988-43175cd6.png" alt /></span>
            </p>
          </div>
        </div>

        <div  data-aos="fade-up"  className="u-container-style u-layout-cell u-size-15 u-layout-cell-2">
          <div className="u-container-layout u-container-layout-6">
            <h5 className="u-text u-text-custom-color-1 u-text-default u-text-6"> Promotional Products</h5>
            <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-5" src="images/balloons-3730834_1920-e1603016459292.jpg" alt data-image-width={960} data-image-height={960} />
            <p className="u-text u-text-7"> Promotional products are a competitive part of advertising strategies. The research shows that 80% of the recipients remember the brand and like receiving them.</p>
            <p className="u-text u-text-custom-color-1 u-text-default u-text-8" style={{cursor: "pointer"}} >Read More&nbsp;&nbsp;<span className="u-custom-color-1 u-file-icon u-icon u-icon-2"><img src="images/2989988-43175cd6.png" alt /></span>
            </p>
          </div>
        </div>

        <div  data-aos="fade-up"  className="u-container-style u-layout-cell u-size-15 u-layout-cell-3">
          <div className="u-container-layout u-container-layout-7">
            <h5 className="u-text u-text-custom-color-1 u-text-9"> Packaging Solutions</h5>
            <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-6" src="images/pexels-sunyu-kim-2047397.jpg" alt data-image-width={960} data-image-height={960} />
            <p className="u-text u-text-10"> We proudly print and supply all types of packaging solutions including boxes, bags, custom boxes, food packages, tapes, which are specifically designed to protect perishable items.</p>
            <p className="u-text u-text-custom-color-1 u-text-default u-text-11" style={{cursor: "pointer"}} >Read More&nbsp;&nbsp;<span className="u-custom-color-1 u-file-icon u-icon u-icon-3"><img src="images/2989988-43175cd6.png" alt /></span>
            </p>
          </div>
        </div>

        <div  data-aos="fade-left"  className="u-container-style u-layout-cell u-size-15 u-layout-cell-4">
          <div className="u-container-layout u-container-layout-8">
            <h5 className="u-text u-text-custom-color-1 u-text-12"> Business Products</h5>
            <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-7" src="images/jeff-sheldon-9SyOKYrq-rE-unsplash-1-e1603016513568.jpg" alt data-image-width={960} data-image-height={960} />
            <p className="u-text u-text-13"> Business Identity is very crucial especially when it comes to tangible items. There are some moments when customers are in contact with no human.</p>
            <p className="u-text u-text-custom-color-1 u-text-default u-text-14">Read More&nbsp;&nbsp;<span className="u-custom-color-1 u-file-icon u-icon u-icon-4"><img src="images/2989988-43175cd6.png" alt /></span>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <div className="u-clearfix u-gutter-36 u-layout-wrap u-layout-wrap-2">
    <div className="u-layout">
      <div className="u-layout-row">
        <div data-aos="fade-right" className="u-container-style u-image u-layout-cell u-size-30 u-image-8" data-image-width={960} data-image-height={960}>
          <div className="u-container-layout u-container-layout-9">
            <div className="u-container-style u-expanded-width u-grey-80 u-group u-group-5">
              <div className="u-container-layout u-valign-middle u-container-layout-10">
                <p className="u-text u-text-default u-text-15"> Customized Packaging</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="u-container-style u-image u-layout-cell u-size-30 u-image-9" data-image-width={960} data-image-height={960}>
          <div className="u-container-layout u-container-layout-11">
            <div className="u-container-style u-expanded-width u-grey-80 u-group u-group-6">
              <div className="u-container-layout u-container-layout-12">
                <p className="u-text u-text-default u-text-16"> Affordable Supplies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Printingpackaging