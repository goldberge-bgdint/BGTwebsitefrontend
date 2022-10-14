import React, {useEffect} from "react";
import "./nicepage.scoped.css"
import "./PACKAGINGSOLUTIONS.scoped.css"
import {Link} from "react-router-dom"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";


function Packagingsolutions() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>

        <div className='blendedslider text-center '>
                <h5 data-aos="fade-up"> PACKAGING SOLUTIONS </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up" className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} PACKAGING SOLUTIONS </span>
        </div>  

        <div className="packingsolutionsower u-body u-xl-mode">

     <section className="u-clearfix u-section-1" id="sec-cb64">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-valign-top u-container-layout-1">
        <h4 data-aos="fade-right" className="u-text u-text-custom-color-1 u-text-default u-text-1"> Packaging Solutions</h4>
        <p data-aos="fade-right" className="u-text u-text-default u-text-2"> We proudly print and supply all types of packaging solutions including boxes, bags, custom boxes, food packages, tapes, which are specifically designed to protect perishable items. Corrugated boxes are offered in multiple sizes, shapes, and thicknesses to accommodate almost any kind of object, of course, branded ones. Unforgettable Unboxing experiences! Let them choose a style, size, quantity, and quality. We design for them with amazing 360-degree 3D preview available online and offer vibrant full-color digital printing once agreed.</p>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-15 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-2">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-1" src="images/food-donation.png" alt data-image-width={128} data-image-height={128} />
              <h6 className="u-text u-text-custom-color-1 u-text-default u-text-3"> Industrial Products</h6>
              <p className="u-align-center u-text u-text-4"> Flexible Plastic Packaging, Plastic Film, Pouches, Plastic &amp; Shopping Bags, Water Bottles</p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-15 u-layout-cell-2">
            <div className="u-container-layout u-valign-top u-container-layout-3">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2" src="images/pizza.png" alt data-image-width={128} data-image-height={128} />
              <h6 className="u-text u-text-custom-color-1 u-text-5"> E-Commerce Package</h6>
              <p className="u-align-center u-text u-text-6"> Standard, Multisize, Top &amp; Bottom, Self Locking, E-retail Boxes</p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-15 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-4">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-3" src="images/shield.png" alt data-image-width={128} data-image-height={128} />
              <h6 className="u-text u-text-custom-color-1 u-text-7"> Hygiene &amp; Compact</h6>
              <p className="u-align-center u-text u-text-8"> Safe, Hygiene, Grocery, Food Box, Liquid Packaging</p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-align-center u-container-style u-layout-cell u-size-15 u-layout-cell-4">
            <div className="u-container-layout u-container-layout-5">
              <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-4" src="images/project-management.png" alt data-image-width={128} data-image-height={128} />
              <h6 className="u-text u-text-custom-color-1 u-text-9"> Versatile &amp; Customized</h6>
              <p className="u-text u-text-10"> Innovative, Versatile, Convenient, Feasible &amp; Affordable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-6">
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-11"> Packaging for All</h5>
              <p className="u-text u-text-default u-text-12"> We aim in providing the best solutions for multiple industries and to its customers that fit all kinds of products. Our target is to exceed our customers’ expectations through innovative packaging, high quality, competitive price, creative ideas, and delivered on-time as per their deadlines.</p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-6">
            <div className="u-container-layout u-valign-top u-container-layout-7">
              <img className="u-expanded-width u-image u-image-default u-image-5" src="images/pexels-sunyu-kim-2047397-1-e1603644594945.jpg" alt data-image-width={960} data-image-height={734} />
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-7">
            <div className="u-container-layout u-valign-top u-container-layout-8">
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-13"> Our Promise</h5>
              <p className="u-text u-text-default u-text-14"> We are committed to providing Turnkey Solutions: To deliver the order on time. To respond to immediate requests. To handle any size of the order. to promise quality products.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-3">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-48 u-layout-cell-8">
            <div className="u-container-layout u-container-layout-9">
              <p className="u-text u-text-default u-text-15"> We are one of the most innovative packaging solutions company in Pakistan. We have been combining innovation and advanced technologies that provide flexible packaging solutions for a convenient, safer &amp; sustainable product to our customers. We follow international standards and guidelines and the practices employed towards the production of the packaging meets the highest quality of our products and level of service to our customers.</p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-12 u-layout-cell-9">
            <div className="u-container-layout u-container-layout-10">
              <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-6" src="images/pexels-karolina-grabowska-4498121-150x150.jpg" alt data-image-width={150} data-image-height={150} />
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

export default Packagingsolutions