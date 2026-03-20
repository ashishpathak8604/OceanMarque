import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "OceanMarque transformed our entire supply chain. Their port agency team in Chennai is second to none — clearance happens in hours, not days.",
    name: "Rahul Sharma",
    role: "VP Supply Chain, AutoFab Industries",
    company: "AutoFab",
  },
  {
    quote: "We've worked with many freight forwarders, but OceanMarque's responsiveness and global network gave us a competitive edge we didn't have before.",
    name: "Emily Chen",
    role: "Head of Logistics, TechBase Global",
    company: "TechBase",
  },
  {
    quote: "The customs clearance speed is remarkable. Our pharma shipments are compliant and delivered on schedule, every single time.",
    name: "Dr. Priya Nair",
    role: "Director, MedTrans Solutions",
    company: "MedTrans",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  const animateCard = () => {
    gsap.fromTo(cardRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
  };

  const prev = () => {
    setIndex(i => (i - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setIndex(i => (i + 1) % testimonials.length);
  };

  useEffect(() => {
    animateCard();
  }, [index]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testimonial-wrapper">
          <button className="testimonial-nav" onClick={prev} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <div className="testimonial-card" ref={cardRef}>
            <Quote size={36} className="quote-icon" />
            <p className="testimonial-quote">"{t.quote}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.name.charAt(0)}</div>
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
          <button className="testimonial-nav" onClick={next} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
