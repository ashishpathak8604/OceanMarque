import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldAlert, Wine, Wheat } from 'lucide-react';
import './SpecializedLogistics.css';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    icon: <ShieldAlert size={40} />,
    title: 'Dangerous Goods (DG) Logistics',
    desc: 'Certified handling and transportation of hazardous cargo (Class 1-9). We ensure 100% compliance with IMDG, IATA, and ADR regulations, providing specialized packaging, labeling, and documentation for global safety.',
    tags: ['IMDG Compliance', 'IATA Certified', 'Safety First'],
  },
  {
    icon: <Wine size={40} />,
    title: 'Wine & Spirits Logistics',
    desc: 'Premium beverage logistics with temperature-controlled warehousing and specialized transit solutions. We manage the entire supply chain from wineries to global distributors, ensuring product integrity and excise compliance.',
    tags: ['Temp-Controlled', 'Excise Handling', 'Global Reach'],
  },
  {
    icon: <Wheat size={40} />,
    title: 'Agri Export Solutions',
    desc: 'Specialized logistics for agricultural commodities, primarily focusing on high-grade rice, pulses, and grains. Our solutions include moisture-controlled storage and efficient bulk handling for major export markets.',
    tags: ['Quality Grading', 'Bulk Handling', 'Export Ready'],
  },
];

const SpecializedLogistics = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section id="specialized" className="spec-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Niche Expertise</span>
          <h2 className="section-title">Specialized Logistics Solutions</h2>
          <p className="section-sub">
            Going beyond standard freight to deliver premium, compliance-driven logistics for sensitive and high-value commodities.
          </p>
        </div>

        <div className="spec-grid">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="spec-card"
              ref={el => (cardsRef.current[i] = el)}
            >
              <div className="spec-icon-box">{sol.icon}</div>
              <div className="spec-content">
                <h3 className="spec-card-title">{sol.title}</h3>
                <p className="spec-card-desc">{sol.desc}</p>
                <div className="spec-tags">
                  {sol.tags.map((tag, j) => (
                    <span key={j} className="spec-tag-item">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedLogistics;
