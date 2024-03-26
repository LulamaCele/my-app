import React from "react";
import "./testimonials.css";
import { Nav } from "../../components/nav/Nav";
import { Footer } from "../../components/footer/Footer";
import img1 from "../../images/gallery-1.jpg";
import img2 from "../../images/gallery-2.jpg";
import img3 from "../../images/gallery-3.jpg";
import img4 from "../../images/gallery-4.jpg";

export function Testimonials() {
  return (
    <div className="test-wrapper">
      <Nav />
      <div className="test-container">
        <div className="test-item">
          <h2>Mike & Jessica</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            fusce ut placerat orci nulla pellentesque dignissim enim sit. Id
            aliquet lectus proin nibh nisl condimentum. Sed viverra ipsum nunc
            aliquet bibendum enim facilisis gravida.
          </p>
        </div>
        <div className="imge-container">
          <img src={img1} alt="picture of couple" />
        </div>
      </div>
      <div className="test-container">
        <div className="imge-container" id="img-container">
          <img src={img2} alt="picture of couple" />
        </div>
        <div className="test-item" id="testimonial-item">
          <h2>Jin & Kim</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            fusce ut placerat orci nulla pellentesque dignissim enim sit. Id
            aliquet lectus proin nibh nisl condimentum. Sed viverra ipsum nunc
            aliquet bibendum enim facilisis gravida.
          </p>
        </div>
      </div>
      <div className="test-container">
        <div className="test-item">
          <h2>Gigi & Alex</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            fusce ut placerat orci nulla pellentesque dignissim enim sit. Id
            aliquet lectus proin nibh nisl condimentum. Sed viverra ipsum nunc
            aliquet bibendum enim facilisis gravida.
          </p>
        </div>
        <div className="imge-container">
          <img src={img3} alt="picture of couple" />
        </div>
      </div>
      <div className="test-container">
        <div className="imge-container" id="img-container">
          <img src={img4} alt="picture of couple" />
        </div>
        <div className="test-item" id="testimonial-item">
          <h2>Sakura & Naruto</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            fusce ut placerat orci nulla pellentesque dignissim enim sit. Id
            aliquet lectus proin nibh nisl condimentum. Sed viverra ipsum nunc
            aliquet bibendum enim facilisis gravida.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
