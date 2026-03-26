import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileSearch, BookOpen, Globe2, Landmark } from 'lucide-react';
import './EXIMExpertise.css';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: <FileSearch size={28} />,
    title: 'HS Code Classification',
    desc: 'Expert assistance in accurate HSN code determination for tax optimization and regulatory clearance.'
  },
  {
    icon: <BookOpen size={28} />,
    title: 'DGFT & EPCG Handling',
    desc: 'End-to-end management of Directorate General of Foreign Trade (DGFT) licenses and Export Promotion Capital Goods (EPCG) schemes.'
  },
  {
    icon: <Globe2 size={28} />,
    title: 'SEZ & FTWZ Solutions',
    desc: 'Specialized logistics for Special Economic Zones (SEZ) and Free Trade Warehousing Zones (FTWZ) with zero tax benefits.'
  },
  {
    icon: <Landmark size={28} />,
    title: 'Customs & DPD',
    desc: 'Efficient Direct Port Delivery (DPD) handling and comprehensive customs brokerage for fast-track clearance.'
  }
];

const EXIMExpertise = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.querySelectorAll('.exim-item'),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);

  return (
    <section id="exim" className="exim-section">
      <div className="container" ref={containerRef}>
        <div className="exim-layer">
          <div className="exim-info">
            <span className="section-tag">Regulatory Excellence</span>
            <h2 className="section-title">EXIM & Customs Expertise</h2>
            <p className="section-sub" style={{ margin: '0 0 2rem 0', textAlign: 'left' }}>
              We navigate the complexities of international trade regulations, ensuring your cargo moves across borders without friction or delay.
            </p>
            <div className="exim-grid">
              {capabilities.map((cap, i) => (
                <div key={i} className="exim-item">
                  <div className="exim-icon-sm">{cap.icon}</div>
                  <div className="exim-text">
                    <h4>{cap.title}</h4>
                    <p>{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="exim-visual">
            <div className="exim-stat-box">
              <span className="exim-stat-num">100%</span>
              <span className="exim-stat-label">Compliance Accuracy</span>
            </div>
            <div className="exim-stat-box">
              <span className="exim-stat-num">24/7</span>
              <span className="exim-stat-label">Regulatory Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EXIMExpertise;
