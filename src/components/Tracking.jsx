import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './Tracking.css';

const Tracking = () => {
  const [trackingId, setTrackingId] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) {
      setError('Please enter a valid Tracking ID.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="tracking" className="tracking-section">
      <div className="container tracking-inner">
        <div className="tracking-text">
          <span className="section-tag">Live Tracking</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Track Your Shipment</h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Enter your Bill of Lading or Booking Reference number to get real-time status updates.
          </p>
        </div>
        <div className="tracking-form-wrapper">
          {!submitted ? (
            <form className="tracking-form" onSubmit={handleSubmit}>
              <div className={`tracking-input-group ${error ? 'has-error' : ''}`}>
                <Search size={20} className="tracking-icon" />
                <input
                  type="text"
                  placeholder="Enter Tracking ID (e.g. OMQ-20240315-001)"
                  value={trackingId}
                  onChange={e => { setTrackingId(e.target.value); setError(''); }}
                  className="tracking-input"
                  id="tracking-input"
                />
              </div>
              {error && <p className="tracking-error">{error}</p>}
              <button type="submit" className="btn btn-primary tracking-btn">
                Track Shipment
              </button>
            </form>
          ) : (
            <div className="tracking-result">
              <div className="tracking-result-icon">🚢</div>
              <h3>Tracking: {trackingId}</h3>
              <p>Your shipment is currently <strong>In Transit</strong> — estimated arrival in <strong>3–5 business days</strong>.</p>
              <div className="tracking-progress">
                <div className="tp-step done">Booked</div>
                <div className="tp-line done" />
                <div className="tp-step done">Port Loading</div>
                <div className="tp-line active" />
                <div className="tp-step active">In Transit</div>
                <div className="tp-line" />
                <div className="tp-step">Customs</div>
                <div className="tp-line" />
                <div className="tp-step">Delivered</div>
              </div>
              <button className="btn btn-outline" onClick={() => { setSubmitted(false); setTrackingId(''); }} style={{ marginTop: '1.5rem' }}>
                Track Another
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tracking;
