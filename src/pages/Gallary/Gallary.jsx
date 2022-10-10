import React, {useEffect} from "react";
import "./Gallary.scss"
import {Link} from "react-router-dom"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Gallary() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

    let imageslist=[
       "https://bgdint.com/wp-content/uploads/2020/10/WhatsApp-Image-2021-07-08-at-9.06.55-PM.jpeg",
       "https://bgdint.com/wp-content/uploads/2020/10/WhatsApp-Image-2021-07-08-at-9.06.52-PM.jpeg",
       "https://bgdint.com/wp-content/uploads/2020/10/WhatsApp-Image-2021-07-08-at-9.06.55-PM-1.jpeg",
       "https://bgdint.com/wp-content/uploads/2020/10/WhatsApp-Image-2021-07-08-at-9.06.52-PM-1.jpeg",
       "https://bgdint.com/wp-content/uploads/2020/10/WhatsApp-Image-2021-07-08-at-9.06.54-PM.jpeg"
    ]

  return (
    <div>

         <div className='blendedslider text-center '>
                <h5> Gallery </h5>
                <div className="blendedsliderdivider"></div>
                <span className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} Gallery </span>
        </div>  

        <div class="container imagegallery">
 
            <div class="image-gallery">
                <div>
                    {imageslist.map((e) =>
                     <img data-aos="fade-up" className='gallaryimage' src={e} alt="" />
                     )}
                </div>
            </div>
        </div>





    



    </div>
  )
}

export default Gallary