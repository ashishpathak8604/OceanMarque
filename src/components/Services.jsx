import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Anchor, Ship, Package, FileCheck, TrendingUp } from 'lucide-react';
import cargoDock from '../assets/cargo_dock.jpg';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Package size={32} />,
    title: 'Freight Forwarding',
    desc: 'Integrated sea, air, and land freight solutions with global connectivity and optimized routing for cost-efficient execution.',
    color: '#0077B6',
  },
  {
    icon: <Ship size={32} />,
    title: 'Shipping Agency & Husbandry',
    desc: 'Comprehensive vessel operations and port formalities across major trade lanes, ensuring operational excellence and compliance.',
    color: '#00B4D8',
  },
  {
    icon: <Anchor size={32} />,
    title: 'Port Logistics & Stevedoring',
    desc: 'Specialized cargo handling and terminal logistics with seamless port-to-door execution for bulk and project cargo.',
    color: '#0077B6',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Multimodal Road & Rail',
    desc: 'Terrestrial logistics solutions combining rail efficiency and road flexibility for reliable door-to-door delivery.',
    color: '#00B4D8',
  },
  {
    icon: <FileCheck size={32} />,
    title: 'EXIM & Customs Solutions',
    desc: 'Expert regulatory support for HS codes, DGFT, and SEZ compliance to ensure friction-less international trade.',
    color: '#0077B6',
  },
  {
    icon: <Ship size={32} />,
    title: 'Chartering (Air & Ocean)',
    desc: 'Dedicated charter solutions for oversized and time-critical cargo requiring specialized shipping assets.',
    color: '#00B4D8',
  },
  {
    icon: <Anchor size={32} />,
    title: 'Dangerous Goods (DG)',
    desc: 'Certified handling of hazardous cargo with strict IMDG/IATA compliance and specialized safety protocols.',
    color: '#0077B6',
  },
  {
    icon: <Package size={32} />,
    title: 'Agri & Food-Grade Cargo',
    desc: 'Tailored logistics for agricultural exports including moisture-controlled handling for rice and pulses.',
    color: '#00B4D8',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Steel & Metal Logistics',
    desc: 'Optimized supply chain for industrial metals with specialized heavy-lift and secure storage solutions.',
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
          <span className="section-tag">Our Capabilities</span>
<h2 className="section-title">Integrated Logistics Solutions</h2>
<p className="section-sub">
  Delivering end-to-end logistics across shipping, ports, warehousing, and multimodal transportation—ensuring reliability, compliance, and operational excellence.
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
