import React, { useState } from 'react';
import { Send, CheckCircle, MapPin, Mail, Phone } from 'lucide-react';
import portAerial from '../assets/port_aerial.jpg';
import './ContactForm.css';

const services = [
  'Port & Terminal Handling',
  'Port Agency Services',
  'Freight Forwarding & Logistics',
  'Customs Clearance',
  'Chartering & Broking',
  'Other',
];

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required.';
    if (!form.company.trim()) e.company = 'Company name is required.';
    if (!form.service) e.service = 'Please select a service.';
    if (!form.message.trim()) e.message = 'Message cannot be empty.';
    return e;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(err => ({ ...err, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Background image with overlay */}
      <div className="contact-bg" style={{ backgroundImage: `url(${portAerial})` }} />
      <div className="contact-bg-overlay" />

      <div className="container contact-inner">
        <div className="contact-info">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Request a Quote</h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Ready to simplify your maritime logistics? Reach out to us and our team 
            will respond with a tailored solution for your requirements.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <MapPin size={16} className="contact-detail-icon" />
              <div>
                <strong>Registered Office</strong>
                <span>Old 20 / New 29, Second Floor, First Street,<br />Parameshwari Nagar, Adyar, Chennai – 600 020</span>
              </div>
            </div>
            <div className="contact-detail">
              <Mail size={16} className="contact-detail-icon" />
              <div>
                <strong>Business Enquiries</strong>
                <span>commercial@oceanmarque.com</span>
              </div>
            </div>
            <div className="contact-detail">
              <Phone size={16} className="contact-detail-icon" />
              <div>
                <strong>Call our office</strong>
                <span>+91 739 729 7771</span>
              </div>
            </div>
            <div className="contact-detail" style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
              <div>
                <strong>Key Contacts</strong>
                <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>
                  <p style={{ margin: '0.2rem 0' }}>K.P. Singh — Director</p>
                  <p style={{ margin: '0.2rem 0' }}>Shikha Sachdeva — Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="cf-name">Full Name</label>
                  <input id="cf-name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="cf-email">Email Address</label>
                  <input id="cf-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className={`form-group ${errors.company ? 'has-error' : ''}`}>
                  <label htmlFor="cf-company">Company</label>
                  <input id="cf-company" type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
                  {errors.company && <span className="field-error">{errors.company}</span>}
                </div>
                <div className={`form-group ${errors.service ? 'has-error' : ''}`}>
                  <label htmlFor="cf-service">Service Type</label>
                  <select id="cf-service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <span className="field-error">{errors.service}</span>}
                </div>
              </div>
              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="cf-message">Message</label>
                <textarea id="cf-message" name="message" value={form.message} onChange={handleChange} placeholder="Describe your shipment requirements or enquiry..." rows={5} />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} /> Send Message
              </button>
            </form>
          ) : (
            <div className="success-state">
              <CheckCircle size={56} color="#0077B6" />
              <h3>Thank You, {form.name}!</h3>
              <p>We've received your message regarding <strong>{form.service}</strong>. Our team will contact you at <strong>{form.email}</strong> within 24 hours.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
