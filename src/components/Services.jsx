import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Anchor, Ship, Package, FileCheck, TrendingUp } from 'lucide-react';
import cargoDock from '../assets/cargo_dock.jpg';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Anchor size={32} />,
    title: 'Port & Terminal Handling',
    desc: 'Comprehensive cargo management, stevedoring, and terminal operations across major global ports with precision and efficiency.',
    color: '#0077B6',
  },
  {
    icon: <Ship size={32} />,
    title: 'Port Agency Services',
    desc: 'Dedicated port agency support including vessel husbandry, crew services, and port formalities handled by local experts.',
    color: '#00B4D8',
  },
  {
    icon: <Package size={32} />,
    title: 'Freight Forwarding & Logistics',
    desc: 'Door-to-door multimodal logistics solutions — sea, air, and land freight — with real-time tracking and reporting.',
    color: '#0077B6',
  },
  {
    icon: <FileCheck size={32} />,
    title: 'Customs Clearance',
    desc: 'Seamless customs documentation, duty optimization, and compliance management to accelerate your cargo through borders.',
    color: '#00B4D8',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Chartering & Broking',
    desc: 'Expert vessel chartering and ship broking services to secure the best rates and schedules for your cargo globally.',
    color: '#0077B6',
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Header animation
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

    // Individual card animations — each triggers independently for smoother replay
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
          delay: (i % 3) * 0.1,
        }
      );
    });
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      {/* Subtle background image strip at top */}
      <div className="services-img-strip" style={{ backgroundImage: `url(${cargoDock})` }} />
      <div className="services-img-fade" />

      <div className="container">
        <div className="section-header" ref={headerRef}>
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Core Services</h2>
          <p className="section-sub">
            End-to-end maritime logistics solutions built for global enterprises.
          </p>
        </div>
        <div className="services-grid">
          {services.map((svc, i) => (
            <div
              key={i}
              className="service-card"
              ref={el => (cardsRef.current[i] = el)}
            >
              <div className="service-icon" style={{ color: svc.color }}>
                {svc.icon}
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              <span className="service-link">Learn More →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
