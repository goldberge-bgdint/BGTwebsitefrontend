import React, {useEffect} from "react";
import "./nicepageaboutus.css"
import "./Aboutus.scss"
import "./About.scoped.css"
import {Link} from "react-router-dom"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Aboutbody() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (

    <div>

<div className='blendedslider text-center '>
                <h5 data-aos="fade-up" > ABOUT US </h5>
                <div className="blendedsliderdivider"></div>
                <span data-aos="fade-up"  className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} About Us </span>
</div>

<div className='u-body u-xl-mode' >

    {/* Upper banner */}
  <section className="u-clearfix u-section-1 u-body u-xl-mode" id="sec-09ba">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row"  style={{height: "430px"}}  id='aboutsectionpicture'  >
            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-36 u-layout-cell-1">
              <div className="u-container-layout u-valign-top u-container-layout-1">
                <h3  className="u-text u-text-custom-color-1 u-text-default u-text-1"> Our Story</h3>
                <p  className="u-text u-text-default u-text-2"> What is creativity? Some think it’s being different but we believe it’s being different from your competitors and align with your brand personality.<br />
                  <br />When it comes to creating Digital&nbsp;<a href="https://bgdint.com/brand-identity/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1">Brand Identity</a>, the only problem is to bring the team on one page to speak the same language. This we have done successfully and manage to have&nbsp;<a href="https://bgdint.com/spantik/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-2">experts</a>&nbsp;on-board who are with great success stories and have developed a great piece of coordination. They are leaders in their domain and are together to take your Business GO Digital.<br />
                  <br />Our story based on “We will grow, together.”<br />
                  <br />Our business model is having the&nbsp;<a href="https://bgdint.com/development-unit/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-3">development</a>&nbsp;and&nbsp;<a href="https://bgdint.com/production-studio/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4">production house</a>&nbsp;in Pakistan, and marketing offices around the world, franchisee network in the targeted cities; the company will have to access the customers locally. Our local network approach will benefit us in reaching our customers and understanding the business needs well.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-24 u-layout-cell-2">
              <div className="u-container-layout u-container-layout-2">
                <img className="u-expanded-width u-image u-image-default u-preserve-proportions u-image-1" style={{ height: "253px" , width: "255px" }}  src="/images/outstoryimage.jpg" alt data-image-width={930} data-image-height={910} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p data-aos="fade-up" className="u-text u-text-default u-text-3">
        <span className="u-text-custom-color-1 visiontext ">Vision</span>
      </p>
      <p data-aos="fade-up" className="u-text u-text-default  u-text-4" > Our vision is “To be a trustworthy partner in digital transformation and cloud technology” and we believe business partnerships are more valuable today than ever.<br />
        <br />We contribute international businesses to share their vision and experiences for the ultimate success. Our working approach is straightforward and just in three words: Think—Create—Deliver.
      </p>


      <div className="u-clearfix u-gutter-18 u-layout-wrap u-layout-wrap-2">
        <div className="u-layout">
          <div className="u-layout-row belowvision">
            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-3">
              <div className="u-container-layout u-container-layout-3">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-5"> Corporate Philosophy</p>
                <img className="u-expanded-width u-image u-image-default u-image-2" src="/images/pic1.jpg" alt data-image-width={1024} data-image-height={404} />
                <p className="u-text u-text-default u-text-6"> We believe that understanding our customers’ business approach is the first step<br />
                  <br />.We get an idea of the business models, customers, and other stakeholders before we propose a digital identity plan. To us, it’s not the website or app, graphics, or motion graphics, it’s not about logo or slogan – but it is all about the digital and social identity of the business that must fulfill the promises the company makes.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-4">
              <div className="u-container-layout u-container-layout-4">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-7"> Values, we believe in</p>
                <img className="u-expanded-width u-image u-image-default u-image-3" src="/images/jesus-kiteque-wn-KYaHwcis-unsplash-e1603899467240.jpg" alt data-image-width={1024} data-image-height={404} />
                <p className="u-text u-text-8"> We believe that understanding our customers’ business approach is the first step<br />
                  <br />.We get an idea of the business models, customers, and other stakeholders before we propose a digital identity plan. To us, it’s not the website or app, graphics, or motion graphics, it’s not about logo or slogan – but it is all about the digital and social identity of the business that must fulfill the promises the company makes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="u-clearfix u-layout-wrap u-layout-wrap-3">
        <div className="u-layout">
          <div className="u-layout-row">
            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-20 u-layout-cell-5" id = 'connecting_people' >
              <div className="u-container-layout u-container-layout-5"><span className="u-icon u-text-palette-1-base u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 55 55" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-e19b" /></svg><svg className="u-svg-content" viewBox="0 0 55 55" x="0px" y="0px" id="svg-e19b" style={{enableBackground: 'new 0 0 55 55'}}><path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752
	c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348
	c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98
	c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033
	c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55
	c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287
	c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104
	c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1
	c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764
	l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5
	c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957
	c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545
	c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8
	s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545
	c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313
	c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735
	c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167
	c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552
	c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01
	c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53
	c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233
	c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04
	c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816
	c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279
	c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313
	c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221
	c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131
	c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466
	c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545
	c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949
	l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083
	C42.677,47.979,42.567,48.054,42.459,48.132z" /></svg></span>
                <p className="boldertext2 u-text u-text-custom-color-1 u-text-default u-text-9"> Connecting the World</p>
                <p className="u-text u-text-10"> We just don’t deliver the projects but connect our customers with their customers.</p>
              </div>
            </div>
            <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-20 u-layout-cell-6" id = "investing_people" >
              <div className="u-container-layout u-container-layout-6"><span className="u-icon u-text-palette-1-base u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 55 55" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-0809" /></svg><svg className="u-svg-content" viewBox="0 0 55 55" x="0px" y="0px" id="svg-0809" style={{enableBackground: 'new 0 0 55 55'}}><path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752
	c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348
	c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98
	c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033
	c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55
	c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287
	c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104
	c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1
	c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764
	l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5
	c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957
	c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545
	c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8
	s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545
	c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313
	c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735
	c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167
	c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552
	c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01
	c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53
	c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233
	c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04
	c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816
	c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279
	c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313
	c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221
	c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131
	c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466
	c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545
	c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949
	l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083
	C42.677,47.979,42.567,48.054,42.459,48.132z" /></svg></span>
                <p className="boldertext2 u-text u-text-custom-color-1 u-text-default u-text-11"> Investing in People</p>
                <p className="u-text u-text-12"> Advance knowledge, hands-on experience, global exposure, and a professional environment, that all we provide</p>
              </div>
            </div>
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-20 u-layout-cell-7">
              <div className="u-container-layout u-container-layout-7">
                <p className="boldertext2 u-text u-text-custom-color-1 u-text-default u-text-13">Global Talent, Local Delivery </p><span className="u-icon u-text-palette-1-base u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 55 55" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-7c47" /></svg><svg className="u-svg-content" viewBox="0 0 55 55" x="0px" y="0px" id="svg-7c47" style={{enableBackground: 'new 0 0 55 55'}}><path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752
	c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348
	c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98
	c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033
	c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55
	c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287
	c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104
	c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1
	c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764
	l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5
	c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957
	c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545
	c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8
	s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545
	c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313
	c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735
	c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167
	c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552
	c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01
	c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53
	c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233
	c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04
	c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816
	c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279
	c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313
	c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221
	c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131
	c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466
	c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545
	c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949
	l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083
	C42.677,47.979,42.567,48.054,42.459,48.132z" /></svg></span>
                <p className="u-text u-text-14"> We bring together resources required for job success, align them in our models, and promise a great job.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="lowersideabout">

      <p className="u-text u-text-default u-text-15"> Some Facts about&nbsp;<a className="dual-link u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-5" href="https://bgdint.com/" title="Business Go Digital">Business GO Digital</a>
      </p>
      <div className="u-clearfix u-layout-wrap u-layout-wrap-4">
        <div className="u-layout">
          <div className="u-layout-row">

            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-12 u-layout-cell-8">
              <div className="u-container-layout u-container-layout-8"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-4"><img src="/images/889114-db7d6efd.png" alt /></span>
                <p className="u-text u-text-default u-text-16"> Established in 2016</p>
              </div>
            </div>

            <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-12 u-layout-cell-8">
              <div className="u-container-layout u-container-layout-8"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-4"><img src="/images/52349-3a9cbd23.png" alt /></span>
                <p className="u-text u-text-default u-text-16"> Operational in 08 Regions </p>
              </div>
            </div>
            
            <div data-aos="fade-up"className="u-container-style u-layout-cell u-size-12 u-layout-cell-8">
              <div className="u-container-layout u-container-layout-8"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-4"><img src="/images/860762-e6c9e911.png" alt /></span>
                <p className="u-text u-text-default u-text-16">Headquarters in Saudi Arabia</p>
              </div>
            </div>

            <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-12 u-layout-cell-8">
              <div className="u-container-layout u-container-layout-8"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-4"><img src="/images/727245-4b71f9a8.png" alt /></span>
                <p className="u-text u-text-default u-text-16"> Speaks 10 Languages</p>
              </div>
            </div>

            
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-12 u-layout-cell-8">
              <div className="u-container-layout u-container-layout-8"><span className="u-file-icon u-icon u-text-custom-color-1 u-icon-4"><img src="/images/4207230-5aeede79.png" alt /></span>
                <p className="u-text u-text-default u-text-16"> Global Franchise Network</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <h3  data-aos="fade-up" className="u-text meetledersheading u-text-custom-color-1 u-text-default u-text-21"> Meet our Leaders</h3>
      <div data-aos="fade-up" className="u-clearfix u-layout-wrap u-layout-wrap-5">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-13 mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-13">
                <img className="u-image u-image-default u-image-4" src="/images/Sir-Khan-3.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-22"> Siddiq Ahmad Khan</p>
                <p className="u-text u-text-default u-text-23"> Chief Executive Officer</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-14  mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-14">
                <img className="u-image u-image-default u-image-5" src="/images/pexels-jad-el-mourad-7756862.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-24"> Sulaika Ali Abdullah</p>
                <p className="u-text u-text-default u-text-25"> Chief Human Resources Officer</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-15  mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-15">
                <img className="u-image u-image-default u-image-6" src="/images/Sir-Shahzad-2.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-26"> Shahzad Anwar</p>
                <p className="u-text u-text-default u-text-27"> Chief Operating Officer</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-16  mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-16">
                <img className="u-image u-image-default u-image-7" src="/images/Sir-Sameer-2.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-28"> Sameer Mohyuddin</p>
                <p className="u-text u-text-default u-text-29"> Chief Learning Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="u-clearfix u-layout-wrap u-layout-wrap-6">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-17 mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-17">
                <img className="u-image u-image-default u-image-8" src="/images/Muhammad-Atif-Altaf-2.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-30"> Muhammad Atif Altaf</p>
                <p className="u-text u-text-default u-text-31"> Regional Manager Canada</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-18 mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-18">
                <img className="u-image u-image-default u-image-9" src="/images/RM.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-32"> Ibtesam Moatisim Khan</p>
                <p className="u-text u-text-default u-text-33"> Regional Manager Pakistan</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-19 mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-19">
                <img className="u-image u-image-default u-image-10" src="/images/Sir-Usman-Ali-2.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-34"> Usman Ali</p>
                <p className="u-text u-text-default u-text-35"> Quality Assurance Advisor</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-layout-cell-20 mt-md-0 mt-4 ">
              <div className="u-container-layout u-container-layout-20">
                <img className="u-image u-image-default u-image-11" src="/images/Sir-Jun-1.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-36"> Jun</p>
                <p className="u-text u-text-default u-text-37"> Animation Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="u-clearfix u-layout-wrap u-layout-wrap-7">
        <div className="u-layout">
          <div className="u-layout-row" id='jamilsection' >
            <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-21 mt-md-0 mt-4">
              <div className="u-container-layout u-container-layout-21">
                <img className="u-image u-image-default u-image-12" src="/images/Sir-Jamil-2.jpg" alt data-image-width={300} data-image-height={396} />
                <p className="u-text u-text-custom-color-1 u-text-default u-text-38"> Muhammad Jamil</p>
                <p className="u-text u-text-default u-text-39"> Leads Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-clearfix u-layout-wrap u-layout-wrap-8">
        <div className="u-layout">
          <div className="u-layout-row">
            <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-41 u-layout-cell-22">
              <div className="u-container-layout u-container-layout-22">
                <p className="u-text u-text-custom-color-1 u-text-default u-text-40"> Our Commitment towards Environment &amp; Society</p>
                <p className="u-text u-text-default u-text-41"> Our commitment to the laws, regulations, and policy concerning environmental issues is our priority and visible when we aim at transforming the business environment into a digital one. We take care of our surroundings, our people, their physical and mental health, and the society we live in. This world is our home and efforts towards protecting the environment will ensure a better home for our generations.<br />
                  <br />We are also part of the 10 Billion Tree Tsunami Pakistan,&nbsp;a five-year project to plant&nbsp;10 billion trees&nbsp;across&nbsp;Pakistan&nbsp;from 2018 to 2023 and contribute to plantation occasionally to promise healthy air for our young kids.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-19 u-layout-cell-23">
              <div className="u-container-layout u-container-layout-23">
                <img className="u-expanded-width u-image u-image-default u-image-13" src="/images/pexels-porapak-apichodilok-346885.jpg" alt data-image-width={640} data-image-height={426} />
              </div>
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



export default Aboutbody