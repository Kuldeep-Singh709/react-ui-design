import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "../components/Navbar";

export default function LandingPage() {

  const landingPageImgStyles = {
    position: 'fixed',
    position: 'absolute',
    height: '100%', // Adjust the height as needed
    right: '-10px', // Adjust this value to move the image more or less to the right
    bottom: '-10px', // Adjust this value to move the image more or less to the bottom


  };


  return (
   
  //   <div class="container-fluid">
  //   <div class="row">
  //     <div class="col">
  //       <Navbar />
  //       <div class="container-fluid d-flex max-height-100vh bg-dark">
  //         <div class="col-sm-6 border border-warning max-width-50%">
  //           <p className="h6">Learn New Skills & Popular Courses</p>
  //           <p className="h1">For Every Student, Every Classroom.</p>
  //         </div>
  //         <div class="col-sm-6 border border-danger max-width-50% pt-5 ps-5 ">
  //           {/* <!-- Adjust the size of the image using Bootstrap's img-fluid class --> */}
  //           <img src="/images/landingpage.png" alt="landingpageimg" class="img-fluid ml-auto border border-warning"/>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>

//   <div className="container-fluid">
//   <div className="row">
//     <div className="col">
//       <Navbar />
//       <div className="container-fluid LandingPageOutter d-flex max-height-100vh bg-dark">
//         <div className="col-sm-6 border border-warning">
//           <p className="h6">Learn New Skills & Popular Courses</p>
//           <p className="h1">For Every Student, Every Classroom.</p>
//         </div>
//         <div className="col-sm-6  LandingPageImgDIV border border-danger pt-5 ps-5">
//           <img src="/images/landingpage.png" alt="landingpageimg" className="img-fluid landingpageImg" />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

<div className="container-fluid LandingPageOutter max-height-100vh max-width-100vw">
<div className="row h-100  ">
  <div className="col  ">
    
    <div className="container-fluid LandingPageInner  d-flex  bg-dark h-100 w-100 p-0 m-0">

      <div className="col-sm-7 LandingPageInnerContentDIV d-flex justify-content-center align-content-center align-items-center flex-column ">
      {/* <div className="col-sm-7 LandingPageInnerContentDIV border border-warning d-flex justify-content-center align-items-center flex-column "> */}
      {/* <div className="container  text-start text-light "> */}
      <div className="container LandingPageInnerContentDIVSecond   text-start text-red mt-5">
        <p className="h4 text-light">Learn New Skills & Popular Courses</p>
        <p className="display-4 fw-bold text-light">For Every Student,</p>
        <p className="display-4 fw-bold text-light"> Every <span className="LandingPageInnerContentDivSpan">Classroom</span>.</p>
        <p className="h5 fst-itali CustomLetterSpacing text-light lh-1 ">Dramatically supply transparent deliverables before backward internal or "organic" sources. Competently leverage other.</p>
        {/* <button type="button" className="btn btn-primary btn-lg text-light" href="#">Explore Courses</button>   */}
      
        <a href="#" class="btn btn-primary btn-lg  text-light my-3 py-2 px-4 py-3 fs-6"  role="button" >Explore Courses</a>
      </div>
</div>
      
      <div className="col-sm-5 LandingPageImgDIV ">
      {/* <div className="col-sm-5 LandingPageImgDIV border border-danger pt-5 ps-5"> */}
        <img
          src="/images/landingpage.png"
          alt="landingpageimg"
          className="img-fluid landingpageImg "
          // className="img-fluid landingpageImg border border-info"
          // style={landingPageImgStyles}
        />
      </div>
    </div>
  </div>
</div>
</div>

  );
}
