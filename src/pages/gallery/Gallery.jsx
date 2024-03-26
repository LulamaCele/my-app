import React from 'react';
import './gallery.css';
import { Nav } from '../../components/nav/Nav';
import galmain from '../../images/gallery-main.jpg';
import gal1 from '../../images/gallery-1.jpg';
import gal2 from '../../images/gallery-2.jpg';
import gal3 from '../../images/gallery-3.jpg';
import gal4 from '../../images/gallery-4.jpg';
import gal5 from '../../images/gallery-5.jpg';
import gal6 from '../../images/gallery-6.jpg';
import { Footer } from '../../components/footer/Footer';

export function Gallery() {
  return (
    <div>
        <Nav />
        <div className='gallery-wrapper'>
        <div className="top-container">
            <p>Unforgettable Memories</p>
            <img src={galmain} alt="" />
        </div>
        <div className="gallery-container">
            <div className="gallery-item">
                <img src={gal1} alt="" />
                <img src={gal2} alt="" />
            </div>
            <div className="gallery-item">
                <img src={gal3} alt="" />
                <img src={gal4} alt="" />
            </div>
            <div className="gallery-item">
                <img src={gal5} alt="" />
                <img src={gal6} alt="" />
            </div>
        </div>
    </div>
    <Footer />
    </div>
    
  )
}

