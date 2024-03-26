import React from "react";
import "./gallery.css";
import galleryctaimg from "../../images/allison-heine-unsplash.jpg";

export function GalleryCTA() {
  return (
    <div className="gallery-container-cta">
      <div className="img-container-cta" id="img-container">
        <img src={galleryctaimg} alt="" />
      </div>
      <div className="gallery-descrip" id="gallery-descrip">
        <p className="sub-title">
          <span>G</span>allery
        </p>
        <p className="description">
          This is the only one stop you need to plan your perfect wedding. We
          got you covered from decoration, cake, make-up, dresses, suits, agian
          we got you covered.
        </p>
        <button className="btn-cta">View Our Packages</button>
      </div>
    </div>
  );
}
