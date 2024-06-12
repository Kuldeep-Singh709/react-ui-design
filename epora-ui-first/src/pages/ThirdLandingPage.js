import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function ThirdLandingPage() {
  return (
    // <div className="container-fluid ThirdLandingPageOutterDIV bg-secondary max-height-100vh max-width-100vw">
    //   <div className="ThirdLandingPageInnerDIV  d-flex justify-content-center align-content-center align-items-center flex-column">
    //     <div className="ThirdLandingPageUpperDiv border border-warning">

    //         <div className=""> <img src="/images/secondLimg01.png"  className="img-fluid secondLimg"/> </div>
    //         <div className=""> <img src="/images/secondLimg02.png"  className="img-fluid secondLimg"/> </div>
    //         <div className=""> <img src="/images/secondLimg03.png"  className="img-fluid secondLimg"/> </div>
    //         <div className=""> <img src="/images/secondLimg04.png"  className="img-fluid secondLimg"/> </div>
    //         <div className=""> <img src="/images/secondLimg05.png"  className="img-fluid secondLimg"/> </div>
    //         <div className=""> <img src="/images/secondLimg06.png"  className="img-fluid secondLimg"/> </div>

    //     </div>

    //     <div className="ThirdLandingPageLowerDiv border border-info">
    //       <p className="h3 text-center text-primary"> About Our Courses</p>
    //       <p className="h2  fs-1">Explore Thousands of Creative Classes.</p>
    //       <p className="h1 text-secondary">
    //         Dramatically supply transparent deliverables beforese backward comp
    //         internal or "organic" sources. Comp transparent leverage other
    //       </p>
    //       <button className="btn btn-lg bg-primary text-light">
    //         Read More
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="container-fluid landing-page-container ">
      <div className="row align-items-center justify-content-between ">
        <div className=" imgContainer col-md-6 position-relative ">
          <img
            src="/images/secondLimg03.png"
            alt="LineImage"
            // className="position-absolute image-2"
            className="img-fluid image-2 "
          />

          <img
            src="/images/secondLimg01.png"
            alt="Main"
            // className="img-fluid main-image"
            className="position-absolute main-image"
          />

          <img
            src="/images/secondLimg04.png"
            alt="WaterWaveImage"
            className="position-absolute image-3 "
          />

          <img
            src="/images/secondLimg05.png"
            alt="SignalWaveImage"
            className="position-abosolute image-4 "
          />

          <img
            src="/images/secondLimg02.png"
            alt="FirstWomanImage"
            className="position-absolute image-1 "
          />

          <img
            src="/images/secondLimg06.png"
            alt="SecondWomanImage"
            className="SecondWomanImage position-absolute image-5"
          />
        </div>

        <div className=" ThirdLandingPageRHS col-md-6 text-section text-left p-5">
          <h6 className="fs-5">About Our Courses</h6>
          <h1>Explore Thousands of Creative Classes.</h1>
          <p className="ThirdLandingPageRHSPara">
            Dramatically supply transparent deliverables before backward comp
            internal or "organic" sources. Competently leverage others.
          </p>
          <button className="btn btn-danger px-4 py-2 btn-lg fs-5 mt-5">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default ThirdLandingPage;
