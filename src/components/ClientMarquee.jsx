import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ClientMarquee.css';

const clients = [
  'Maersk', 'MSC', 'CMA CGM', 'Evergreen', 'COSCO', 'Hapag-Lloyd',
  'ONE', 'Yang Ming', 'PIL', 'Zim', 'Hyundai', 'K-Line',
];

const ClientMarquee = () => {
  const trackRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2; // half since we duplicate

    animRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 28,
      ease: 'none',
      repeat: -1,
    });

    return () => animRef.current?.kill();
  }, []);

  const allClients = [...clients, ...clients]; // duplicate for seamless loop

  return (
    <section className="marquee-section">
      <div className="container">
        <p className="marquee-label">Trusted by global shipping leaders</p>
      </div>
      <div className="marquee-outer">
        <div className="marquee-track" ref={trackRef}>
          {allClients.map((name, i) => (
            <div key={i} className="marquee-item">
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
