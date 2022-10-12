import React, {useEffect,useState} from "react";
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

import Textpopup from "../../components/Popups/Textpopup/Textpopup";

import Videopopup from "../../components/Popups/Videopopup/Videopopup";

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Strategy() {

  let [ text, settext ] = useState("hello")

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
    <p data-aos="fade-left" className="u-text u-text-default u-text-2"> International markets have been growing with great wonders to the entrepreneurs and it’s time to step outside the comfort zone and engage a <b className="boldtextlink" > branding </b> &nbsp;consultant with an understanding that there is much more to branding than advertising to collect unbiased judgment which usually doesn’t come from a great team working with you.<br />Graduated from UNIC &amp; MSM, the largest/oldest institutions in Southern and Central Europe specialized in branding with internationalization as a strategic component reinforced me to be a <b className="boldtextlink" >brand-building</b>  practitioner in local and international markets.
    </p>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div  data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-1">
              <img className="u-expanded-width u-image u-image-default u-image-1" src="images/Place-Branding.jpg" alt data-image-width={946} data-image-height={806} />
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-3"> Place Branding<span style={{fontWeight: 700}} />
              </h5>
              <p className="u-text u-text-default u-text-4"><span className="u-icon" />​A place is re-born …. place branding is crucial to double up tourism….
              </p>
              <p className="u-text u-text-custom-color-1 u-text-default u-text-5">
                <a style={{cursor:"pointer"}} onClick={()=>{
                  settext(`A place is re-born …. place branding is crucial to double up tourism.
                  Asia and ME are unique markets, a blend of history, culture, religion and social values. To understand and develop an offering to such markets is a challenge which BGDINT realizes and accept with a world class team of local consultants brand specialist, chartered marketers, advertisers and practitioners.
                  
                  Place branding is about communication to target audience with a competitive edge to other places. Advisor/consultant and a team of world class place branding consultants is willing to contribute a country, state, region and city to attract world trade and multinationals for the economic growth and investments. Our role includes brand research, assessment & discovery, management of the reputation of destination, brand communication and medial relations, promotion of places, strategy, implementation and control.`);
                  document.getElementById("textpopupbutton").click()
                }} className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-3">Read more</a>
              </p>
            </div>
          </div>
          <div data-aos="fade-up"  className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-2">
              <img className="u-expanded-width u-image u-image-default u-image-2" src="images/Coperate-branding.jpg" alt data-image-width={946} data-image-height={806} />
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-6"> Corporate Branding</h5>
              <p className="u-text u-text-default u-text-7"> Product differentiation and Corporate Branding, Is it similar? …</p>
              <a style={{cursor:"pointer"}} onClick={()=>{
                  settext(`Product differentiation and Corporate Branding, Is it similar?
                  If corporate management is thinking to relate its customers and people to it’s values and emotions, this is the real competitive advantage the corporation would have today to sustain it’s differentiation.
                  
                  Corporate branding is a tool that guarantees economic development and stability of any business. Facts indicate that companies with concentration on branding could compete visibly in local and international markets. Middle Eastern region particularly GCC counties are on an edge to shift from developed countries to industrial ones and the major firms have realized the need for brand building to retain corporate clients and talent. One Belt One Road (OBOR) is revolution in Asian region and it would have a great impact on the industrial development of the countries specially Pakistan and other central Asian states. The corporate management must engage the branding efforts before its too late. BGDINT will engage a world class consultant with a similar experience in your type of organizations. We work today for tomorrow – with advance tools, global expertise and with blend of research and tested models.`);
                  document.getElementById("textpopupbutton").click()
                }} className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4">Read more</a>
            </div>
          </div>
          <div  data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-3">
              <img className="u-expanded-width u-image u-image-default u-image-3" src="images/Product-Branding.jpg" alt data-image-width={946} data-image-height={806} />
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-8"> Product Branding</h5>
              <p className="u-text u-text-9"> Branding is about telling a story, not a product. Being profitable is not…</p>
              <a style={{cursor:"pointer"}} onClick={()=>{
                  settext(`Branding is about telling a story, not a product.
                  Being profitable is not the sole concern of your product. Today product managers have to take a decision, are you selling a commodity or brand? Branding determines your prospects and connections with your customers and stakeholders – when you aim at a secure market share.
                  
                  BGDINT believes that customers must have access to the branding not only advertising campaign. A consultant’s approach is exceptional in a way that any product keeps moving on to be a profitable unit to it’s firm. We do articulate brands from scratch or rebrand them, develop them as appealing to it’s customers to enhance life into a better way. We align our services with agency and work parallel to examine a brand from different stages and support to reach at the desired marketplace.`);
                  document.getElementById("textpopupbutton").click()
                }} className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-5">Read more</a>
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
              <a style={{cursor:"pointer"}} onClick={()=>{
                  settext(`Club Branding – makes it more attractive to talent and audience.
                  Manchester United, Real Madrid, Al Hilal, Lahore Qalandars, Peshawar Zalmi … yes, these are brands and more than clubs. A branded club earns revenue rather than the game and contribute in the sustainability of it.
                  
                  We are affiliated with western consultants with expertise in branding and visible contribution in sport branding. Endorsement is a competitive tool but is it a long term strategy? we don’t think so. Club branding is an authentic claim to have a sustainable growth and it includes perception, an identity, trust, loyalty and emotional fans engagement, effective communication, long term partnerships, sizable presence, brand equity and team globalization. The most crucial thing to be considered is that game is being played in the filed and in real time updates in digital and social media. The consultancy firm should be so effective in filling this gap with no wastage of time. At this moment, BGDINT will remain effective and will lead media relations, internal branding, digital branding to gain the desirable market share.`);
                  document.getElementById("textpopupbutton").click()
                }}  className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-6">Read more</a>
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-5">
            <div className="u-container-layout u-container-layout-5">
              <img className="u-expanded-width u-image u-image-default u-image-5" src="images/Digital-Branding.jpg" alt data-image-width={946} data-image-height={806} />
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-13"> Digital Branding</h5>
              <p className="u-text u-text-default u-text-14"> From digital marketing to Digital Branding … online business…</p>
              <a style={{cursor:"pointer"}} onClick={()=>{
                  settext(`From digital marketing to Digital Branding … online business is a truth today.
                  Online business is much more different: where each moment is a moment of truth. No matters which business you are in, the customers will find you in digital media, social media and the places you ignored to post. Digital world has no borders, means you have to have a global identity.
                  
                  BGDINT is well informed and equipped in relation to digital branding where it covers keywords, contents, SEOs, ranking, online & offline touchpoint and real time responses. Along with marketing planning, a company must not ignore digital/social media planning while digital brand identity is what you speak to your visitors who are always in a rush to click and move on. A tweet, an email, a blog, a comment and a feedback from your side is a shadow of your branding efforts. The online chat staff also play an important role in developing brand personality infant of the viewers. WE have worked out already and tested some of social media planning model that contribute in digital branding process which is a continuous process and cannot be undermine for a single moment.`);
                  document.getElementById("textpopupbutton").click()
                }}  className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-7">Read more</a>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-6">
            <div className="u-container-layout u-container-layout-6">
              <img className="u-expanded-width u-image u-image-default u-image-6" src="images/Personal-branding-2.jpg" alt data-image-width={946} data-image-height={806} />
              <h5 className="u-text u-text-custom-color-1 u-text-default u-text-15"> Personal Branding</h5>
              <p className="u-text u-text-16"> Be yourself – “Work until YOU no longer have to introduce yourself.” (Gabriel Macht)…</p>
              <a style={{cursor:"pointer"}} onClick={()=>{
                  settext(`Be yourself – “Work until YOU no longer have to introduce yourself.” (Gabriel Macht)
                  It’s not overwhelming to say we are living in Google world, Twitter area and Navigation home. Do you exist there? If not … just spare some time and buy a domain cost you only 2$ a month www.yourname.com and hire a consultant to lead you towards personal branding.
                  
                  BGDINT believes an individual with a spark deserves to be enhanced in digital world to follow the track of successful career among millions around you. Being social is nor more effective and it have become a tiny part of branding. Yes a brand must be socially connected but it should also be emotionally connected. No matters you are a political personality, entrepreneur, sports player, movie star or a career seeker – personal branding will motivate you to be more promising in your saying, more efficient in your doings, more aggressive in your achievement and ultimately be a successful person in your life. Being low profile is no more an advantage in business world, dare to come out of the box and experience the world.`);
                  document.getElementById("textpopupbutton").click()
                }}  className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-8">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 style={{ color: "var(--primary)" }} className="u-text u-text-default u-text-17">
      <span  data-aos="fade-up" style={{color:"var(--primary) !important"}} title="SPANTIK" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-btn-9">SPANTIK</span>
    </h2>
    <p  data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-18"> a brand building model - step by step appraoch</p>
    <p  data-aos="fade-up" className="u-text u-text-default u-text-19"> Siddiq Ahmad Khan is a brand strategist at&nbsp;<a href="https://bgdint.com/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-10">Business GO Digital</a>&nbsp;and was involved in the national campaign of branding of the wine industry and service firms in Southern Europe, hospitality and construction sectors in the Middle East served as Assistant Professor at business school in the largest private university in Pakistan in the marketing specialization area, consulted in establishing associations, clubs, and businesses. He has been speaking to different peer groups as well.&nbsp;<a href="https://bgdint.com/spantik/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-11">SPANTIK</a>&nbsp;is a brand-building model to contribute practitioner and top-level management in their strategic branding process of corporations and products. It consists of seven phases practically connected and a guide for markets and brand builders.
    </p>
    <a data-aos="fade-up"  className="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-12">Learn More</a>
  </div>
</section>


        </div>


             {/* Ending banner */}


            <div className="videosectionstrategy">
               <a onClick={()=>{ document.getElementById("videopopupbutton").click() }}  data-aos="fade-up" href="javascript:void(0)" className='videoclickicon' > <img style={{height: "70px"}} src={iconb} alt="" /></a>
            </div>


            {/*  */}

          <Textpopup text={text} title="Strategy" />
          <Videopopup title="Watch Our New video" videolink="https://www.youtube.com/watch?v=iMgpAWqEcEI" />

    </div>

  )
}

export default Strategy