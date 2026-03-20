import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, LayoutList, Truck, ClipboardCheck, PackageCheck } from 'lucide-react';
import portAerial from '../assets/port_aerial.jpg';
import './HowItWorks.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: <MessageCircle size={36} />, num: '01', title: 'Inquiry', desc: 'Submit your shipment requirements. Our team gets back within 4 hours.' },
  { icon: <LayoutList size={36} />, num: '02', title: 'Planning', desc: 'We design a tailored, cost-effective routing and logistics plan for you.' },
  { icon: <Truck size={36} />, num: '03', title: 'Shipping', desc: 'Cargo is dispatched with full tracking and carrier coordination.' },
  { icon: <ClipboardCheck size={36} />, num: '04', title: 'Customs', desc: 'Our experts manage all customs documentation and compliance.' },
  { icon: <PackageCheck size={36} />, num: '05', title: 'Delivery', desc: 'Safe, on-time delivery with proof and post-delivery support.' },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef([]);

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

    stepsRef.current.forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.1,
        }
      );
    });
  }, []);

  return (
    <section id="process" className="hiw-section" ref={sectionRef}>
      {/* Parallax background */}
      <div className="hiw-bg" style={{ backgroundImage: `url(${portAerial})` }} />
      <div className="hiw-bg-overlay" />

      <div className="container hiw-inner">
        <div className="section-header" ref={titleRef}>
          <span className="section-tag hiw-tag">Our Process</span>
          <h2 className="section-title" style={{ color: '#fff' }}>How It Works</h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.72)' }}>Five streamlined steps from inquiry to delivery.</p>
        </div>

        <div className="hiw-flow">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="hiw-step" ref={el => (stepsRef.current[i] = el)}>
                <div className="hiw-icon">{step.icon}</div>
                <div className="hiw-num">{step.num}</div>
                <h3 className="hiw-title">{step.title}</h3>
                <p className="hiw-desc">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hiw-connector">
                  <div className="connector-line" />
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
