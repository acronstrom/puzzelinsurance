import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Home Insurance',
      description: 'Comprehensive protection for your most valuable asset.',
      features: [
        'Property damage coverage',
        'Personal belongings protection',
        'Liability coverage',
        'Natural disaster protection',
        'Temporary living expenses',
        'Replacement cost coverage'
      ],
      price: 'Starting at $89/month'
    },
    {
      icon: '🚗',
      title: 'Auto Insurance',
      description: 'Complete coverage for your vehicle and peace of mind on the road.',
      features: [
        'Collision coverage',
        'Comprehensive protection',
        'Liability coverage',
        'Uninsured motorist protection',
        'Roadside assistance',
        'Rental car reimbursement'
      ],
      price: 'Starting at $95/month'
    },
    {
      icon: '❤️',
      title: 'Health Insurance',
      description: 'Affordable healthcare coverage for you and your family.',
      features: [
        'Preventive care coverage',
        'Emergency services',
        'Prescription drug coverage',
        'Mental health services',
        'Specialist visits',
        'Telehealth options'
      ],
      price: 'Starting at $250/month'
    },
    {
      icon: '💼',
      title: 'Life Insurance',
      description: 'Secure your family\'s financial future with comprehensive life coverage.',
      features: [
        'Term life options',
        'Whole life coverage',
        'Accelerated death benefit',
        'Living benefits',
        'Flexible premium payments',
        'Cash value accumulation'
      ],
      price: 'Starting at $45/month'
    },
    {
      icon: '🏢',
      title: 'Business Insurance',
      description: 'Protect your business assets and operations.',
      features: [
        'General liability coverage',
        'Property insurance',
        'Workers\' compensation',
        'Business interruption',
        'Professional liability',
        'Cyber insurance'
      ],
      price: 'Starting at $150/month'
    },
    {
      icon: '✈️',
      title: 'Travel Insurance',
      description: 'Travel with confidence knowing you\'re protected.',
      features: [
        'Trip cancellation coverage',
        'Medical emergency coverage',
        'Lost luggage protection',
        'Travel delay reimbursement',
        'Emergency evacuation',
        'Adventure sports coverage'
      ],
      price: 'Starting at $25/trip'
    }
  ];

  const faqs = [
    {
      question: 'How do I file a claim?',
      answer: 'Filing a claim is easy with our 24/7 online portal or mobile app. Simply log in, select "File a Claim," and follow the guided steps. You can also call our claims hotline for immediate assistance.'
    },
    {
      question: 'Can I customize my coverage?',
      answer: 'Absolutely! We understand that everyone\'s needs are different. You can customize your coverage amounts, deductibles, and add optional coverages to create the perfect plan for your situation.'
    },
    {
      question: 'How quickly are claims processed?',
      answer: 'Most claims are processed within 3-5 business days. For urgent cases, our fast-track processing can approve claims in as little as 24 hours. We\'re committed to getting you the support you need quickly.'
    },
    {
      question: 'Do you offer multi-policy discounts?',
      answer: 'Yes! Bundle multiple policies (like home and auto) and save up to 25% on your premiums. The more you bundle, the more you save.'
    }
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content fade-in-up">
            <h1>Insurance Solutions for Every Need</h1>
            <p>
              From protecting your home to securing your family's future, we offer 
              comprehensive insurance solutions tailored to your unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-header">
                  <div className="service-icon-large">{service.icon}</div>
                  <div>
                    <h2>{service.title}</h2>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
                <ul className="features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="var(--light-purple)" />
                        <path d="M9 12l2 2 4-4" stroke="var(--primary-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="service-footer">
                  <span className="service-price">{service.price}</span>
                  <Link to="/quote" className="btn btn-primary">
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Puzzel Insurance?</h2>
            <p>We make insurance simple, accessible, and reliable.</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">01</div>
              <h3>Instant Quotes</h3>
              <p>Get personalized quotes in minutes with our easy online process. No waiting, no hassle.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">02</div>
              <h3>24/7 Support</h3>
              <p>Our dedicated team is always available to answer questions and help with claims.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">03</div>
              <h3>Flexible Plans</h3>
              <p>Customize your coverage to fit your needs and budget. Pay only for what you need.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">04</div>
              <h3>Fast Claims</h3>
              <p>Experience quick and easy claims processing with our streamlined digital system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services.</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Protected?</h2>
            <p>Get a personalized quote in minutes and discover the perfect coverage for your needs.</p>
            <div className="cta-buttons">
              <Link to="/quote" className="btn btn-primary btn-large">
                Get a Free Quote
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

