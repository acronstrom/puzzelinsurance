import { useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    insuranceType: '',
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    propertyType: '',
    vehicleYear: '',
    coverageAmount: '',
    deductible: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit form
      alert('Thank you! Your quote request has been submitted. We\'ll contact you shortly with your personalized quote.');
      setStep(1);
      setFormData({
        insuranceType: '',
        name: '',
        email: '',
        phone: '',
        zipCode: '',
        propertyType: '',
        vehicleYear: '',
        coverageAmount: '',
        deductible: ''
      });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const insuranceTypes = [
    { value: 'home', label: 'Home Insurance', icon: '🏠' },
    { value: 'auto', label: 'Auto Insurance', icon: '🚗' },
    { value: 'health', label: 'Health Insurance', icon: '❤️' },
    { value: 'life', label: 'Life Insurance', icon: '💼' },
    { value: 'business', label: 'Business Insurance', icon: '🏢' },
    { value: 'travel', label: 'Travel Insurance', icon: '✈️' }
  ];

  return (
    <div className="quote">
      {/* Hero Section */}
      <section className="quote-hero">
        <div className="container">
          <div className="quote-hero-content fade-in-up">
            <h1>Get Your Free Quote</h1>
            <p>
              Answer a few quick questions and receive a personalized insurance quote 
              in minutes. No obligations, no hassle.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="quote-form-section">
        <div className="container">
          <div className="quote-form-wrapper">
            {/* Progress Bar */}
            <div className="progress-bar">
              <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
                <div className="progress-number">1</div>
                <span>Insurance Type</span>
              </div>
              <div className="progress-line"></div>
              <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
                <div className="progress-number">2</div>
                <span>Your Details</span>
              </div>
              <div className="progress-line"></div>
              <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
                <div className="progress-number">3</div>
                <span>Coverage Info</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleNext} className="quote-form">
              {/* Step 1: Insurance Type */}
              {step === 1 && (
                <div className="form-step fade-in-up">
                  <h2>What type of insurance are you looking for?</h2>
                  <div className="insurance-type-grid">
                    {insuranceTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`insurance-type-card ${formData.insuranceType === type.value ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name="insuranceType"
                          value={type.value}
                          checked={formData.insuranceType === type.value}
                          onChange={handleChange}
                          required
                        />
                        <div className="insurance-type-icon">{type.icon}</div>
                        <span>{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Personal Details */}
              {step === 2 && (
                <div className="form-step fade-in-up">
                  <h2>Tell us about yourself</h2>
                  <div className="form-grid">
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
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="zipCode">ZIP Code *</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Coverage Details */}
              {step === 3 && (
                <div className="form-step fade-in-up">
                  <h2>Coverage preferences</h2>
                  <div className="form-grid">
                    {(formData.insuranceType === 'home' || formData.insuranceType === 'business') && (
                      <div className="form-group">
                        <label htmlFor="propertyType">Property Type *</label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select property type</option>
                          <option value="house">Single Family House</option>
                          <option value="condo">Condo</option>
                          <option value="apartment">Apartment</option>
                          <option value="townhouse">Townhouse</option>
                        </select>
                      </div>
                    )}
                    {formData.insuranceType === 'auto' && (
                      <div className="form-group">
                        <label htmlFor="vehicleYear">Vehicle Year *</label>
                        <input
                          type="number"
                          id="vehicleYear"
                          name="vehicleYear"
                          value={formData.vehicleYear}
                          onChange={handleChange}
                          required
                          placeholder="2020"
                          min="1990"
                          max={new Date().getFullYear() + 1}
                        />
                      </div>
                    )}
                    <div className="form-group">
                      <label htmlFor="coverageAmount">Coverage Amount *</label>
                      <select
                        id="coverageAmount"
                        name="coverageAmount"
                        value={formData.coverageAmount}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select coverage amount</option>
                        <option value="100k">$100,000</option>
                        <option value="250k">$250,000</option>
                        <option value="500k">$500,000</option>
                        <option value="1m">$1,000,000</option>
                        <option value="custom">Custom Amount</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="deductible">Preferred Deductible *</label>
                      <select
                        id="deductible"
                        name="deductible"
                        value={formData.deductible}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select deductible</option>
                        <option value="500">$500</option>
                        <option value="1000">$1,000</option>
                        <option value="2500">$2,500</option>
                        <option value="5000">$5,000</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="form-navigation">
                {step > 1 && (
                  <button type="button" onClick={handleBack} className="btn btn-secondary">
                    Back
                  </button>
                )}
                <button type="submit" className="btn btn-primary">
                  {step === 3 ? 'Get My Quote' : 'Continue'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="quote-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why Get a Quote from Us?</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h3>Instant Quotes</h3>
              <p>Get your personalized quote in minutes, not days.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>Best Rates</h3>
              <p>We compare rates to ensure you get the best deal.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Your information is protected with bank-level security.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✅</div>
              <h3>No Obligation</h3>
              <p>Request a quote with no commitment required.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;

