import React from 'react'
import "./testimonial.js"
import "./Testimonial.scoped.css"
import { BsFillChatQuoteFill } from "@react-icons/all-files/bs/BsFillChatQuoteFill";

function Testimonialslider() {

    

  return (
    <div>

  <div className="testimonial-area">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="section-header text-center">
          <h4>Testimonials</h4>
          <h2>WHAT CUSTOMERS SAY ABOUT US</h2>

        </div>
      </div>
      <div className="col-sm-12">
        <div className="carousel slide" data-bs-ride="true" id="carouselExampleIndicators">
          <div className="carousel-indicators">
            <button aria-label="Slide 1" className="active" data-bs-slide-to={0} data-bs-target="#carouselExampleIndicators" type="button" /> <button aria-label="Slide 2" data-bs-slide-to={1} data-bs-target="#carouselExampleIndicators" type="button" /> <button aria-label="Slide 3" data-bs-slide-to={2} data-bs-target="#carouselExampleIndicators" type="button" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="icon-area">
               <BsFillChatQuoteFill/>
              </div>
              <div className="content text-center">
                <p>This website is for the in-house wing; it was straightforward, quick, and desirable, and to the point. The corporate identity, which is a logo and the color scheme is very impressive, and specially design of our profile was deferent and eye-catching.</p>
                <div className="person"><img alt src="images/dnd.png" /></div>
                <h5>Abel</h5>
                <h6>DesnDev</h6>
              </div>
            </div>
            <div className="carousel-item">
              <div className="icon-area">
                <i className="fa fa-comments" />
              </div>
              <div className="content text-center">
                <p>We are a fiber optics cable, a passive material manufacturing company. We need a website not to sell online but to have an online technical datasheets product catalog and related information. Thank u bgd they made it possible to have a simple, life rate website that serves its purpose.</p>
                <div className="person"><img alt src="rougil.png" /></div>
                <h5>Umme Abdullah</h5>
                <h6>Rougil</h6>
              </div>
            </div>
            <div className="carousel-item">
              <div className="icon-area">
                <i className="fa fa-comments" />
              </div>
              <div className="content text-center">
                <p>We want to launch this website in Pakistan and Saudi Arabia; we hire to be an online employment platform, a very affordable cost we manage to start with. We are young entrepreneurs. We believe this website will take its natural time and be famous in both markets because we offer some unique features, and the layout of the website is straightforward to handle. The admin panel is also easy to use.</p>
                <div className="person"><img alt src="wehire.png" /></div>
                <h5>Bilal Ahmed</h5>
                <h6>We Hire</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        
    </div>
  )
}

export default Testimonialslider