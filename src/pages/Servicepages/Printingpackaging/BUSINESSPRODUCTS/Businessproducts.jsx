import React, {useEffect} from "react";
import "./BUSINESSPRODUCTS.scoped.css"
import "./nicepage.scoped.css"
import {Link} from "react-router-dom"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Businessproducts() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>


        <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > BUSINESS PRODUCTS </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} BUSINESS PRODUCTS </span>
        </div>  


        <div className="businessproducts u-body u-xl-mode">

       <section className="u-clearfix u-section-1" id="sec-c008">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-valign-top u-container-layout-1">
        <h4 data-aos="fade-right"  className="u-text u-text-custom-color-1 u-text-default u-text-1"> Business Products</h4>
        <p  data-aos="fade-right" className="u-text u-text-2"> Business Identity is very crucial especially when it comes to tangible items. There are some moments when customers are in contact with no human, the role of a communication agency is more important at this stage. Firstly, understanding customer needs is very important, then the business offering, and finally the communication must be aligned with both ends. We are one of the top communication firms in the market which understands well the process and has impressive support of consultants during designing the business products.<br />
          <br />We have categorized the business products into four main categories:
        </p>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-15 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-2">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-3"> Corporate Identity</p>
              <img className="u-expanded-width u-image u-image-default u-image-1" src="images/brett-jordan-_7NyPrBM1Uk-unsplash.jpg" alt data-image-width={640} data-image-height={480} />
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-15 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-3">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-4"> Hospitality Items</p>
              <img className="u-expanded-width u-image u-image-default u-image-2" src="images/pexels-kaboompics-com-6663-e1603997582575.jpg" alt data-image-width={640} data-image-height={480} />
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-15 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-4">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-5"> Personalized Gifts</p>
              <img className="u-expanded-width u-image u-image-default u-image-3" src="images/business-3365316_1280-e1603997313173.jpg" alt data-image-width={639} data-image-height={478} />
            </div>
          </div>
          <div  data-aos="fade-left" className="u-container-style u-layout-cell u-size-15 u-layout-cell-4">
            <div className="u-container-layout u-container-layout-5">
              <p className="u-text u-text-custom-color-1 u-text-default u-text-6"> Safety Products</p>
              <img className="u-expanded-width u-image u-image-default u-image-4" src="images/pexels-pixabay-209230-e1603997424751.jpg" alt data-image-width={640} data-image-height={480} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-5">
            <div data-aos="fade-right" className="u-container-layout u-valign-top u-container-layout-6">
              <h4 className="u-text u-text-custom-color-1 u-text-default u-text-7"> Hospitality Industry Items</h4>
              <p className="u-text u-text-default u-text-8"> For a hospitality business, communication is mostly via electronic or printed material. It could be menu, posters, instructions, cards, and table mats; in the case of a construction company, that could be noticed board design, safety products, instruction manuals, and company codebooks.</p>
              <img className="u-expanded-width u-image u-image-default u-image-5" src="images/jeff-sheldon-9SyOKYrq-rE-unsplash-1-1.jpg" alt data-image-width={1920} data-image-height={1440} />
              <p className="u-text u-text-default u-text-9"> We believe business products are important to communicate to your customers and stakeholders. We have a creative communication department where you can get creative designs and we can procure for you even the imported items.</p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-6">
            <div className="u-container-layout u-container-layout-7">
              <h4 className="u-text u-text-custom-color-1 u-text-default u-text-10"> Health &amp; Safety Products</h4>
              <p className="u-text u-text-default u-text-11"> Employees who are working in general stores, offices, deliveries need masks, gloves, safety signs to keep the customers and people safe and have compliance with the latest regulations. The material we produce is up to international standards and customized as per your business requirements for differing work environments.</p>
              <img className="u-expanded-width u-image u-image-default u-image-6" src="images/pexels-ivan-samkov-4240611.jpg" alt data-image-width={960} data-image-height={960} />
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

export default Businessproducts