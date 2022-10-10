import React, {useEffect} from "react";
import "./nicepage.scoped.css"
import "./PROMOTIONALPRODUCTS.scoped.css"
import {Link} from "react-router-dom"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Promotionalproducts() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>

       
        <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > PROMOTIONAL PRODUCTS </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} PROMOTIONAL PRODUCTS </span>
        </div>  



        <div className="PromotionalProductslower u-body u-xl-mode">

       <section className="u-clearfix u-section-1" id="sec-be6f">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-container-layout-1">
        <h4 data-aos="fade-right" className="u-text u-text-custom-color-1 u-text-default u-text-1"> Promotional Products</h4>
        <p data-aos="fade-left" className="u-text u-text-default u-text-2"> Promotional products are a competitive part of advertising strategies. The research shows that 80% of the recipients remember the brand and like receiving them. They are a guaranteed way to get your brand in the hands of your customers. Promotional products last far longer and are a great way to build relationships with key clients, build brand loyalty by creating a connection with business, recall from memory by having a strong social brand identity, and somehow develop a reputation for the quality of a brand.</p>
        <p data-aos="fade-up" className="u-text u-text-default u-text-3">We Offer:</p>
        <ol data-aos="fade-up" className="u-text u-text-default u-text-4">
          <li> Business Essentials</li>
          <li>Marketing Essentials</li>
          <li>Banners &amp; Signs</li>
          <li>Customized Products</li>
        </ol>
        <p data-aos="fade-up" className="u-text u-text-default u-text-5"> POS Display: The future is near when your business has to be ready in using innovative digital POS displays and mixing technology-enabled experiences in physical stores with internet or mobile sales components. Contact us to be part of the future.</p>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div className="u-container-style u-layout-cell u-size-41 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-2">
              <p data-aos="fade-right" className="u-text u-text-default u-text-6"> Stay Connected</p>
              <img data-aos="fade-right" className="u-expanded-width u-image u-image-default u-image-1" src="images/human-2944064_1920.jpg" alt data-image-width={1920} data-image-height={1007} />
              <p data-aos="fade-up" className="u-text u-text-default u-text-7"> Promotional products are useful with a brand’s identity designed to increase brand awareness and recognition. These are powerful marketing tools while they make a brand to connect with its consumers and potential customers. It also allows consumers to interact with a brand on a physical level, to have a memorable brand experience. More than 80% of people like receiving them and they remember the brand name afterward.<br />A company must use this toll effectively by customizing the products and messages by keeping the customers in mind. Remember, it must be a memorable product. The product must have a strong emotional connection and impressive positioning. This is the only way that products will appear in minds of customers at the time of purchase. And it will be different than its competitors.
              </p>
            </div>
          </div>
          <div className="u-container-style u-layout-cell u-size-19 u-layout-cell-2">
            <div className="u-container-layout u-valign-top u-container-layout-3">
              <p data-aos="fade-left" className="u-text u-text-custom-color-1 u-text-default u-text-8"> Awareness, Interest, Desire, Action</p>
              <img data-aos="fade-left" className="u-expanded-width u-image u-image-default u-image-2" src="images/balloons-3730834_1920-1.jpg" alt data-image-width={1276} data-image-height={1920} />
              <p data-aos="fade-up" className="u-text u-text-default u-text-9"> Promotional products are useful tangible to the market brand name, logo or message to enhance brand awareness, to connect with on a physical level to create a more impressive brand experience.</p>
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

export default Promotionalproducts