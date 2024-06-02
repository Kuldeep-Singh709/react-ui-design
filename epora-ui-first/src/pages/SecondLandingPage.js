import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { LiaTelegramPlane } from "react-icons/lia";
import { RxPerson } from "react-icons/rx";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CgToolbox } from "react-icons/cg";
import Card from "../components/componentCSS/Card";


function SecondLandingPage() {
  return (
    <div className="container-fluid SecondLandingPageOutterDIV bg-light max-height-100vh max-width-100vw py-5 ">
      
      <div className="SecondLandingPageInnerDIV  d-flex justify-content-center align-content-center align-items-center flex-column gap-2">
      <div className="SecondLandingPageUpperDIV">
        <p className="h3 text-center text-primary ">What We Offer</p>
        <p className="h2  fs-1 ">For Your Future Learning.</p>
      </div>

      <div className=" container SecondLandingPageLowerDIV mt-5">
        <div className="row">
          <div className="col-md-3">
            <Card
              icon={<LiaTelegramPlane />}
              title="Online Courses"
              description="Interactively provide access world class materials for unique catalysts for change my ocardinat."
            />
          </div>
          <div className="col-md-3">
            <Card
              icon={<RxPerson />}
              title="Expert Trainer"
              description="Interactively provide access world class materials for unique catalysts for change my ocardinat."
            />
          </div>
          <div className="col-md-3">
            <Card
              icon={<IoDocumentTextOutline />}
              title="Get Certificate"
              description="Interactively provide access world class materials for unique catalysts for change my ocardinat."
            />
          </div>
          <div className="col-md-3">
            <Card
              icon={<CgToolbox />}
              title="Life Time Access"
              description="Interactively provide access world class materials for unique catalysts for change my ocardinat."
            />
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default SecondLandingPage;
