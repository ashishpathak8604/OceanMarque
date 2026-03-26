import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './Tracking.css';

const Tracking = () => {
  const [trackingId, setTrackingId] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();

  const subject = 'Shipment Tracking Inquiry';
  const body = `Dear OceanMarque Team,

I would like to track my shipment with the following ID: ${trackingId || '[Enter ID Here]'}

Please share the latest shipment status.

Regards,`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=commercial@oceanmarque.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(gmailUrl, '_blank');
};

  return (
    <section id="tracking" className="tracking-section">
      <div className="container tracking-inner">
        <div className="tracking-text">
          <span className="section-tag">Shipment Assistance</span>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Track Your Shipment
          </h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Enter your Bill of Lading or Booking Reference number and our team will assist you with the latest shipment status.
          </p>
        </div>

        <div className="tracking-form-wrapper">
          <form className="tracking-form" onSubmit={handleSubmit}>
            <div className="tracking-input-group">
              <Search size={20} className="tracking-icon" />
              <input
                type="text"
                placeholder="Enter Tracking ID (e.g. OMQ-20240315-001)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="tracking-input"
                id="tracking-input"
              />
            </div>

            <button type="submit" className="btn btn-primary tracking-btn">
              Request Tracking Update
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Tracking;