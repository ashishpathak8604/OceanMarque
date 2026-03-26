import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Globe, Zap, Star, Clock, Users } from 'lucide-react';
import containerBg from '../assets/container_bg.jpg';
import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { icon: <Globe size={30} />, title: 'Global Reach', desc: 'A strategic presence across 100+ countries ensuring your cargo is never out of reach.' },
  { icon: <Shield size={30} />, title: 'Reliability', desc: 'Industry-leading on-time delivery rates backed by 25+ years of operational excellence.' },
  { icon: <Zap size={30} />, title: 'Fast Clearance', desc: 'Pre-clearance and priority customs lanes to significantly reduce dwell time.' },
  { icon: <Star size={30} />, title: 'Excellence', desc: 'Certified ISO standards and consistent award-winning service quality.' },
  { icon: <Clock size={30} />, title: '24/7 Support', desc: 'Round-the-clock operations and dedicated account managers for seamless updates.' },
  { icon: <Users size={30} />, title: 'Expertise', desc: 'A team of seasoned professionals with 100+ years of combined logistics experience.' },
];

const WhyChooseUs = () => {
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
          opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          delay: (i % 3) * 0.1,
        }
      );
    });
  }, []);

  return (
    <section id="about" className="why-section" ref={sectionRef}>
      {/* Subtle container image background */}
      <div className="why-bg" style={{ backgroundImage: `url(${containerBg})` }} />
      <div className="why-bg-overlay" />

      <div className="container why-inner">
        <div className="section-header" ref={headerRef}>
          <span className="section-tag why-tag">Why Us</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Why Choose OceanMarque</h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.70)' }}>Built for enterprises that demand nothing less than the best.</p>
        </div>
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div key={i} className="why-card" ref={el => (cardsRef.current[i] = el)}>
              <div className="why-icon">{r.icon}</div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
