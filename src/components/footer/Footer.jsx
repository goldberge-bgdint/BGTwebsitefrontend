import React from 'react'
import "./footer.scss"
import whitelogo from "../../images/whitelogo.png"

//links
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className='footer' >

        <div className="footerupper  text-center ">
            <img className='footerlogo' src={whitelogo} alt="" />
            <div className="footerlinks mx-auto ">
            <a href=""><FaFacebookF/></a>
            <a  className='mx-2' href=""><AiOutlineInstagram/></a>
            <a className='mx-2'  href=""><AiOutlineTwitter/></a>
            <a href=""><FaLinkedinIn/></a>
            </div>
        </div>

        <div className="footerlower mt-3 row">

        <p className='col-lg-4 footerlogodiv'  >Powered By <span > <b><a href="" className='footerlogolink' > Business go digital </a> </b></span></p>
        <div className="col-lg-8 footernavdiv ">
            <ul className='footernavbar' >
                <li><a href=""> <Link to="/home" >Home</Link></a></li> <div className="footerlinkdivider">  </div>
                <li><a href=""> <Link to="/services" >Services</Link> </a></li> <div className="footerlinkdivider"></div>
                <li><a href=""> <Link to="/strategy" >Strategy</Link></a></li> <div className="footerlinkdivider"></div>
                <li><a href=""> <Link to="/" >Blended Learning</Link></a></li> <div className="footerlinkdivider"></div>
                <li><a href=""> <Link to="/" >Adobe Cloud</Link></a></li> <div className="footerlinkdivider"></div>
                <li><a href=""><Link to="/" >Company</Link></a></li>
            </ul>
        </div>
        
        </div>

    </div>
  )
}

export default Footer