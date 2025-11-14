import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'info@puzzelinsurance.com',
      link: 'mailto:info@puzzelinsurance.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (234) 567-890',
      link: 'tel:+1234567890'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Insurance Street, New York, NY 10001',
      link: '#'
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      details: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-5pm',
      link: null
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Insurance Street',
      state: 'NY 10001',
      phone: '+1 (234) 567-890'
    },
    {
      city: 'Los Angeles',
      address: '456 Coverage Avenue',
      state: 'CA 90001',
      phone: '+1 (234) 567-891'
    },
    {
      city: 'Chicago',
      address: '789 Policy Boulevard',
      state: 'IL 60007',
      phone: '+1 (234) 567-892'
    },
    {
      city: 'Houston',
      address: '321 Protection Lane',
      state: 'TX 77001',
      phone: '+1 (234) 567-893'
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content fade-in-up">
            <h1>Get in Touch</h1>
            <p>
              Have questions? We're here to help. Reach out to our team and we'll 
              respond as quickly as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.link ? (
                  <a href={info.link}>{info.details}</a>
                ) : (
                  <p>{info.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="quote">Get a Quote</option>
                    <option value="claim">File a Claim</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-large">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="offices-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Offices</h2>
            <p>Visit one of our locations across the country.</p>
          </div>
          <div className="offices-grid">
            {offices.map((office, index) => (
              <div key={index} className="office-card">
                <h3>{office.city}</h3>
                <p className="office-address">
                  {office.address}<br />
                  {office.state}
                </p>
                <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="office-phone">
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Immediate Assistance?</h2>
            <p>Our support team is available 24/7 to help with urgent matters.</p>
            <a href="tel:+1234567890" className="btn btn-primary btn-large">
              Call Now: +1 (234) 567-890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

