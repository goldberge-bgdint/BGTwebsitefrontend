import React, {useEffect} from "react";
import "./nicepage.scoped.css"
import "./seo.scoped.css"
import Comparisontable from '../../../../components/Table/Comparisontable'
import { Link } from 'react-router-dom'
import { Contentmaretingdata } from './Comparisonsdata/Contentmareting'
import { conversiontracking_Data } from './Comparisonsdata/CONVERSIONTRACKING'
import { minimumsecond_data } from './Comparisonsdata/MINIMUMSEOCONTRACTPERIOD'
import { socialmediamarketing_Data } from './Comparisonsdata/socialmediamarketing'
import { videomarketing_data } from './Comparisonsdata/videomarketing'
import { localsearchengine_data } from './Comparisonsdata/localsearchengine'
import { costbreakup_data } from './Comparisonsdata/costbreakup'

// exommerceSEo

import { table1st_Data } from './ecommerceseo/1sttable'
import { conversiontrackingecommerce_Data } from './ecommerceseo/conversiontrackingecommerce'
import { contentmarketingandbuilding_data } from './ecommerceseo/contentmarketingandbuilding'
import { videomarketingpmonth_data } from './ecommerceseo/videomarketingpmonth'
import { costbreakupecommerce_data } from './ecommerceseo/costbreakupecommerce'
import { useState } from 'react'

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";


function Seo() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  let [priceplanheight , setpriceplanheight] = useState ("priceplans2")
 
  return (
    <div>

        <div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > SEO </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} SEO </span>
        </div>   

        <div className="Seolowerpart u-body u-xl-mode">

     <section className="u-clearfix u-section-1" id="sec-f044">
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-expanded-width u-group u-group-1">
      <div className="u-container-layout u-container-layout-1">
        <h4 data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-default u-text-1"> Search Engine Optimization</h4>
        <p data-aos="fade-up" className="u-text u-text-default u-text-2"> BDG is one of the best companies that provide high-quality SEO services in Pakistan, Saudi Arabia, Europe, and around the globe. We use the most current SEO marketing methods that would help your company to increase its traffic and also to increase its online sales. We provide the most advance online marketing SEO services, including display advertising such as Google, Yahoo, and Bing network ads. We also offer the best SMM services, such as Facebook, IMO, TikTok, and Linkedin Ads. We have a team of experienced, gifted digital marketers who will lead the brand to reach the highest rank possible in the search engine results. We promise more traffic, visibility, visitors, and business leads to generate more revenue. Our contribution will result in brand awareness, business growth as a part of the modern digital marketing campaign. Furthermore, organic search engine marketing is a great way to increase and improve your website quality by making it easier for visitors. We offer site audits, keyword search, improved user experience, content writing, and link build strategy.</p>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right"  className="u-align-center u-container-style u-layout-cell u-size-15 u-layout-cell-1">
            <div className="u-container-layout u-valign-top u-container-layout-2">
              <img className="u-image u-image-default u-preserve-proportions u-image-1" src="images/www.png" alt data-image-width={128} data-image-height={128} />
              <h5 className="u-text u-text-custom-color-1 u-text-3"> Keyword Research &amp; Strategy</h5>
              <p className="u-text u-text-4"> We understand your niche and can boost your ranking for specific search terms. We take your keyword and conduct keyword research to have a competitive advantage.</p>
            </div>
          </div>
          <div data-aos="fade-up"  className="u-align-center u-container-style u-layout-cell u-size-15 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-3">
              <img className="u-image u-image-default u-preserve-proportions u-image-2" src="images/online-shopping-1.png" alt data-image-width={128} data-image-height={128} />
              <h5 className="u-text u-text-custom-color-1 u-text-5"> Local, Technical, eCommerce SEO</h5>
              <p className="u-text u-text-6"> We optimize Amazon product listings while 64% of customers search local businesses. optimize the website’s back-end, to improve page speed.</p>
            </div>
          </div>
          <div  data-aos="fade-up" className="u-align-center u-container-style u-layout-cell u-size-15 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-4">
              <img className="u-image u-image-default u-preserve-proportions u-image-3" src="images/search-engine-optimization.png" alt data-image-width={128} data-image-height={128} />
              <h5 className="u-text u-text-custom-color-1 u-text-7"> Off-Page SEO, On-Page SEO, CRO</h5>
              <p className="u-text u-text-8"> Off-page optimization is crucial in establishing brand credibility. Enhance brand online visibility and earn high-quality traffic and increase online exposure.</p>
            </div>
          </div>
          <div data-aos="fade-left"  className="u-align-center u-container-style u-layout-cell u-size-15 u-layout-cell-4">
            <div className="u-container-layout u-container-layout-5">
              <img className="u-image u-image-default u-preserve-proportions u-image-4" src="images/www.png" alt data-image-width={128} data-image-height={128} />
              <h5 className="u-text u-text-custom-color-1 u-text-9"> Professional &amp; Transparent Reporting</h5>
              <p className="u-text u-text-10"> We don’t use smoke and mirrors but maintain transparency in reporting to reflect an increase in your online revenue. Our reporting includes Google Analytics reports, SEO performance, and rankings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row">
          <div data-aos="fade-right" className="u-size-30">
            <div className="u-layout-col">
              <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-5">
                <div className="u-container-layout u-container-layout-6">
                  <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-5" src="images/pexels-salvatore-ventura-883757.jpg" alt data-image-width={960} data-image-height={960} />
                  <p className="u-text u-text-11"> The strategy we use<br />
                    <br />We will develop an efficient link building strategy to generate more quality links to your website from authoritative popular related websites, blogs, and business directories to rank higher in targeted search results. We follow search engines frequently and put the information gathered for on-page and off-page SEO services to make your pages jump to the first page in no time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="u-size-30">
            <div className="u-layout-col">
              <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-6">
                <div className="u-container-layout u-container-layout-7">
                  <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-6" src="images/pexels-nick-bondarev-4591806-1.jpg" alt data-image-width={960} data-image-height={960} />
                  <p className="u-text u-text-12"> Don't Take a Risk<br />
                    <br />Use sustainable methods to build organic rankings, attract lots of natural links, and boost website traffic. You can’t take a risk of hiring a company that doesn’t understand your business, products, customers, target market, marketing planning, segmentation, and positioning. It’s all about how well the plan is made, the results will be exceeding expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <h5 className='text-center my-4 ' style={{color:"var(--primary)"}} > Click to find our monthly SEO plans that suits your business </h5> */}

  <div data-aos="fade-up" className={priceplanheight}>



  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab"  onClick={()=>{ setpriceplanheight("priceplans1") }} aria-controls="pills-home" aria-selected="true">Nationl SEO</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" onClick={()=>{ setpriceplanheight("priceplans2") }} aria-selected="false">Local SEO</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"  onClick={()=>{ setpriceplanheight("priceplan3") }} aria-selected="false">Ecommerce SEO</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">


    {/* National SEO */}


<div class="snip1214">
  <div class="plan">
    <h3 class="plan-title">
    STARTER
    </h3>
    <div class="plan-cost"><span class="plan-price">$375</span><span class="plan-type">/ Per Month </span></div>
    <ul class="plan-features">
      <li><i class="ion-checkmark"> </i> Total Keywords: 25 </li>
      <li><i class="ion-checkmark"> </i> On-Page Optimization </li>
      <li><i class="ion-checkmark"> </i> Content Marketing </li>
      <li><i class="ion-checkmark"> </i> Link Building </li>
      <li><i class="ion-checkmark"> </i> Social Media Marketing </li>
      <li><i class="ion-checkmark"> </i> Local Search Optimization </li>
    </ul>
    <div class="plan-select"><a href="">Buy Now</a></div>
  </div>
  <div class="plan">
    <h3 class="plan-title">
    BRONZE
    </h3>
    <div class="plan-cost"><span class="plan-price"> $625 </span><span class="plan-type">/ Per Month </span></div>
    <ul class="plan-features">
      <li><i class="ion-checkmark"> </i> Total Keywords: 40 </li>
      <li><i class="ion-checkmark"> </i>On-Page Optimization </li>
      <li><i class="ion-checkmark"> </i> Content Marketing </li>
      <li><i class="ion-checkmark"> </i>  Link Building </li>
      <li><i class="ion-checkmark"> </i>Social Media Marketing</li>
      <li><i class="ion-checkmark"> </i>Video Marketing</li>
      <li><i class="ion-checkmark"> </i>Local Search Optimization </li>
    </ul>
    <div class="plan-select"><a href="">Buy Now</a></div>
  </div>
  <div class="plan featured">
    <h3 class="plan-title">
    SILVER
    </h3>
    <div class="plan-cost"><span class="plan-price">$749</span><span class="plan-type">/ Per Month </span></div>
    <ul class="plan-features">
      <li><i class="ion-checkmark"> </i>Total Keywords: 70</li>
      <li><i class="ion-checkmark"> </i>On-Page Optimization</li>
      <li><i class="ion-checkmark"> </i>Content Marketing</li>
      <li><i class="ion-checkmark"> </i>Link Building</li>
      <li><i class="ion-checkmark"> </i>Social Media Marketing</li>
      <li><i class="ion-checkmark"> </i>Video Marketing</li>
      <li><i class="ion-checkmark"> </i>Local Search Optimization</li>
    </ul>
    <div class="plan-select"><a href="">Buy Now</a></div>
  </div>
  <div class="plan">
    <h3 class="plan-title">
    Gold
    </h3>
    <div class="plan-cost"><span class="plan-price">$1,059</span><span class="plan-type">/ Per Month </span></div>
    <ul class="plan-features">
      <li><i class="ion-checkmark"> </i>Total Keywords: 100</li>
      <li><i class="ion-checkmark"> </i>On-Page Optimization</li>
      <li><i class="ion-checkmark"> </i>Content Marketing</li>
      <li><i class="ion-checkmark"> </i>Link Building</li>
      <li><i class="ion-checkmark"> </i>Social Media Marketing</li>
      <li><i class="ion-checkmark"> </i>Video Marketing</li>
      <li><i class="ion-checkmark"> </i>Local Search Optimization</li>
    </ul>
    <div class="plan-select"><a href="">Buy Now</a></div>
  </div>
  <div class="plan">
    <h3 class="plan-title">
    PLATINUM
    </h3>
    <div class="plan-cost"><span class="plan-price">$1,499</span><span class="plan-type">/ Per Month </span></div>
    <ul class="plan-features">
      <li><i class="ion-checkmark"> </i> Total Keywords: 160 </li>
      <li><i class="ion-checkmark"> </i>On-Page Optimization</li>
      <li><i class="ion-checkmark"> </i>Content Marketing</li>
      <li><i class="ion-checkmark"> </i>Link Building</li>
      <li><i class="ion-checkmark"> </i> Social Media Marketing</li>
      <li><i class="ion-checkmark"> </i>Video Marketing</li>
      <li><i class="ion-checkmark"> </i>Local Search Optimization</li>
    </ul>
    <div class="plan-select"><a href="">Buy Now</a></div>
  </div>

  
</div>






  </div>

  


  <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">


      {/* Local SEO */}


      
<div class="snip1214" id='LocalSEO' >
 
  <div class="plan">
    <h3 class="plan-title">
    BRONZE
    </h3>
    <div class="plan-cost"><span class="plan-price"> $310 </span><span class="plan-type">/ Per Month </span></div>
    <ul class="plan-features">
      <li><i class="ion-checkmark"> </i> Local SEO Audit , Keywords Research </li>
      <li><i class="ion-checkmark"> </i> Competitive Analysis , 10 Keywords </li>
      <li><i class="ion-checkmark"> </i> Up to 1 Location , Onpage Optimization </li>
      <li><i class="ion-checkmark"> </i> Video , Service Area Landing Pages </li>
      <li><i class="ion-checkmark"> </i> Google My Business Optimization & Monitoring</li>
      <li><i class="ion-checkmark"> </i> Google Search Console Setup and Maintenance</li>
      <li><i class="ion-checkmark"> </i> 1 Map Stack per Month </li>
      <li><i class="ion-checkmark"> </i> 50+ Google Map Embeds per Month </li>
      <li><i class="ion-checkmark"> </i> Bing, Apple & Facebook Listings </li>
      <li><i class="ion-checkmark"> </i> 5 Primary & Secondary Citations per Month </li>
      <li><i class="ion-checkmark"> </i> 2 GPS & 2 Q&A listings per Month </li>
      <li><i class="ion-checkmark"> </i> 2 Geo Tagged Photo Submissions per Month </li>
      <li><i class="ion-checkmark"> </i> Social Essentials Accounts and 3 publications per month </li>
      <li><i class="ion-checkmark"> </i> 1 Premium Local Press Release per Month </li>
      <li><i class="ion-checkmark"> </i> 4 GMB, 1 Guest & 1 Blog Posts per Month </li>
      <li><i class="ion-checkmark"> </i> Yelp Optimization </li>
      <li><i class="ion-checkmark"> </i> Citysearch Optimization </li>
    </ul>
    <div class="plan-select"><a href="">Buy Now</a></div>
  </div>


  <div class="plan featured">
    <h3 class="plan-title">
    SILVER
    </h3>
    <div class="plan-cost"><span class="plan-price">$560</span><span class="plan-type">/ Per Month </span></div>
    <ul class="plan-features">
       <li><i class="ion-checkmark"> </i> Local SEO Audit , Keywords Research </li>
      <li><i class="ion-checkmark"> </i> Competitive Analysis , 20 Keywords </li>
      <li><i class="ion-checkmark"> </i> Up to 2 Location , Onpage Optimization </li>
      <li><i class="ion-checkmark"> </i> Video , Service Area Landing Pages </li>
      <li><i class="ion-checkmark"> </i> Google My Business Optimization & Monitoring</li>
      <li><i class="ion-checkmark"> </i> Google Search Console Setup and Maintenance</li>
      <li><i class="ion-checkmark"> </i> 2 Map Stack per Month </li>
      <li><i class="ion-checkmark"> </i> 100+ Google Map Embeds per Month </li>
      <li><i class="ion-checkmark"> </i> Bing, Apple & Facebook Listings </li>
      <li><i class="ion-checkmark"> </i> 5 Primary & Secondary Citations per Month </li>
      <li><i class="ion-checkmark"> </i> 5 GPS & 3 Q&A listings per Month </li>
      <li><i class="ion-checkmark"> </i> 5 Geo Tagged Photo Submissions per Month </li>
      <li><i class="ion-checkmark"> </i> Social Essentials Accounts and 4 publications per month </li>
      <li><i class="ion-checkmark"> </i> 1 Premium Local Press Release per Month </li>
      <li><i class="ion-checkmark"> </i> 8 GMB, 2 Guest & 2 Blog Posts per Month </li>
      <li><i class="ion-checkmark"> </i> Yelp Optimization </li>
      <li><i class="ion-checkmark"> </i> Citysearch Optimization </li>
    </ul>
    <div class="plan-select"><a href="">Buy Now</a></div>
  </div>


  <div class="plan">
    <h3 class="plan-title">
    Gold
    </h3>
    <div class="plan-cost"><span class="plan-price">$750</span><span class="plan-type">/ Per Month </span></div>
    <ul class="plan-features">
    <li><i class="ion-checkmark"> </i> Local SEO Audit , Keywords Research </li>
      <li><i class="ion-checkmark"> </i> Competitive Analysis , 30 Keywords </li>
      <li><i class="ion-checkmark"> </i> Up to 3 Location , Onpage Optimization </li>
      <li><i class="ion-checkmark"> </i> Video , Service Area Landing Pages </li>
      <li><i class="ion-checkmark"> </i> Google My Business Optimization & Monitoring</li>
      <li><i class="ion-checkmark"> </i> Google Search Console Setup and Maintenance</li>
      <li><i class="ion-checkmark"> </i> 3 Map Stack per Month </li>
      <li><i class="ion-checkmark"> </i> 200+ Google Map Embeds per Month </li>
      <li><i class="ion-checkmark"> </i> Bing, Apple & Facebook Listings </li>
      <li><i class="ion-checkmark"> </i> 10 Primary & Secondary Citations per Month </li>
      <li><i class="ion-checkmark"> </i> 5 GPS & 10 Q&A listings per Month </li>
      <li><i class="ion-checkmark"> </i> 10 Geo Tagged Photo Submissions per Month </li>
      <li><i class="ion-checkmark"> </i> Social Essentials Accounts and 4 publications per month </li>
      <li><i class="ion-checkmark"> </i> 2 Premium Local Press Release per Month </li>
      <li><i class="ion-checkmark"> </i> 8 GMB, 3 Guest & 3 Blog Posts per Month </li>
      <li><i class="ion-checkmark"> </i> Yelp Optimization </li>
      <li><i class="ion-checkmark"> </i> Citysearch Optimization </li>
    </ul>
    <div class="plan-select"><a href="">Buy Now</a></div>
  </div>
 

  
</div>



  </div>

  <div class="tab-pane fade thirdpriceplan" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

    <Comparisontable heading={""} data={table1st_Data[1]} columns={table1st_Data[0]} />
    <Comparisontable heading={"Conversion Tracking"} data={conversiontrackingecommerce_Data[1]} columns={conversiontrackingecommerce_Data[0]} />
    <Comparisontable heading={"Content Marketing & Link Building (per month)"} data={contentmarketingandbuilding_data[1]} columns={contentmarketingandbuilding_data[0]} />
    <Comparisontable heading={"Video Marketing (per month)"} data={videomarketingpmonth_data[1]} columns={videomarketingpmonth_data[0]} />
    <Comparisontable heading={"Cost Breakup"} data={costbreakupecommerce_data[1]} columns={costbreakupecommerce_data[0]} />



  </div>
  
</div>

</div>


<div data-aos="fade-up" className="packagesComparison text-center d-block">

  <h6>Compare Plan Suitable for Your Business!</h6>

  <Comparisontable heading={"MINIMUM SEO CONTRACT PERIOD: MONTH TO MONTH"} data={minimumsecond_data[1]} columns={minimumsecond_data[0]} />

  <Comparisontable heading={"CONVERSION TRACKING"} data={conversiontracking_Data[1]} columns={conversiontracking_Data[0]} />

  <Comparisontable heading={"CONTENT MARKETING AND LINK ACQUISITION"} data={Contentmaretingdata[1]} columns={Contentmaretingdata[0]} />
  
  <Comparisontable heading={"SOCIAL MEDIA MARKETING"} data={socialmediamarketing_Data[1]} columns={socialmediamarketing_Data[0]} /> 
 
  <Comparisontable heading={"VIDEO MARKETING"} data={videomarketing_data[1]} columns={videomarketing_data[0]} />
  
  <Comparisontable heading={"LOCAL SEARCH OPTIMIZATION"} data={localsearchengine_data[1]} columns={localsearchengine_data[0]} />
  
  <Comparisontable heading={"COST BREAKUP"} data={costbreakup_data[1]} columns={costbreakup_data[0]} />
    
</div>


</section>


        </div>



    </div>
  )
}

export default Seo