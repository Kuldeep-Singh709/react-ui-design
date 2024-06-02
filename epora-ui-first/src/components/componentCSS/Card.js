import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card p-2">
      <div className="card-body">
        <div className="icon-container my-2">{icon}</div>
        <h5 className="card-title fw-bold my-4">{title}</h5>
        <p className="card-text text-secondary my-3">{description}</p>
      </div>
    </div>
  );
};

export default Card;
