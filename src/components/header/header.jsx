import React, { useState,useEffect } from 'react'
import "./header.scss"
import compnaylogo from "../../images/compnaylogo.png"
import {Link} from "react-router-dom"

//icons
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";

function Header() {

  let [websiteclass,setwebsiteclass]=useState("headersection")
  let [headerlayout, setheaderlayout] = useState ( ( )=>{

    if( window.screen.availWidth>860 )
    {
      return "Full display"
    }
    else
    {
      return "Collapse"
    }

  })

  useEffect( () => {

     window.addEventListener('scroll', (event) => {
     
      if (window.scrollY >40) {
        setwebsiteclass("headersection2 shadow")
      }
      else
      {
        setwebsiteclass("headersection")
      }

    });

    window.addEventListener('resize', (event) => {

      if( window.screen.availWidth>860 )
      {
        setheaderlayout( "Full display") 
      }
      else
      {
        setheaderlayout("Collapse")
      }

    })

   
  });

  return (

    <div>

      { ( headerlayout == "Full display" )? 

        // large screen header 

  <div className={websiteclass}>
  <div className="headerlogo"><img src={compnaylogo} id="bgdlogo" alt="" /></div>
  <div className="navmenu">
    <ul className='menue' >
      <li><a  className='menuelink' href=""> <Link className='menuelink' to="/home" >HOME</Link> </a></li> <div className="menuedivider"></div>
     
      {/* Services mene */}
      <li className='subnav' >
       
          <a className = 'menuelink'> <Link  className = 'menuelink' to = "/services" > SERVICES </Link>  <MdKeyboardArrowDown/> </a>
          {/* paremt Sub menue */}
          <ul className = 'submenue' style = {{ width: "132%" }} >
                 {/* Child Sub menue */}
                <li className='parentmenuelink' >  <span className='parentmenuelinktag' ><Link className='childsubmenutohover' to="/brandidentity" style={{color:"Black"}} > Brand Identity <MdKeyboardArrowRight/> </Link> </span>
                 {/* Child Sub menue Links */}
                <ul className='Childsubmenue'>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover'  style={{color:"black"}} to = "/creative-communication" > Creative Communication </Link>  </li>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover' style={{color:"black"}} to = "/brand-promotion" > Brand Promotion </Link>  </li>
                  <li className='childmenuelinks'> <Link className='childsubmenutohover'  style={{color:"black"}} to = "/packaging-design" > packaging Design </Link>  </li>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover' style={{color:"black"}} to = "/content-writing" > Content Writing </Link>  </li>
                </ul>

                </li>


                  {/* Child Sub menue */}
                <li className='parentmenuelink' >  <span className='parentmenuelinktag' ><Link className='childsubmenutohover' to="/production-studio" style={{color:"Black"}} > Production Studio <MdKeyboardArrowRight/> </Link> </span>
                 {/* Child Sub menue Links */}
                <ul className='Childsubmenue' id='PSmenue' >
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover'  style={{color:"black"}} to = "/modeling-animation" > Modeling Animation </Link>  </li>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover' style={{color:"black"}} to = "/tv-ads-documentary" > Ads Documentary </Link>  </li>
                  <li className='childmenuelinks'> <Link className='childsubmenutohover'  style={{color:"black"}} to = "/infographics" > Infographics </Link>  </li>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover' style={{color:"black"}} to = "/youtubechannel" > Youtube channel </Link>  </li>
                </ul>

                </li>


                 {/* Child Sub menue */}
                <li className='parentmenuelink' >  <span className='parentmenuelinktag' ><Link className='childsubmenutohover' to="/development-unit" style={{color:"Black"}} > Development Unit <MdKeyboardArrowRight/> </Link> </span>
                 {/* Child Sub menue Links */}
                <ul className='Childsubmenue' id="DUmenue" >
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover'  style={{color:"black"}} to = "/website-development" > Website Development </Link>  </li>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover' style={{color:"black"}} to = "/app-development" > App Development </Link>  </li>
                  <li className='childmenuelinks'> <Link className='childsubmenutohover'  style={{color:"black"}} to = "/architectural-design" > Architectural Design </Link>  </li>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover' style={{color:"black"}} to = "/software-development" > Software Development </Link>  </li>
                </ul>

                </li>

                  {/* Child Sub menue */}
                  <li className='parentmenuelink' >  <span className='parentmenuelinktag' ><Link className='childsubmenutohover' to="/social-digital-media" style={{color:"Black"}} > Social Media Media <MdKeyboardArrowRight/> </Link> </span>
                 {/* Child Sub menue Links */}
                <ul className='Childsubmenue' id='SDMmenue'>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover'  style={{color:"black"}} to = "/digital-media-planning" > Digital Media Planning </Link>  </li>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover' style={{color:"black"}} to = "/social-media-management" > Social Media Management </Link>  </li>
                  <li className='childmenuelinks'> <Link className='childsubmenutohover'  style={{color:"black"}} to = "/seo" > Seo </Link>  </li>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover' style={{color:"black"}} to = "/influencer-marketing" > Influencer Marketing </Link>  </li>
                </ul>

                </li>


                {/* Child Sub menue */}
                <li className='parentmenuelink' >  <span className='parentmenuelinktag' ><Link className='childsubmenutohover' to="/offshore-remote-manpower" style={{color:"Black"}} > Offshore Remote Manpower <MdKeyboardArrowRight/> </Link> </span>
                 {/* Child Sub menue Links */}
                <ul className='Childsubmenue' id='ORMmenue' >

                  <li className='childmenuelinks'> <Link  className='childsubmenutohover'  style={{color:"black"}} to = "/remote-it-office" > Remote IT Office </Link>  </li>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover' style={{color:"black"}} to = "/offshore-manpower" > Offshore Manpower </Link>  </li>
                 
                </ul>

                </li>


                   {/* Child Sub menue */}
                <li className='parentmenuelink' >  <span className='parentmenuelinktag' ><Link className='childsubmenutohover' to="/printing-package" style={{color:"Black"}} > Printing & Packing <MdKeyboardArrowRight/> </Link> </span>
                 {/* Child Sub menue Links */}
                <ul className='Childsubmenue' id='PPmenue' >

                  <li className='childmenuelinks'> <Link  className='childsubmenutohover'  style={{color:"black"}} to = "/printing-large-displays" > Printing Large Displays </Link>  </li>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover' style={{color:"black"}} to = "/packaging-solutions" > Packaging Solutions </Link>  </li>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover'  style={{color:"black"}} to = "/business-products" > Business Products </Link>  </li>
                  <li className='childmenuelinks'> <Link  className='childsubmenutohover' style={{color:"black"}} to = "/Promotional-products" > Promotional Products </Link>  </li>
                 
                </ul>

                </li>



                {/* Child sub menue */}

                <li className='parentmenuelink' >  <span className='parentmenuelinktag' ><Link className='childsubmenutohover' to="/learning-development" style={{color:"Black"}} > Learning Development </Link> </span>     </li>
               
                

          </ul>

      </li> <div className="menuedivider"></div>

      <li className='subnav' >
          <a className='menuelink' href="/strategy">  <Link className='submenuelinkstyle' id='selectedmenue'  to="/strategy"> STRATEGY <MdKeyboardArrowDown/> </Link> </a>

          <ul className='submenue'>
            <li className='submenuelink' >  <Link className='submenuelinkstyle'  to="/spantanic"> Spantanic </Link>  </li>
            <li className='submenuelink' >  <Link className='submenuelinkstyle'  to="/loyatyprogram"> Loyalty Program </Link>  </li>       
          </ul>

      </li> <div className="menuedivider">
      </div>

      <li><a className='menuelink' href=""> <Link className='menuelink' to="/blendedlearning" > BLENDED LEARNING </Link></a></li> <div className="menuedivider"></div>
      <li><a className='menuelink' href=""><Link className='menuelink' to="/aboutcloud" >ADOBE CLOUD</Link> </a></li> <div className="menuedivider"></div>

      <li className='subnav' >
          <a className='menuelink'id='selectedmenue' >  <Link className='submenuelinkstyle'  to="/company" >COMPANY</Link>  <MdKeyboardArrowDown/> </a>
          <ul className='submenue'>
            <li className='submenuelink' >  <Link className='submenuelinkstyle'  to="/aboutus" >About us</Link>  </li>
            <li className='submenuelink' >  <Link className='submenuelinkstyle'  to="/partners" >Partners</Link>  </li>
            <li className='submenuelink' >  <Link className='submenuelinkstyle'  to="/careers" >Careers</Link>   </li>
            <li className='submenuelink' >  <Link className='submenuelinkstyle'  to="/gallary" >Gallery</Link>   </li>
            <li className='submenuelink' >  <Link className='submenuelinkstyle'  to="/casestudy" >Case Study</Link>   </li>
            <li className='submenuelink' >  <Link className='submenuelinkstyle'  to="/contactus" >Contact Us</Link>   </li>
          
          </ul>
      </li> <div className="menuedivider">
      </div>

      <li><a className='menueiconlink' href=""> <FaShoppingCart/> </a></li>
      <li><a className='menueserchicon' href="">  <FiSearch/> </a></li>
    </ul>
  </div>
  
  </div>


    // Small screen header 
:

  <div className='collapseheader' >

      <div className="row">


        <div className="col-6">

          <img src={compnaylogo} alt="" id='collapseheaderimage' className="bgdlogocollapse" />

        </div>



        <div className="col-6">

          <p id='collpsaingbutton' style={{ marginLeft : " 76% " }} >

            <button style={{backgroundColor: "var(--secondary)" , marginLeft:"auto" , border: "1px solid black" , boxShadow: "none" }}  
    
            class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <img src="images/icons8-menu-60.png" style={{height: "24px"}} alt="" />

            </button>

          </p>
  
        </div>


       
        <div class="collapse" id="collapseExample">

            <div class="collapsedmenue">
               
               <ul className='collapsedmainmenue' >

                  <li className='collpased_mainmenue_item' >  <Link  id="linktag_items"   to="/home" >HOME</Link>  </li>

                  <li className='collpased_mainmenue_item'> <span className='submenue_heading'> <Link  id="linktag_items"  to = "/services" > SERVICES </Link>  </span>  <span className='collapsing_icon_menue'  data-bs-toggle="collapse" data-bs-target="#collpased_mainmenue_submenue" aria-expanded="false" aria-controls="collpased_mainmenue_submenue" > {`>`} </span>                                        
                    
                      {/* Sub menue */}
                     <ul id='collpased_mainmenue_submenue' className='collpased_mainmenue_submenue collapse'> 
                      
                        <li className='collpased_mainmenue_submenue_item' >
                          
                        <span className='submenue_heading'> <Link id="linktag_items"  to = "/brandidentity" > Brand Identity </Link></span>  <span className='collapsing_icon_submenue_item' id='bydclick'  data-bs-toggle="collapse" data-bs-target="#collpased_mainmenue_submenue_brandidentity" aria-expanded="false" aria-controls="collpased_mainmenue_submenue_brandidentity" > {`>`} </span>      

                          <ul id='collpased_mainmenue_submenue_brandidentity' className='collpased_mainmenue_submenue_sublist collapse' > 
                        
                            <li className='collpased_mainmenue_submenue_sublist_item' ><Link id="linktag_items"  to = "/creative-communication" > Creative Communication </Link></li>
                            <li className='collpased_mainmenue_submenue_sublist_item' ><Link id="linktag_items"  to = "/brand-promotion" > Brand Promotion </Link></li>
                            <li className='collpased_mainmenue_submenue_sublist_item' ><Link id="linktag_items"  to = "/packaging-design" > packaging Design </Link></li>
                            <li className='collpased_mainmenue_submenue_sublist_item' style={{border:"none"}}  ><Link  id="linktag_items" to = "/content-writing" > Content Writing </Link></li>

                          </ul>

                        </li>   

                        <li className='collpased_mainmenue_submenue_item' >
                          
                          <span className='submenue_heading'> <Link id="linktag_items"  to="/production-studio" > Production Studio </Link> </span>  <span className='collapsing_icon_submenue_item' id='bydclick'  data-bs-toggle="collapse" data-bs-target="#collpased_mainmenue_submenue_production" aria-expanded="false" aria-controls="collpased_mainmenue_submenue_production" > {`>`} </span>      
  
                            <ul id='collpased_mainmenue_submenue_production' className='collpased_mainmenue_submenue_sublist collapse' > 
                          
                              <li className='collpased_mainmenue_submenue_sublist_item' ><Link id="linktag_items"  to = "/modeling-animation" > Modeling Animation </Link></li>
                              <li className='collpased_mainmenue_submenue_sublist_item' ><Link id="linktag_items"  to = "/tv-ads-documentary" > Ads Documentary </Link></li>
                              <li className='collpased_mainmenue_submenue_sublist_item' ><Link id="linktag_items"  to = "/infographics" > Infographics </Link></li>        
                              <li className='collpased_mainmenue_submenue_sublist_item' style={{border:"none"}}  > <Link id="linktag_items"  to = "/youtubechannel" > Youtube channel </Link></li>
  
                            </ul>
  
                        </li> 

                        <li className='collpased_mainmenue_submenue_item' >
                          
                          <span className='submenue_heading'> <Link id="linktag_items"  to="/development-unit" > Development Unit </Link> </span>  <span className='collapsing_icon_submenue_item'  id='bydclick' data-bs-toggle="collapse" data-bs-target="#collpased_mainmenue_submenue_development" aria-expanded="false" aria-controls="collpased_mainmenue_submenue_development" > {`>`} </span>      
  
                            <ul id='collpased_mainmenue_submenue_development' className='collpased_mainmenue_submenue_sublist collapse' > 
                          
                              <li className='collpased_mainmenue_submenue_sublist_item' > <Link  id="linktag_items" to = "/website-development" > Website Development </Link> </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' > <Link  id="linktag_items" to = "/app-development" > App Development </Link> </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' > <Link  id="linktag_items" to = "/architectural-design" > Architectural Design </Link> </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' style={{border:"none"}}  > <Link id="linktag_items"  to = "/software-development" > Software Development </Link> </li>
  
                            </ul>
  
                        </li> 

                        <li className='collpased_mainmenue_submenue_item' >
                          
                          <span className='submenue_heading'> <Link id="linktag_items" to="/social-digital-media" > Social & Digital Media </Link> </span>  <span className='collapsing_icon_submenue_item' id='bydclick'  data-bs-toggle="collapse" data-bs-target="#collpased_mainmenue_submenue_socialmedia" aria-expanded="false"   aria-controls="collpased_mainmenue_submenue_socialmedia" > {`>`} </span>      
  
                            <ul id='collpased_mainmenue_submenue_socialmedia' className='collpased_mainmenue_submenue_sublist collapse' > 
                          
                              <li className='collpased_mainmenue_submenue_sublist_item' ><Link   id="linktag_items"  to = "/digital-media-planning" > Digital Media Planning </Link></li>
                              <li className='collpased_mainmenue_submenue_sublist_item' ><Link   id="linktag_items" to = "/social-media-management" > Social Media Management </Link> </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' ><Link   id="linktag_items"  to = "/seo" > Seo </Link></li>
                              <li className='collpased_mainmenue_submenue_sublist_item' style={{border:"none"}}  > <Link  id="linktag_items" to = "/influencer-marketing" > Influencer Marketing </Link> </li>
  
                            </ul>
  
                        </li> 

                        <li className='collpased_mainmenue_submenue_item' >
                          
                          <span className='submenue_heading'><Link id="linktag_items"  to="/offshore-remote-manpower" > Offshore Remote Manpower </Link> <span className='collapsing_icon_submenue_item' id='bydclick'   data-bs-toggle="collapse" data-bs-target="#collpased_mainmenue_submenue_offshore" aria-expanded="false" aria-controls="collpased_mainmenue_submenue_offshore" > {`>`} </span> </span>      
  
                            <ul id='collpased_mainmenue_submenue_offshore' className='collpased_mainmenue_submenue_sublist collapse' > 
                          
                              <li className='collpased_mainmenue_submenue_sublist_item' ><Link id="linktag_items"  to = "/remote-it-office" > Remote IT Office </Link></li>
                              <li className='collpased_mainmenue_submenue_sublist_item' style={{border:"none"}}  ><Link id="linktag_items"  to = "/offshore-manpower" > Offshore Manpower </Link></li>
  
                            </ul>
  
                        </li> 

                        <li className='collpased_mainmenue_submenue_item' >
                          
                          <span className='submenue_heading'><Link id="linktag_items"  to="/printing-package" > Printing & Packing </Link> </span>  <span className='collapsing_icon_submenue_item' id='bydclick'   data-bs-toggle="collapse" data-bs-target="#collpased_mainmenue_submenue_printing" aria-expanded="false" aria-controls="collpased_mainmenue_submenue_printing" > {`>`} </span>      
  
                            <ul id='collpased_mainmenue_submenue_printing' className='collpased_mainmenue_submenue_sublist collapse' > 
                          
                              <li className='collpased_mainmenue_submenue_sublist_item' > <Link id="linktag_items"  to = "/printing-large-displays" > Printing Large Displays </Link> </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' > <Link id="linktag_items"  to = "/packaging-solutions" > Packaging Solutions </Link> </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' > <Link id="linktag_items"  to = "/business-products" > Business Products </Link> </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' style={{border:"none"}}  ><Link id="linktag_items"  to = "/Promotional-products" > Promotional Products </Link></li>
  
                            </ul>
  
                        </li> 

                    

                        <li className='collpased_mainmenue_submenue_item' style={{border:"none"}} >                          
                          <span className='submenue_heading' style={{border:"none"}} > <Link id="linktag_items"  to="/learning-development" > Learning Development </Link> </span>    
                        </li> 



                     </ul>
                  
                  </li>

                  <li className='collpased_mainmenue_item' >  
                  
                   
                          
                           <span className='submenue_heading'> <Link id="linktag_items"  to="/strategy"> STRATEGY </Link> </span>  <span className='collapsing_icon_submenue_item' id='bydclick'   data-bs-toggle="collapse" data-bs-target="#collpased_mainmenue_submenue_STRATEGYU" aria-expanded="false" aria-controls="collpased_mainmenue_submenue_STRATEGYU" > {`>`} </span>      
  
                            <ul id='collpased_mainmenue_submenue_STRATEGYU' className='collpased_mainmenue_submenue_sublist collapse' > 
                          
                              <li className='collpased_mainmenue_submenue_sublist_item' > <Link id="linktag_items"  to="/spantanic"> Spantanic </Link>  </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' style={{border:"none"}}> <Link id="linktag_items"  to="/loyatyprogram"> Loyalty Program </Link> </li>
  
                            </ul>
  
                  
                  </li>


                  <li className='collpased_mainmenue_item' > <Link id="linktag_items"  to="/blendedlearning" > BLENDED LEARNING </Link> </li>
                  <li className='collpased_mainmenue_item' > <Link id="linktag_items"  to="/aboutcloud" >ADOBE CLOUD</Link> </li>
                  <li className='collpased_mainmenue_item' > 
                  
                  <span className='submenue_heading'> <Link id="linktag_items"  to="/company" >COMPANY</Link>  </span>  <span className='collapsing_icon_submenue_item' id='bydclick'   data-bs-toggle="collapse" data-bs-target="#collpased_mainmenue_submenue_COMPANYY" aria-expanded="false" aria-controls="collpased_mainmenue_submenue_COMPANYY" > {`>`} </span>      
  
                            <ul id='collpased_mainmenue_submenue_COMPANYY' className='collpased_mainmenue_submenue_sublist collapse' > 
                          
                              <li className='collpased_mainmenue_submenue_sublist_item' > <Link id="linktag_items"  to="/aboutus" >About us</Link> </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' > <Link id="linktag_items"  to="/partners" >Partners</Link> </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' > <Link id="linktag_items"  to="/careers" >Careers</Link> </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' > <Link id="linktag_items"  to="/gallary" >Gallery</Link>  </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' > <Link id="linktag_items"  to="/casestudy" >Case Study</Link> </li>
                              <li className='collpased_mainmenue_submenue_sublist_item' style={{border:"none"}}> <Link id="linktag_items"  to="/contactus" >Contact Us</Link> </li>
  
                            </ul>

                  </li>

               </ul>

            </div>

        </div>



      </div>

  </div>
     

}
   
    </div>
  )
}

export default Header