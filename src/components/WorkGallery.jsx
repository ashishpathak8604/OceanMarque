import React from 'react';
import './WorkGallery.css';

// Import all images from the crousel folder
import s3 from '../assets/crousel/s3.jpeg';
import s4 from '../assets/crousel/s4.jpeg';
import s5 from '../assets/crousel/s5.jpeg';
import s11 from '../assets/crousel/s11.jpeg';
import s12 from '../assets/crousel/s12.jpeg';
import s13 from '../assets/crousel/s13.jpeg';
import s16 from '../assets/crousel/s16.jpeg';
import s17 from '../assets/crousel/s17.jpeg';
import s18 from '../assets/crousel/s18.jpeg';
import s19 from '../assets/crousel/s19.jpeg';
import s20 from '../assets/crousel/s20.jpeg';
import s21 from '../assets/crousel/s21.jpeg';

const workImages = [s3, s4, s5, s11, s12, s13, s16, s17, s18, s19, s20, s21];

const WorkGallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Operations</span>
          <h2 className="section-title">Work Gallery</h2>
          <p className="section-sub">
            A glimpse into our global logistics operations, cargo handling, and multimodal transportation excellence.
          </p>
        </div>
      </div>

      <div className="gallery-marquee-container">
        <div className="gallery-marquee">
          {/* Double the images for seamless loop */}
          {[...workImages, ...workImages].map((img, i) => (
            <div key={i} className="gallery-item">
              <img src={img} alt={`Work ${i}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
