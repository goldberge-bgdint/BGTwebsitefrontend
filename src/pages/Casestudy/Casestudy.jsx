import React, {useEffect} from "react";
import "./Casestudy.scss"
import Casestudycard from '../../components/Cards/Casestudycard/Casestudycard'
import {Link} from "react-router-dom"

// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Casestudy() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

    let casestudies= [
        {
          image:"https://bgdint.com/wp-content/uploads/2017/11/digital-branding.jpg",
          heading :"DIGITAL BRANDING AND FUTURE OF PAKISTAN",
          author: "Taha",
          cetagory : "News",
          created_at : "November 27 ,2019",
          comments : 0,
          content : "The future of Pakistani’s digital branding efforts is looking bright and confident. In the past few years, especially, Pakistani marketers have seen great strides in advancing the field of digital branding by the introduction of a massive influx of new startup digital marketing agencies. The message here is that digital branding in technology inspires innovation and success among brands. Success begins with a good plan. A good idea, in turn, starts with reliable research to understand which solutions might offer the best outcomes for your specific challenges. Many people are reluctant to spend the time on a digital plan and strategy thinking that the digital world is so fast-moving that the minute you settle on an approach, things will change. It’s the opposite; the more thought out your marketing strategy, the more you’ll be able to roll with the punches. In our opinion, the need for research and plan is more necessary than ever in a classic business model. The virtual world is more demanding and uncertain, and only a great program can help an entrepreneur to be successful.",
          tags : [
            { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
            { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
            { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
            { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
        ]
        },
        {
            image:"https://bgdint.com/wp-content/uploads/2017/11/digital-branding.jpg",
            heading :"DIGITAL BRANDING AND FUTURE OF PAKISTAN",
            author: "Taha",
            cetagory : "News",
            created_at : "November 27 ,2019",
            comments : 0,
            content : "The future of Pakistani’s digital branding efforts is looking bright and confident. In the past few years, especially, Pakistani marketers have seen great strides in advancing the field of digital branding by the introduction of a massive influx of new startup digital marketing agencies. The message here is that digital branding in technology inspires innovation and success among brands. Success begins with a good plan. A good idea, in turn, starts with reliable research to understand which solutions might offer the best outcomes for your specific challenges. Many people are reluctant to spend the time on a digital plan and strategy thinking that the digital world is so fast-moving that the minute you settle on an approach, things will change. It’s the opposite; the more thought out your marketing strategy, the more you’ll be able to roll with the punches. In our opinion, the need for research and plan is more necessary than ever in a classic business model. The virtual world is more demanding and uncertain, and only a great program can help an entrepreneur to be successful.",
            tags : [
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
          ]
          },
          {
            image:"https://bgdint.com/wp-content/uploads/2017/11/digital-branding.jpg",
            heading :"DIGITAL BRANDING AND FUTURE OF PAKISTAN",
            author: "Taha",
            cetagory : "News",
            created_at : "November 27 ,2019",
            comments : 0,
            content : "The future of Pakistani’s digital branding efforts is looking bright and confident. In the past few years, especially, Pakistani marketers have seen great strides in advancing the field of digital branding by the introduction of a massive influx of new startup digital marketing agencies. The message here is that digital branding in technology inspires innovation and success among brands. Success begins with a good plan. A good idea, in turn, starts with reliable research to understand which solutions might offer the best outcomes for your specific challenges. Many people are reluctant to spend the time on a digital plan and strategy thinking that the digital world is so fast-moving that the minute you settle on an approach, things will change. It’s the opposite; the more thought out your marketing strategy, the more you’ll be able to roll with the punches. In our opinion, the need for research and plan is more necessary than ever in a classic business model. The virtual world is more demanding and uncertain, and only a great program can help an entrepreneur to be successful.",
            tags : [
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
          ]
          },
          {
            image:"https://bgdint.com/wp-content/uploads/2017/11/digital-branding.jpg",
            heading :"DIGITAL BRANDING AND FUTURE OF PAKISTAN",
            author: "Taha",
            cetagory : "News",
            created_at : "November 27 ,2019",
            comments : 0,
            content : "The future of Pakistani’s digital branding efforts is looking bright and confident. In the past few years, especially, Pakistani marketers have seen great strides in advancing the field of digital branding by the introduction of a massive influx of new startup digital marketing agencies. The message here is that digital branding in technology inspires innovation and success among brands. Success begins with a good plan. A good idea, in turn, starts with reliable research to understand which solutions might offer the best outcomes for your specific challenges. Many people are reluctant to spend the time on a digital plan and strategy thinking that the digital world is so fast-moving that the minute you settle on an approach, things will change. It’s the opposite; the more thought out your marketing strategy, the more you’ll be able to roll with the punches. In our opinion, the need for research and plan is more necessary than ever in a classic business model. The virtual world is more demanding and uncertain, and only a great program can help an entrepreneur to be successful.",
            tags : [
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
          ]
          },
          {
            image:"https://bgdint.com/wp-content/uploads/2017/11/digital-branding.jpg",
            heading :"DIGITAL BRANDING AND FUTURE OF PAKISTAN",
            author: "Taha",
            cetagory : "News",
            created_at : "November 27 ,2019",
            comments : 0,
            content : "The future of Pakistani’s digital branding efforts is looking bright and confident. In the past few years, especially, Pakistani marketers have seen great strides in advancing the field of digital branding by the introduction of a massive influx of new startup digital marketing agencies. The message here is that digital branding in technology inspires innovation and success among brands. Success begins with a good plan. A good idea, in turn, starts with reliable research to understand which solutions might offer the best outcomes for your specific challenges. Many people are reluctant to spend the time on a digital plan and strategy thinking that the digital world is so fast-moving that the minute you settle on an approach, things will change. It’s the opposite; the more thought out your marketing strategy, the more you’ll be able to roll with the punches. In our opinion, the need for research and plan is more necessary than ever in a classic business model. The virtual world is more demanding and uncertain, and only a great program can help an entrepreneur to be successful.",
            tags : [
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
              { link : " https://bgdint.com/digital-branding-and-future-of-pakistan/ " , tag : "Authenticate"} ,
          ]
          }
        ]
   
    
  return (
    <div>

        <div className='blendedslider text-center '>
                <h5> Case Study </h5>
                <div className="blendedsliderdivider"></div>
                <span className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} Case Study </span>
        </div>  

        <div className="casestudies">
            {casestudies.map((e) =>
            <div data-aos="fade-up" className="usestatecard">
            <Casestudycard   
                  image={e.image}
                  heading={e.heading}
                  author={e.author}  
                  cetagory={e.cetagory}
                  created_at={e.created_at}
                  comments={e.comments}
                  content={e.content}
                  tags={e.tags}
            />
            </div>
            )}
        </div>
        

    </div>
  )
}

export default Casestudy