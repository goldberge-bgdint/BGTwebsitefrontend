import React from 'react'

import Header from '../src/components/header/header.jsx'
import Footer from '../src/components/footer/Footer.jsx'

import {
  BrowserRouter as Router,
  Outlet
} from "react-router-dom";

function BGDintmaster() {
  return (
    <div>

  <div className="">
  <Header/>
  </div> 
  <div className="insidebody"><Outlet/></div>
  <div className="">
  <Footer/>
  </div> 
      
    </div>
  )
}

export default BGDintmaster