import React from 'react';
import { Anchor, Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';
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
          Global Maritime Logistics Simplified. Trusted by leading shippers across 150+ countries with 25+ years of unmatched expertise.
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
          <li><a href="#services">Port &amp; Terminal Handling</a></li>
          <li><a href="#services">Port Agency Services</a></li>
          <li><a href="#services">Freight Forwarding</a></li>
          <li><a href="#services">Customs Clearance</a></li>
          <li><a href="#services">Chartering &amp; Broking</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Locations</h4>
        <ul>
          <li>Chennai, India</li>
          <li>Mumbai, India</li>
          <li>New Delhi, India</li>
          <li>Bengaluru, India</li>
          <li>Hyderabad, India</li>
          <li>Dubai, UAE</li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Contact</h4>
        <ul className="contact-list">
          <li>
            <MapPin size={14} className="footer-contact-icon" />
            <span>Old 20 / New 29, Second Floor, First Street, Parameshwari Nagar, Adyar, Chennai 600020, India</span>
          </li>
          <li>
            <Phone size={14} className="footer-contact-icon" />
            <span>+91 739 729 7771</span>
          </li>
          <li>
            <Mail size={14} className="footer-contact-icon" />
            <span>commercial@oceanmarque.com</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container footer-bottom-inner">
        <span>© 2025 OceanMarque. All rights reserved.</span>
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
