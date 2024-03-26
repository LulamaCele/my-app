import React from 'react';
import './testimonialsCTA.css';
import testictaimg from '../../images/pexels-carsten-vollrath-13381459.jpg';

export function TestimonialsCTA() {
  return (
    <div className='testimonialcta-container'>
            <div className="testimonial-descrip">
                <p className='sub-title'><span>T</span>estimonials</p>
                <p className='description'>
                    This is the only one stop you need to plan your perfect wedding.
                    We got you covered from decoration, cake, make-up, dresses, suits,
                    agian we got you covered.
                </p>
                <button className='btn-cta'>View Our Packages</button>
            </div>
            <div className="img-container-cta">
                <img src={testictaimg} alt="" />
            </div>
    </div>
  )
}

