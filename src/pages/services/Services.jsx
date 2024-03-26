import React from "react";
import "./services.css";
import { Nav } from "../../components/nav/Nav";
import { Footer } from "../../components/footer/Footer";
import servicespgpic from "../../images/pexels-pixabay-265856.jpg";

export function Services() {
  return (
    <div>
      <Nav />
      <div className="services-wrapper-container">
        <div className="img-container">
          <img src={servicespgpic} alt="" />
          <div>
            <p>We turn your dream wedding into a reality.</p>
          </div>
        </div>
        <div className="services-container">
          <div className="service-item">
            <p>Wedding Coordinator</p>
            <p>R350.00</p>
            <button className="service-btn">Book</button>
          </div>
          <div className="service-item">
            <p>Destination Wedding</p>
            <p>R350.00</p>
            <button className="service-btn">Book</button>
          </div>
          <div className="service-item">
            <p>Full Package</p>
            <p>R350.00</p>
            <button className="service-btn">Book</button>
          </div>
          <div className="service-item">
            <p>Partial Package</p>
            <p>R350.00</p>
            <button className="service-btn">Book</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
