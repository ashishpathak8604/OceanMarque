import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Factory, ShoppingBag, Pill, Car, Cpu, Wheat } from 'lucide-react';
import './Industries.css';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { icon: <Factory size={36} />, name: 'Manufacturing', desc: 'Heavy machinery, raw materials, and finished goods logistics.' },
  { icon: <ShoppingBag size={36} />, name: 'Retail & FMCG', desc: 'Time-critical retail cargo with optimized supply chain flows.' },
  { icon: <Pill size={36} />, name: 'Pharmaceuticals', desc: 'Temperature-controlled, compliant pharma cargo handling.' },
  { icon: <Car size={36} />, name: 'Automotive', desc: 'Vehicle and spare parts logistics with specialized RoRo services.' },
  { icon: <Cpu size={36} />, name: 'Electronics', desc: 'High-value tech cargo with enhanced security and fast clearance.' },
  { icon: <Wheat size={36} />, name: 'Agriculture', desc: 'Bulk and perishable cargo with cold chain solutions.' },
];

const Industries = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          delay: (i % 3) * 0.08,
        }
      );
    });
  }, []);

  return (
    <section id="industries" className="industries-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <span className="section-tag">Who We Serve</span>
          <h2 className="section-title">Industries</h2>
          <p className="section-sub">Specialized logistics tailored to your sector.</p>
        </div>
        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div key={i} className="industry-card" ref={el => (cardsRef.current[i] = el)}>
              <div className="industry-icon">{ind.icon}</div>
              <h3 className="industry-name">{ind.name}</h3>
              <p className="industry-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;