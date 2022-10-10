import React, {useEffect} from "react";
import "./careers.scoped.css"
import "./nicepagecareer.css"
import mystyle from "./Careers.scss"
import {Link} from "react-router-dom"

//icons 
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BiDownArrowAlt } from "@react-icons/all-files/bi/BiDownArrowAlt";


// Importing AOS animations
import AOS from 'aos';
import "aos/dist/aos.css";

function Careers() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  let careerservicecards =[ 

    { imagepath:"https://bgdint.com/wp-content/uploads/2020/10/B612_20201020_112950_151.jpg" , name:"Muhammad Aziz" ,  designation:"Marketing Executive" },
    { imagepath:"https://bgdint.com/wp-content/uploads/2020/10/B612_20201020_112950_151.jpg" , name:"Muhammad Aziz" ,  designation:"Marketing Executive" },
    { imagepath:"https://bgdint.com/wp-content/uploads/2020/10/B612_20201020_112950_151.jpg" , name:"Muhammad Aziz" ,  designation:"Marketing Executive" },
    { imagepath:"https://bgdint.com/wp-content/uploads/2020/10/B612_20201020_112950_151.jpg" , name:"Muhammad Aziz" ,  designation:"Marketing Executive" },
    { imagepath:"https://bgdint.com/wp-content/uploads/2020/10/B612_20201020_112950_151.jpg" , name:"Muhammad Aziz" ,  designation:"Marketing Executive" },
    

  ]

  let careerjobs = [
    { title:"React JS intern" , department:"Development, Information Technology",status:"Fullt time", address:"E2-Wapda Town Lahore pakistan"},
    { title:"PHP developer" , department:"Development, Information Technology",status:"Fullt time", address:"E2-Wapda Town Lahore pakistan"},
    { title:"HR executive" , department:"Development, Information Technology",status:"Fullt time", address:"E2-Wapda Town Lahore pakistan"},
    { title:"Content Writter" , department:"Development, Information Technology",status:"Fullt time", address:"E2-Wapda Town Lahore pakistan"},
    { title:"Wordpress Developer" , department:"Development, Information Technology",status:"Fullt time", address:"E2-Wapda Town Lahore pakistan"},
    { title:"Flutter Developer" , department:"Development, Information Technology",status:"Fullt time", address:"E2-Wapda Town Lahore pakistan"},
    { title:"Graphic Designer" , department:"Graphics,Information Technology",status:"Fullt time", address:"E2-Wapda Town Lahore pakistan"},
  ]

  return (
    <div className='careersfullbody' >

<div className='blendedslider text-center '>
                <h5> Careers </h5>
                <div className="blendedsliderdivider"></div>
                <span className='blendedsliderlink' > You are here: <a href="/home">  <Link to="/home" >home</Link> </a> {`>>`} About Us </span>
</div>      

<div className="upperbody">
<div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1" id='careerbgdsection' >
<h2 data-aos="fade-down" className="u-text-custom-color-1"> Careers at BGD International</h2>
      <div className="u-layout">
        <div className="u-layout-row">
          <div  data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
            <div className="u-container-layout u-container-layout-2">
              <h3 className="u-text u-text-default u-text-8 u-text-custom-color-1 m-0 " > A place to grow your career</h3>
              <p className="u-text u-text-default u-text-9 ">
                <a href="https://bgdint.com/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1 p-0 ">Business GO Digital</a>&nbsp;is an international firm, with its offices and parents network around the world, belief talent can be explored and turned into an asset. On other hand, potential can be transformed into talent by providing a great working environment with numerous opportunities for learning and development.<br />
                <br />If you think you like challenges when it comes to a professional career, and you like to be part of a learning environment for consistent growth in your career, join us.<br />
                <br />Business GO Digital also provides relocation of staff programs where you can occasionally transfer to the principal company and relocate for some time. It would bring international exposure to your knowledge and experience.<br />
                <br />We do provide international standard compensation to our staff and an attractive salary package. We have annual evaluations and based on the performance employees get handsome increments and bonuses to be proud of. Life at BGD International is a chance to be part of the international IT professional community.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-2" id='careersimageright' >
            <div className="u-container-layout u-container-layout-3 imageanimationdiv ">
              <img className="u-expanded-width u-image u-image-default u-image-1 imageanimationimg " src="/images/careerimage.jpg" alt data-image-width={640} data-image-height={426} />
            </div>
          </div>
        </div>
      </div>
    </div>
</div>


<section className="u-body u-xl-mode u-clearfix u-section-1  mt-4" id="sec-c10d">
  <div className="u-clearfix u-sheet u-sheet-1 " id='careerslowersectin' >

  <div className="u-clearfix u-expanded-width u-gutter-40 u-layout-wrap u-layout-wrap-2">
      <div className="u-layout">
        <div className="u-layout-row" style={ {height: "508px"} } >
          <div data-aos="fade-right" className="u-container-style u-layout-cell u-size-30 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-4">
              <h3 className="u-text u-text-custom-color-1 u-text-10"> Explore Career Opportunities</h3>
              <p className="u-text u-text-11 m-0 mt-4"> We are looking for&nbsp;<a href="https://bgdint.com/blended-learning/" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-2">experts</a>&nbsp;and experienced professionals who can inspire, and contribute to their clients’ projects. We need committed designers and developers to be part of international customers’ teams.<br />
                <br />Whether you are currently working in a local company or have experience with an international firm, you can apply for an advertised position with confidence for a better future.<br />
                <br />Apply your expertise within the Business GO Digital career center to be a part of another success story. You’ll work with a specific scope of work but with an opportunity to extend the experience and knowledge in your desired area. You’ll have opportunities to expand your technical and leadership skills with international assignments are a vital part of the job, learning, and development, and you may have the chance to experience a global assignment.<br />
                <br />Find out what it’s like from a BGD professional and meet the BGD international team. You can apply for a job or can send your cv to careers@bgdint.com with the job title and reference number.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="u-container-style u-layout-cell u-size-30 u-layout-cell-4">
            <div className="u-container-layout u-valign-top u-container-layout-5">
              <h3 className="u-text u-text-custom-color-1 u-text-12 w-100 ">
                <a href="https://bgdint.com/learning-development/" title="Learning & Development" className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-3">Learning & Development</a>
              </h3>
              <p className="u-text u-text-13 m-0 mt-4 "> The skills, expertise, and capabilities of our people are the reasons behind our success. We’re committed to developing a learning culture – one where every experience adds to your professional confidence and builds your individual career tracks.&nbsp;You will be provided an equal opportunity to expand knowledge and receive additional support, whenever you need it. Business GO Digital Academy (BGDA) offers access to the latest technical, business, and leadership skill development, and talented people will be having access to advanced levels of training and certifications.<br />
                <br />We are committed to creating a working environment where people can flourish and discover the freedom to fulfill their potential. They aim high and have the resources to achieve it. Our team comes from international diverse backgrounds and with an average of 15 years of experience. We value your ideas, and energy to make it happen. Join us, you’ll find yourself in an environment that is welcoming and professional&nbsp;to boost your individual needs and align with a combination of technical training, coaching, and skill-building programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* JOB section */}

    {/* FIlters */}
      <div className="row mt-5 careerfilters ">
        <div className="col-md-3"> 

         
        <div  data-aos="fade-right"class="input-group mb-3">
         <input  type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" id="Jobsearchfilter"  aria-describedby="basic-addon2"/>
           <span class="input-group-text"> <BsSearch/> </span>
        </div>
              
         </div>
        <div data-aos="fade-up" className="col-md-3">
        <div class="input-group mb-3">
           <select class="jobfilterdropdown form-control" name="" id="">
             <option>All Job Cetagories</option>
             <option>Development</option>
             <option>IT</option>
           </select>
           <span class="input-group-text"> <BiDownArrowAlt/> </span>
        </div>

        </div>
        <div data-aos="fade-up" className="col-md-3">
        <div class="input-group mb-3">
           <select class="jobfilterdropdown form-control" name="" id="">
           <option>All Job Type</option>
             <option>Remote</option>
             <option>Full time</option>
             <option>Part time</option>
           </select>
           <span class="input-group-text"> <BiDownArrowAlt/> </span>
        </div>
    
        </div>
        <div data-aos="fade-left"  className="col-md-3">
        <div  class="input-group mb-3">
           <select class="jobfilterdropdown form-control" name="" id="">
             <option>All Job Location</option>
             <option>Remote</option>
             <option>Full time</option>
             <option>Part time</option>
           </select>
           <span class="input-group-text"> <BiDownArrowAlt/> </span>
        </div>
       
        </div>
      </div>

      <div className="careersjobcards">

    
        {careerjobs.map((e)=>

        <div data-aos="fade-up" className="careersjobcard">

        <p className='jobtitle m-0 p-0  u-text-palette-1-base ' > <b>{ e.title }</b> </p>
        <p className='jobdepartment m-0 p-0 ' > { e.department } </p>
        <p className='jobstatus m-0 p-0  ' > { e.status } </p>
        <p className='jobaddress m-0 p-0  ' > { e.address } </p>
        <a href="#" title="Learning & Development" className="u-active-none u-border-none m-0 p-0  u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-3"> More detials </a>

        </div>
       ) } 

      </div>


    {/*  */}

    <div className="u-container-style u-expanded-width u-group u-group-1" id='endsectioncareers' >
      <div className="u-container-layout u-container-layout-1">
        <h3 data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-2 m-0"> BGDIP - Internship Program</h3>
        <p data-aos="fade-up" className="u-text u-text-3"> Our Business GO Digital Internship (BGDI) is designed to help you find out more about BGD International and the diversified work we do in relation to digital identity, transformation, learning &amp; development, and offshore manpower. We aim to help our clients to manage and deliver their projects successfully.You’ll explore our culture is different and professional. We have implemented international standards while we work with global customers and meet their expectations. We provide you a chance to learn new skills, enhance your CV, learn about the professional world, and most importantly, get your foot in the door of one of the leading professional Digital Transformation Company. You will also get the opportunity to secure a graduate role upon the completion of your degree if you are selected so.<br />
          <br />Some of the details of the Internship Program is as follow:
        </p>
        <ul data-aos="fade-up" className="u-text u-text-4">
          <li> Duration: 3-6 months</li>
          <li>Requirements: Bachelor’s Degree, Majors in Programing, Computer Sciences, Information Technology with GPA 3.0 or equivalent.</li>
        </ul>
        <p data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-5 mt-4">
          <span style={{fontSize: '1.125rem'}}> Our priority is to take care of our people</span>
        </p>
        <p data-aos="fade-up" className="u-text u-text-6"> Offering the world’s latest transformation and cloud technology solutions by introducing a variety of services related to digital identity, cloud technology, and transformation, new ideas to the different industry sectors that contribute to human development. We are powered by the talent in Pakistan, associates from around the world with experience from leading global business.<br />
          <br />BGD International is not a just place to work but a career path where you would be able to define yourself, share your talent, explore new opportunities, and mark your expertise. Our human resource department is giving priority to taking care of our people through their national and international deployment and training with hands-on experience.<br />
          <br />Our management team comes from global experiences and a proven track and are eager to deliver different and authentic products. We value the relationship and trust of our customers.
        </p>
        <p data-aos="fade-up" className="u-text u-text-custom-color-1 u-text-7"> See what our team members say working with us</p>

        { /*  Employeeslist  */}

        <div className="emplpyeecards">

          {careerservicecards.map((e)=>

            <div data-aos="fade-up" className="u-container-style u-layout-cell u-size-15 u-layout-cell-13 emplpyeecard ">
              <div className="u-container-layout u-container-layout-13">
                <img className="u-image u-image-default u-image-4" id='employeecardimage' style={{ height: "300px"}} src={e.imagepath} alt data-image-width={300} data-image-height={396} />
                <p className="u-text-custom-color-1 m-0 mt-2 text-center  "  id='employeecarddetials' > {e.name}</p>
                <p className="m-0 text-center " id='employeecarddetials' > { e.designation } </p>
              </div>
            </div>
          )} 
        </div>

        {/*  */}


      </div>




    </div>

    

  </div>
</section>


    </div>
  )
}

export default Careers