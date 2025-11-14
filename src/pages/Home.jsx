import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Home Insurance',
      description: 'Protect your home and belongings with comprehensive coverage against damage, theft, and natural disasters.'
    },
    {
      icon: '🚗',
      title: 'Auto Insurance',
      description: 'Drive with confidence knowing you have reliable coverage for your vehicle, passengers, and peace of mind.'
    },
    {
      icon: '❤️',
      title: 'Health Insurance',
      description: 'Access quality healthcare with plans designed to keep you and your family healthy and financially secure.'
    },
    {
      icon: '💼',
      title: 'Life Insurance',
      description: 'Secure your family\'s financial future with life insurance that provides support when they need it most.'
    },
    {
      icon: '🏢',
      title: 'Business Insurance',
      description: 'Safeguard your business with tailored coverage protecting your assets, employees, and operations.'
    },
    {
      icon: '✈️',
      title: 'Travel Insurance',
      description: 'Travel worry-free with coverage for trip cancellations, medical emergencies, and lost luggage.'
    }
  ];

  const features = [
    {
      title: '24/7 Support',
      description: 'Our dedicated team is available around the clock to assist you with any questions or claims.',
      icon: '🕐'
    },
    {
      title: 'Fast Claims',
      description: 'Experience quick and hassle-free claims processing with our streamlined digital system.',
      icon: '⚡'
    },
    {
      title: 'Trusted by 500K+',
      description: 'Join over half a million satisfied customers who trust us with their insurance needs.',
      icon: '⭐'
    },
    {
      title: 'Competitive Rates',
      description: 'Get comprehensive coverage at prices that fit your budget with our competitive rates.',
      icon: '💰'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Switching to Puzzel Insurance was the best decision. Their customer service is outstanding, and the claims process was seamless when I needed it.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Small Business Owner',
      content: 'As a business owner, I need insurance I can rely on. Puzzel has provided excellent coverage and support for over 5 years now.',
      rating: 5
    },
    {
      name: 'Emma Williams',
      role: 'Family Insurance',
      content: 'Their health insurance plans have been perfect for our growing family. Affordable, comprehensive, and easy to understand.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Insurance that protects what matters most</h1>
            <p>
              Experience peace of mind with comprehensive coverage tailored to your unique needs. 
              Simple, transparent, and always there when you need us.
            </p>
            <div className="hero-buttons">
              <Link to="/quote" className="btn btn-primary btn-large">
                Get a Free Quote
              </Link>
              <Link to="/services" className="btn btn-secondary btn-large">
                Explore Services
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>500K+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>$50B+</h3>
                <p>Coverage Provided</p>
              </div>
              <div className="stat">
                <h3>4.9/5</h3>
                <p>Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Comprehensive Insurance Solutions</h2>
            <p>Whatever you need to protect, we've got you covered with our wide range of insurance products.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-link">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Puzzel Insurance?</h2>
            <p>We're committed to providing exceptional service and comprehensive protection.</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Don't just take our word for it - hear from those we've helped protect.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to get started?</h2>
            <p>Get a personalized quote in minutes and discover the perfect coverage for your needs.</p>
            <Link to="/quote" className="btn btn-primary btn-large">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

