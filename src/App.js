// importing pages
import Homepage from "./pages/homepage/homepage";
import Blendedlearning from "./pages/Blendedlearning/Blendedlearning";
import Aboutcloud from "./pages/Aboutcloud/Aboutcloud";
import BGDintmaster from "./BGDintmaster";
import Aboutbody from "./pages/Aboutus/Aboutbody";

// Company pages
import Careers from "./pages/careers/Careers";
import Gallary from "./pages/Gallary/Gallary";
import Casestudy from "./pages/Casestudy/Casestudy";
import ContactUS from "./pages/ContactUS/ContactUS";
import Company from "./pages/Company/Company";
import Partners from "./pages/partners/partners";


// ---------------- > Strategy Pages
import Strategy from "./pages/strategy/Strategy";

import LoyaltyProgram from "./pages/Loyalty/LoyaltyProgram";
import Spantanic from "./pages/Spantanic/Spantanic";


// // ---------------- > Services Pages
import Services from "./pages/services/Services.jsx";

// Brandidentity page
import Brandidentity from "./pages/Servicepages/Brandidentity/Brandidentity";

import Creativecommunication from "./pages/Servicepages/Brandidentity/Creativecom/Creativecommunication";
import Brandpromotion from "./pages/Servicepages/Brandidentity/Brandpromotion/Brandpromotion";
import Packingdesign from "./pages/Servicepages/Brandidentity/Packingdesign/Packingdesign";
import Contentwriting from "./pages/Servicepages/Brandidentity/Contentwriting/Contentwriting";

// Production Studio
import Productionstudio from "./pages/Servicepages/Productionstudio/Productionstudio";

import Modelinganimation from "./pages/Servicepages/Productionstudio/Modelinganimation/Modelinganimation"
import Tvadsdocumentary from "./pages/Servicepages/Productionstudio/Tvadsdocumentary/Tvadsdocumentary";
import Infographics from "./pages/Servicepages/Productionstudio/Infographics/Infographics";
import Youtubechannel from "./pages/Servicepages/Productionstudio/Youtubechannel/Youtubechannel";

// Development Unit
import Developmentunit from "./pages/Servicepages/Developmentunit/Developmentunit";

import Websitedevelopment from "./pages/Servicepages/Developmentunit/Websitedevelopment/Websitedevelopment";
import Appdevelopment from "./pages/Servicepages/Developmentunit/Appdevelopment/Appdevelopment";
import Architecturaldesign from "./pages/Servicepages/Developmentunit/Architecturaldesign/Architecturaldesign";
import Softwaredevelopment from "./pages/Servicepages/Developmentunit/Softwaredevelopment/Softwaredevelopment";

// Social Media Management
import Socialdigitalmedia from "./pages/Servicepages/Socialdigitalmedia/Socialdigitalmedia";

import Socialmedimanagement from "./pages/Servicepages/Socialdigitalmedia/Socialmediamangement/Socialmedimanagement";
import Digitalmediaplanning from "./pages/Servicepages/Socialdigitalmedia/Digitalmediaplanning/Digitalmediaplanning";
import Seo from "./pages/Servicepages/Socialdigitalmedia/SEO/Seo";
import Influencermarketing from "./pages/Servicepages/Socialdigitalmedia/Influencermarketing/Influencermarketing";

// Learning and development
import Learningdevelopment from "./pages/Servicepages/Learningdevelopment/Learningdevelopment";

// Remote and offshore manpower
import Remoteandoffshoremanpower from "./pages/Servicepages/Remoteandoffshoremanpower/Remoteandoffshoremanpower";

import Remoteitoffice from "./pages/Servicepages/Remoteandoffshoremanpower/Remoteitoffice/Remoteitoffice";
import Offshoremanpower from "./pages/Servicepages/Remoteandoffshoremanpower/Offshoremanpower/Offshoremanpower";


// Prining and Packing
import Printingpackaging from "./pages/Servicepages/Printingpackaging/Printingpackaging";

import PRINTINGLARGEDISPLAYS from "./pages/Servicepages/Printingpackaging/PRINTINGLARGEDISPLAYS/PRINTINGLARGEDISPLAYS";
import Packagingsolutions from "./pages/Servicepages/Printingpackaging/Packagingsolutions/Packagingsolutions";
import Businessproducts from "./pages/Servicepages/Printingpackaging/BUSINESSPRODUCTS/Businessproducts";
import Promotionalproducts from "./pages/Servicepages/Printingpackaging/Promotionalproducts/Promotionalproducts";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./app.scss"


function App() {

  return (
    <div className="websitebody" >
    
    <Router>

    <Routes>

    <Route path="/" element={<BGDintmaster/>} >

<Route index element={<Homepage/>} />
<Route path="/home" element={<Homepage/>} />
<Route path="/services" element={<Services/>} />
<Route path="/strategy" element={<Strategy/>} />
<Route path="/blendedlearning" element={<Blendedlearning/>} />
<Route path="/aboutcloud" element={<Aboutcloud/>} />
<Route path="/blendedlearning" element={<Careers/>} />
<Route path="/aboutus" element={<Aboutbody/>} />
<Route path="/careers" element={<Careers/>} />
<Route path="/gallary" element={<Gallary/>} />
<Route path="/casestudy" element={<Casestudy/>} />
<Route path="/contactus" element={<ContactUS/>} />
<Route path="/loyatyprogram" element={<LoyaltyProgram/>} />
<Route path="/spantanic" element={<Spantanic/>} />
<Route path="/company" element={<Company/>} />
<Route path="/partners" element={<Partners/>} />

{/* Serives pages */}


    {/* Brand Identity */}

<Route path="/brandidentity" element={<Brandidentity/>} />
<Route path="/creative-communication" element={<Creativecommunication/>} />
<Route path="/brand-promotion" element={<Brandpromotion/>} />
<Route path="/packaging-design" element={<Packingdesign/>} />
<Route path="/content-writing" element={<Contentwriting/>} />

   {/* Production Studio */}

<Route path="/production-studio" element={<Productionstudio/>} />
<Route path="/modeling-animation" element={<Modelinganimation/>} />
<Route path="/tv-ads-documentary" element={<Tvadsdocumentary/>} />
<Route path="/infographics" element={<Infographics/>} />
<Route path="/youtubechannel" element={<Youtubechannel/>} />

   {/* Development unit  */}

<Route path="/development-unit" element={<Developmentunit/>} />
<Route path="/website-development" element={<Websitedevelopment/>} />
<Route path="/app-development" element={<Appdevelopment/>} />
<Route path="/architectural-design" element={<Architecturaldesign/>} />
<Route path="/software-development" element={<Softwaredevelopment/>} />

   {/* Social Media Managment  */}
   
   
<Route path="/social-digital-media" element={<Socialdigitalmedia/>} />

<Route path="/social-media-management" element={<Socialmedimanagement/>} />
<Route path="/digital-media-planning" element={<Digitalmediaplanning/>} />
<Route path="/seo" element={<Seo/>} />
<Route path="/influencer-marketing" element={<Influencermarketing/>} />

   {/* Printing & Packing  */}
   
<Route path="/printing-package" element={<Printingpackaging/>} />

<Route path="/printing-large-displays" element={<PRINTINGLARGEDISPLAYS/>} />
<Route path="packaging-solutions" element={<Packagingsolutions/>} />
<Route path="business-products" element={<Businessproducts/>} />
<Route path="Promotional-products" element={<Promotionalproducts/>} />

   {/* Remote ando ffshore manpower  */}
   
<Route path="/offshore-remote-manpower" element={<Remoteandoffshoremanpower/>} />
<Route path="/remote-it-office" element={<Remoteitoffice/>} />
<Route path="/offshore-manpower" element={<Offshoremanpower/>} />

   {/* Learning and Development  */}

<Route path="/learning-development" element={<Learningdevelopment/>} />

</Route>


    </Routes>
    </Router>

    </div>
  );
}

export default App;
