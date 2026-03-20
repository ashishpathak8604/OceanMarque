import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin } from 'lucide-react';
import worldMap from '../assets/world_map.jpg';
import './GlobalNetwork.css';

gsap.registerPlugin(ScrollTrigger);

const offices = [
  { name: 'Chennai', left: '67%', top: '48%', primary: true },
  { name: 'Mumbai', left: '63%', top: '43%', primary: true },
  { name: 'New Delhi', left: '63%', top: '36%', primary: true },
  { name: 'Singapore', left: '73%', top: '55%' },
  { name: 'Dubai', left: '58%', top: '40%' },
  { name: 'Rotterdam', left: '47%', top: '26%' },
  { name: 'Shanghai', left: '77%', top: '35%' },
  { name: 'New York', left: '23%', top: '33%' },
  { name: 'London', left: '45%', top: '24%' },
];

const GlobalNetwork = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const markersRef = useRef([]);
  const mapRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      mapRef.current,
      { opacity: 0, scale: 0.97 },
      {
        opacity: 1, scale: 1, duration: 1, ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    markersRef.current.forEach((marker, i) => {
      if (!marker) return;
      gsap.fromTo(
        marker,
        { opacity: 0, scale: 0.2 },
        {
          opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.08,
        }
      );
    });
  }, []);

  return (
    <section id="network" className="network-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={titleRef}>
          <span className="section-tag">Global Presence</span>
          <h2 className="section-title">Our Network</h2>
          <p className="section-sub">
            Operating across 60+ countries with key hubs in India, Asia, Europe, and the Americas.
          </p>
        </div>

        <div className="map-wrapper" ref={mapRef}>
          {/* Real world map image */}
          <img
            src={worldMap}
            alt="OceanMarque Global Network Map"
            className="world-map-img"
          />
          <div className="map-tint" />

          {/* City Markers */}
          {offices.map((office, i) => (
            <div
              key={i}
              className={`map-marker ${office.primary ? 'primary-marker' : ''}`}
              style={{ left: office.left, top: office.top }}
              ref={el => (markersRef.current[i] = el)}
            >
              <MapPin size={office.primary ? 20 : 14} />
              <span className="marker-label">{office.name}</span>
              {office.primary && <div className="marker-pulse" />}
            </div>
          ))}
        </div>

        <div className="network-stats">
          <div className="nstat"><span className="nstat-val">60+</span><span className="nstat-label">Countries</span></div>
          <div className="nstat"><span className="nstat-val">180+</span><span className="nstat-label">Ports</span></div>
          <div className="nstat"><span className="nstat-val">3</span><span className="nstat-label">Home Ports — India</span></div>
          <div className="nstat"><span className="nstat-val">24/7</span><span className="nstat-label">Operations</span></div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
