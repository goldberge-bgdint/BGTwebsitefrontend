import React,{ useEffect,useState } from 'react'
import "./slider.scss"
import anime from "animejs/lib/anime.es.js"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";


function Slider() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {

    AOS.init({
      duration : 1000
    });

  }, []);

  useEffect(()=>{
    // window.addEventListener("scroll", () => {
    //   console.log(window.scrollY)
    // }
    // )
    anime({
      targets: '.cloud1',
      translateX: 200,
      direction: 'alternate',
      loop: true,
      duration: 9000,
      easing: 'easeInOutSine'
    });

    anime({
      targets: '.cloud12',
      translateX: 200,
      direction: 'alternate',
      loop: true,
      duration: 9000,
      easing: 'easeInOutSine'
    });

    anime({
      targets: '.cloud13',
      translateX: 200,
      direction: 'alternate',
      loop: true,
      duration: 9000,
      easing: 'easeInOutSine'
    });

    anime({
      targets: '.cloud2',
      translateX: -200,
      direction: 'alternate',
      loop: true,
      duration: 9000,
      easing: 'easeInOutSine'
    });

  })



  return (
    <div className='sls'>
    <div className="slidercontent">
    
    <img    src="Banner/bannerimage.png" className='textanimation' id='checking' alt="" />

    <div className="animateddivs">
      <img  src="Banner/image_2022_10_11T10_48_24_018Z.png" className='pahari'  alt="" />
      <img  src="Banner/image_2022_10_11T10_58_01_412Z.png" className='cloud1' alt="" />
      <img  src="Banner/image_2022_10_11T10_58_01_412Z.png" className='cloud12' alt="" />
      <img  src="Banner/image_2022_10_11T10_58_01_412Z.png" className='cloud13' alt="" />
      <img  src="Banner/image_2022_10_11T10_59_09_198Z.png" className='cloud2' alt="" />

    </div>

    </div>

    <div className="masking">   
    </div>

    </div>
  )
}

export default Slider