import React from 'react';
import { Anchor, Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-col brand-col">
        <div className="footer-logo">
          <Anchor size={24} color="#00B4D8" />
          <span>OceanMarque</span>
        </div>
        <p className="footer-tagline">
          Global Maritime Logistics Simplified. Trusted by the world's leading shippers across 60+ countries.
        </p>
        <div className="footer-socials">
          <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
          <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          <a href="#" aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>

      <div className="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="#services">Port & Terminal Handling</a></li>
          <li><a href="#services">Port Agency Services</a></li>
          <li><a href="#services">Freight Forwarding</a></li>
          <li><a href="#services">Customs Clearance</a></li>
          <li><a href="#services">Chartering & Broking</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#network">Global Network</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#contact">Careers</a></li>
          <li><a href="#contact">Press</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Locations</h4>
        <ul>
          <li>Chennai, India</li>
          <li>Mumbai, India</li>
          <li>New Delhi, India</li>
          <li>Singapore</li>
          <li>Dubai, UAE</li>
          <li>Rotterdam, Netherlands</li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container footer-bottom-inner">
        <span>© 2024 OceanMarque. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
