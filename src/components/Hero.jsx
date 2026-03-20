import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroShip from '../assets/hero_ship.jpg';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '12,000+', label: 'Shipments Handled' },
  { value: '180+', label: 'Ports Covered' },
  { value: '25+', label: 'Years of Experience' },
  { value: '60+', label: 'Countries Served' },
];

const Hero = () => {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const scrollHintRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Entrance animation timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(headlineRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(subRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .fromTo(
        statsRef.current.querySelectorAll('.stat-card'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
        '-=0.4'
      )
      .fromTo(scrollHintRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');

    // Floating scroll hint
    gsap.to(scrollHintRef.current, {
      y: 8, repeat: -1, yoyo: true, duration: 1.2, ease: 'sine.inOut', delay: 2,
    });

    // Subtle parallax on bgRef
    gsap.to(bgRef.current, {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: bgRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="hero">
      {/* Real photo background with parallax */}
      <div className="hero-bg-photo" ref={bgRef} style={{ backgroundImage: `url(${heroShip})` }} />
      <div className="hero-bg-overlay" />

      <div className="container hero-content">
        <div className="hero-badge">🌊 Trusted Global Maritime Partner</div>
        <h1 ref={headlineRef} className="hero-headline">
          Global Maritime Logistics <br />
          <span className="hero-accent">Simplified.</span>
        </h1>
        <p ref={subRef} className="hero-sub">
          From port handling to customs clearance, we deliver end-to-end maritime
          logistics solutions for businesses operating across 180+ ports worldwide.
        </p>
        <div ref={ctaRef} className="hero-cta">
          <button className="btn btn-hero-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get a Quote  
          </button>
          <button className="btn btn-hero-outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Services
          </button>
        </div>

        <div ref={statsRef} className="hero-stats">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div ref={scrollHintRef} className="scroll-hint">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
